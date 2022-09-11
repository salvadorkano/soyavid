import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import {normalize} from '../../Helpers/normalize';
import SplashScreen from 'react-native-splash-screen';
// import logowhite_horiz from '../../Assets/Images/logos/logowhite_horiz.png';
import menu from '../../Assets/Images/commons/menu.png';
import btn_register from '../../Assets/Images/commons/btn_register.png';
import add_salmon from '../../Assets/Images/commons/add_salmon.png';
import {colors} from '../../Assets/Colors/colors';
import RestPreview from '../../Components/RestaurantPreview/preview';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {checkRestaurantsData} from '../../Functions/User/functions';
import FastImage from 'react-native-fast-image';
import {isRestOpen} from '../../Redux/app-store/actions';

function Home({navigation, route}) {
  const tablet = global.isTablet;
  const [restaurants, setRest] = useState([]);
  const {user} = useSelector(store => store);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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

  function renderItem(item, index) {
    return <RestPreview nav={navigation} data={item} />;
  }

  function setRestaurantsRender() {
    return (
      <View
        style={{
          paddingHorizontal: '7%',
          paddingTop: normalize(35),
          backgroundColor: colors.whitey,
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Epilogue-Bold',
              color: colors.brown,
              fontSize: normalize(20),
            }}>
            Tus Restaurantes
          </Text>
          {restaurants.length > 0 ? (
            <TouchableOpacity
              style={{marginLeft: '3%'}}
              onPress={() => navigation.navigate('Plans')}>
              <Image
                style={{width: normalize(18), height: normalize(18)}}
                source={add_salmon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={{flex: 1}}>
          <FlatList
            ItemSeparatorComponent={() => (
              <View style={{height: normalize(15)}}></View>
            )}
            contentContainerStyle={{width: '100%'}}
            style={{
              width: '100%',
              marginTop: '5%',
              // height: '50%',
            }}
            showsVerticalScrollIndicator={false}
            data={restaurants}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>
        <View style={{flex: restaurants.length <= 0 ? 0.2 : 0.1}}>
          {restaurants.length <= 0 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Plans')}
              style={{height: normalize(60)}}>
              <Image
                style={{width: '100%', flex: 1}}
                source={btn_register}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }

  function setPrincipalRender() {
    return (
      <FastImage
        resizeMode="cover"
        style={{width: '100%', flex: 1, justifyContent: 'space-between'}}
        source={require('../../Assets/Images/commons/backgr.png')}>
        <View
          style={{
            paddingHorizontal: '7%',
            paddingTop: '5%',
            justifyContent: 'space-between',
            height: '90%',
          }}>
          <View style={{}}>
            {/* <Image
              style={{width: normalize(170), height: normalize(50)}}
              source={logowhite_horiz}
              resizeMode="contain"
            /> */}
            <Text
              style={{
                fontFamily: 'Epilogue-Medium',
                color: 'white',
                fontSize: normalize(50),
                marginTop: tablet ? '1%' : '5%',
              }}>
              La espera terminó,
            </Text>
            <Text
              style={{
                fontFamily: 'Epilogue-Medium',
                color: 'white',
                fontSize: normalize(14),
                marginTop: '2%',
              }}>
              Administra tus operaciones en un solo lugar {''}
              <Text
                style={{
                  fontFamily: 'Epilogue-Light',
                  color: 'white',
                  fontSize: normalize(14),
                }}>
                y recibe clientes de manera eficaz con sencillos pasos.
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Plans')}
            style={{height: normalize(60)}}>
            <Image
              style={{width: '100%', height: '90%'}}
              source={btn_register}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: '3%'}}>
          <Text
            style={{
              fontFamily: 'Epilogue-Medium',
              color: 'black',
              fontSize: normalize(11),
              textAlign: 'center',
              paddingHorizontal: '5%',
            }}>
            Puedes registrar más de un restaurante. Se generará un cobro por
            cada restaurante registrado
          </Text>
        </View>
      </FastImage>
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
      <Text style={{color: colors.black, alignSelf: 'center', fontSize: 30}}>
        Home
      </Text>
    </View>
  );
}

export default Home;
