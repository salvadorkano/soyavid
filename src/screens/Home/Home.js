import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import {normalize} from '../../Helpers/normalize';
import SplashScreen from 'react-native-splash-screen';
import menu from '../../Assets/Images/commons/menu.png';
import {colors} from '../../Assets/Colors/colors';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import comidaImage from '../../Assets/Images/commons/comida.png';
import add_salmon from '../../Assets/Images/commons/add_salmon.png';
import Utils from '../../utils/ShoppingUtils';
import {inShopping} from '../../Redux/shopping-store/actions';
import preord from '../../Assets/Images/commons/preord.png';
import {getFood} from '../../Functions/User/functions';

const options = [
  {
    title: 'Sushi',
    icon: comidaImage,
    price: '120',
  },
  {
    title: 'Sushi 2',
    icon: comidaImage,
    price: '100',
  },
  {
    title: 'Sushi 3',
    icon: comidaImage,
    price: '150',
  },
];

function Home({navigation}) {
  const tablet = global.isTablet;
  const {user, shopping} = useSelector(store => store);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      SplashScreen.hide();

      // dispatch(isRestOpen(null));
      // checkRestaurantsData().then(res => {
      //   if (res?.object?.length > 0) {
      //     setRest(res.object);
      //     setLoading(false);
      //   } else {
      //     setLoading(false);
      //   }
      // });

      return () => {};
    }, [dispatch]),
  );

  useEffect(() => {
    console.log('yap');
    getFood().then(res => {
      console.log('resss', res);
      setData(res);
    });
  }, []);

  const addItem = body => {
    Utils.addItem(body, shopping.shopping).then(res => {
      dispatch(inShopping(res));
    });
  };

  function renderItem(item) {
    return (
      <View style={styles.containerItem}>
        <TouchableOpacity onPress={() => {}} style={styles.containerImgTxt}>
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
          onPress={() => addItem(item)}
          style={{justifyContent: 'center'}}>
          <Image
            resizeMode="contain"
            style={styles.imgAdd}
            source={add_salmon}
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
          Buen día, {user?.currentUser?.fullName ?? 'Usuario'}
        </Text>
      </View>
      <FlatList
        style={styles.distanceTop}
        data={data}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
      <TouchableOpacity
        style={styles.float}
        onPress={() => navigation.navigate('Shopping')}>
        <Image
          style={{
            width: normalize(40),
            height: normalize(40),
            alignSelf: 'center',
          }}
          source={preord}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Home;
