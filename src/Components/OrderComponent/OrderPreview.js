import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import phone from '../../Assets/Images/commons/phone.png';
import {normalize} from '../../Helpers/normalize';
import {colors} from '../../Assets/Colors/colors';
import {images} from './statusImages';

function OrderPreview(props) {
  const {type} = props;
  const data = [
    {
      1: 'test',
    },
    {
      1: 'test',
    },
    {
      1: 'test',
    },
  ];

  function renderItem() {
    let render;
    if (data?.length > 0) {
      render = (
        <>
          <View
            style={[
              styles.midRow,
              {alignItems: 'center', alignContent: 'center'},
            ]}>
            <View
              style={{
                backgroundColor: colors.whitey,
                height: normalize(12),
                width: normalize(12),
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Epilogue-Bold',
                  fontSize: normalize(10),
                  textAlignVertical: 'center',
                  alignSelf: 'center',
                }}>
                2
              </Text>
            </View>

            <Text
              style={[
                styles.rowText,
                {marginLeft: normalize(6), fontFamily: 'Epilogue-SemiBold'},
              ]}>
              Hamburguesas Jumbo
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Epilogue-Light',
              fontSize: normalize(11.5),
              paddingTop: normalize(4),
              marginLeft: normalize(16),
            }}>
            Tomate, Cebolla, Lechuga.
          </Text>
        </>
      );
    }
    return render;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        if (props?.onPress) {
          props.onPress();
        }
      }}
      style={[styles.container, props?.style]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.principalText}>Luz Viera</Text>
        <Text style={styles.principalText}>7:30 PM</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: '3%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.rowText, {color: 'black'}]}>
          Miércoles Feb 16, 2022
        </Text>

        <View style={[styles.midRow]}>
          <Image
            style={{width: normalize(10), height: normalize(11)}}
            source={phone}
            resizeMode="contain"
          />
          <Text style={[styles.rowText, {marginLeft: normalize(5)}]}>
            Tel:1234567890
          </Text>
        </View>
      </View>
      {renderItem()}
      {type == 'Pick' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 100,
              paddingHorizontal: '3%',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={[
                {
                  color: 'white',
                  fontFamily: 'Epilogue-SemiBold',
                  fontSize: normalize(11.5),
                },
              ]}>
              Total: $230.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.pressed()}>
            <Image
              style={{width: normalize(138), height: normalize(25)}}
              source={images.cancel}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

export default OrderPreview;
