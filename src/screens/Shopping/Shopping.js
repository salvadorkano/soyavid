import {DrawerActions} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../Assets/Colors/colors';
import menu from '../../Assets/Images/commons/menu.png';
import {normalize} from '../../Helpers/normalize';
import styles from './style';
import trash_brown from '../../Assets/Images/commons/trash_brown.png';
import Utils from '../../utils/ShoppingUtils';
import {inShopping} from '../../Redux/shopping-store/actions';
import ButtonComponent from '../../Components/Button/button';
import comidaImage from '../../Assets/Images/commons/comida.png';

function ShoppingScreen({navigation, route}) {
  const {shopping} = useSelector(store => store);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    money();
  }, [shopping.shopping]);

  const money = () => {
    var res = 0;
    shopping.shopping.forEach(element => {
      res += +element.price;
    });
    setSum(res);
  };

  const deleteItem = body => {
    Utils.deleteItem(body.id, shopping.shopping).then(res => {
      dispatch(inShopping(res));
    });
  };

  const order = () => {
    let text = '';
    let id = '';
    shopping.shopping.map(obj => {
      text += `Producto: ${obj.title}\nPrecio: ${obj.price}\n`;
      id = obj.id;
    });
    text += `Subtotal: $${sum} pesos`;
    let mobile = Platform.OS == 'ios' ? '521' + phone : '+521' + '2721288529';
    sendMessage(`whatsapp://send?text=Orden\n${text} \n&phone=${mobile}`);
  };

  const sendMessage = link => {
    console.log('aqui va el link', link);
    if (link != undefined) {
      console.log('no es undefined');
      Linking.openURL(link)
        .then(supported => {
          console.log('supported', supported);
          // if (!supported) {
          //   Alert.alert('Porfavor instalar Whats App');
          // } else {
          return Linking.openURL(link);
          // }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
      Alert.alert('Error', 'Hubo un problema al cargar la información', [
        {
          text: 'Cancelar',
          onPress: () => RootNavigation.goBack(),
          style: 'cancel',
        },
        {text: 'Reintentar', onPress: () => sendMessage(link)},
      ]);
    }
  };

  function renderItem(item) {
    return (
      <View style={styles.containerItem}>
        <TouchableOpacity
          onPress={() => console.log('shopping', shopping)}
          style={styles.containerImgTxt}>
          <Image
            resizeMode="contain"
            style={styles.imgConfig}
            source={comidaImage}
          />
          <View>
            <Text
              style={[
                styles.textPrincp,
                styles.bold,
                styles.textConfigvalidation,
              ]}>
              {item?.title}
            </Text>
            <Text
              style={[
                styles.textPrincp,
                styles.bold,
                styles.textConfigvalidation,
              ]}>
              ${item?.price}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteItem(item)}
          style={{justifyContent: 'center'}}>
          <Image
            resizeMode="contain"
            style={styles.imgAdd}
            source={trash_brown}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '7%',
          paddingTop: '3%',
          paddingBottom: '5%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            style={{width: normalize(22), height: normalize(22)}}
            source={menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Epilogue-Bold',
            color: 'black',
            fontSize: normalize(16),
            paddingLeft: normalize(25),
          }}>
          Carrito
        </Text>
      </View>

      <FlatList
        style={styles.distanceTop}
        data={shopping.shopping}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
      <View
        style={{
          marginHorizontal: normalize(20),
          marginVertical: normalize(20),
        }}>
        <ButtonComponent
          onPress={() => order()}
          // onPress={() =>
          //   props?.navigation.dispatch(StackActions.replace('App'))
          // }
          buttonText={'Enviar'}
        />
      </View>
    </View>
  );
}

export default ShoppingScreen;
