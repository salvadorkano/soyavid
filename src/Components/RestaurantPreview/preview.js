import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {normalize} from '../../Helpers/normalize';
import go_grey from '../../Assets/Images/commons/go_grey.png';
import go_black from '../../Assets/Images/commons/go_black.png';
import time from '../../Assets/Images/commons/time.png';
import bell from '../../Assets/Images/commons/bell.png';
import star from '../../Assets/Images/commons/star.png';
import rest from '../../Assets/Images/Drawer/rest.png';
import FastImage from 'react-native-fast-image';
import {getRestById} from '../../Functions/User/functions';
import {useDispatch} from 'react-redux';
import {isRestOpen} from '../../Redux/app-store/actions';
import {colors} from '../../Assets/Colors/colors';

function RestPreview(props) {
  const {data} = props;
  const {stepNumber, activatedByAdmin} = data;
  const dispatch = useDispatch();

  async function getRestaurant() {
    await getRestById(data?.restaurantId).then(res => {
      if (res?.status == 'Ok') {
        let step = (stepNumber + 1).toString();
        props?.nav.navigate(step, {data: res?.object});
      }
    });
  }
  return (
    <TouchableOpacity
      onPress={() => props?.nav.navigate('RestaurantDetail')}
      // onPress={() => {
      //   if (stepNumber < 10) {
      //     getRestaurant();
      //   } else if (activatedByAdmin == false) {
      //     return;
      //   } else {
      //     dispatch(isRestOpen(res?.object));
      //     props?.nav.navigate('Dashboard');
      //   }
      // }}
      style={styles.container}>
      <FastImage
        borderRadius={normalize(10)}
        resizeMode="cover"
        style={{
          width: '100%',
          flex: 1,
          borderRadius: normalize(10),
          opacity: activatedByAdmin == false ? 0.7 : 1,
          justifyContent: 'space-between',
        }}
        source={
          data?.mainImageUrl !== ''
            ? {uri: data?.mainImageUrl}
            : require('../../Assets/Images/commons/bk_preview.png')
        }>
        {activatedByAdmin == false ? (
          <View style={styles.whiteContainer}>
            <Image
              style={{width: normalize(12), height: normalize(12)}}
              source={time}
              resizeMode="contain"
            />
            <Text style={styles.contentText}>
              {stepNumber < 10
                ? 'Restaurante pendiente de registro completo'
                : 'Restaurante en espera de ser validado'}
            </Text>
          </View>
        ) : (
          <View style={styles.topContainer}>
            <View style={[styles.smallContainers, {backgroundColor: 'white'}]}>
              <Image
                resizeMode="contain"
                style={styles.btnImage2}
                source={star}
              />
              <Text style={[styles.topTexts, {color: colors.brown}]}>4.82</Text>
            </View>
          </View>
        )}
        <View style={styles.bottomContainer}>
          <View style={[{flex: 1}]}>
            <View
              style={[
                {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  fontFamily: 'Epilogue-Bold',
                  color: 'black',
                  fontSize: normalize(16),
                  fontWeight: 'bold',
                }}>
                {data?.name ?? 'Pendiente'}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  resizeMode="contain"
                  style={styles.btnImage2}
                  source={rest}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue-Bold',
                    color: 'black',
                    fontSize: normalize(14),
                    fontWeight: 'bold',
                  }}>
                  Japones
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'Epilogue-Bold',
                  color: 'black',
                  fontSize: normalize(12),
                  fontWeight: 'bold',
                  marginRight: normalize(20),
                }}>
                $$$
              </Text>
            </View>
            <View style={{alignContent: 'center', flex: 1}}>
              <Text
                style={{
                  fontFamily: 'Epilogue-Bold',
                  color: 'black',
                  fontSize: normalize(12),
                }}>
                Del Valle, San Pedrom Garza Garcia - 5 km
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: normalize(20), height: normalize(20)}}
              source={activatedByAdmin === false ? go_grey : go_black}
              resizeMode="center"
            />
          </View>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
}

export default RestPreview;
