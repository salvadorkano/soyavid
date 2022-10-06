import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {normalize} from '../../Helpers/normalize';
import SplashScreen from 'react-native-splash-screen';
import menu from '../../Assets/Images/commons/menu.png';
import {colors} from '../../Assets/Colors/colors';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

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
