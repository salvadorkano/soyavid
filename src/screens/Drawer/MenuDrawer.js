import React from 'react';
import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import styles from './drawerStyle';
import {normalize} from '../../Helpers/normalize';
import back_white from '../../Assets/Images/commons/back_white.png';
import {images} from './images';
import rest from '../../Assets/Images/Drawer/rest.png';
import close from '../../Assets/Images/Drawer/close.png';
import config from '../../Assets/Images/Drawer/config.png';
import {useDispatch, useSelector} from 'react-redux';
import {onLogOut} from '../../Redux/app-store/actions';

function MenuDrawerNav(props) {
  let {navigation} = props;
  const dispatch = useDispatch();
  const {user, app} = useSelector(store => store);
  const showCompleteDrawer = true;
  const options = [
    {
      name: 'Inicio',
      action: 'Home',
      icon: images.dashboard,
    },
    {
      name: 'Perfil',
      action: 'Profile',
      icon: images.prof,
    },
    {
      name: 'Carrito',
      action: 'Orders',
      icon: images.orders,
    },
  ];
  function logoutAsync() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      }),
    );
    dispatch(onLogOut());
  }

  function renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          showCompleteDrawer
            ? navigation.navigate(item?.action, {screen: item?.screen})
            : null;
        }}
        style={styles.touchableItem}>
        <View style={styles.containerItem}>
          <Image
            resizeMode="contain"
            style={styles.imgConfig(true)}
            source={item?.icon}
          />
          <Text
            style={[
              styles.textPrincp,
              styles.bold,
              styles.textConfigvalidation(true),
            ]}>
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.screenWraper}>
      <View style={[styles.topView]}>
        {showCompleteDrawer ? (
          <TouchableOpacity
            onPress={() =>
              props?.navigation.dispatch(StackActions.replace('App'))
            }
            style={styles.touchableBack}>
            <View>
              <Image
                resizeMode="contain"
                style={{
                  width: normalize(25),
                  height: normalize(25),
                }}
                source={back_white}
              />
            </View>
            <View style={styles.containerTextUser}>
              <Text style={[styles.textPrincp]}>
                {user?.currentUser?.fullName ?? 'Usuario'}
              </Text>
              <Text style={[styles.lightText]}>Volver al Inicio</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.middleView}>
        <View style={styles.containerImgRes}>
          {app?.restaurantOpen !== null ? (
            <Image resizeMode="contain" style={styles.imgRes} source={rest} />
          ) : null}
          <Text style={[styles.textPrincp, styles.textName]}>
            {app?.restaurantOpen?.name}
          </Text>
        </View>

        <FlatList
          style={styles.distanceTop}
          data={options}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>

      <View style={[styles.bottomView]}>
        {/* <TouchableOpacity
          style={styles.touchableConfig}
          onPress={() =>
            app?.restaurantOpen !== null
              ? navigation.navigate('Configuration')
              : {}
          }>
          <View style={styles.containerConfig}>
            <Image
              resizeMode="contain"
              style={styles.imgConfig(showCompleteDrawer)}
              source={config}
            />
            <Text
              style={[
                styles.textPrincp,
                styles.bold,
                styles.textConfigvalidation(showCompleteDrawer),
              ]}>
              Configuración
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => logoutAsync()}
          style={styles.touchableOut}>
          <View style={styles.containerOut}>
            <Image resizeMode="contain" style={styles.imgOut} source={close} />
            <Text
              style={[styles.textPrincp, styles.bold, styles.textCenterOut]}>
              Cerrar Sesión
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MenuDrawerNav;
