import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';
import preord from '../../../Assets/Images/commons/preord.png';
import styles from './Styles/order';
import phone from '../../../Assets/Images/commons/phone.png';

function OrderRender(props) {
  const data = [
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
        <View style={{alignSelf: 'flex-start'}}>
          <View
            style={[
              styles.midRow,
              {
                alignItems: 'center',
                alignContent: 'center',
              },
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
        </View>
      );
    }
    return render;
  }
  return (
    <>
      <View
        style={{
          marginTop: '10%',
          backgroundColor: 'white',
          width: '100%',
          borderRadius: normalize(10),
          paddingVertical: '15%',
          paddingHorizontal: '5%',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: normalize(55),
            height: normalize(55),
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 99999,
            top: normalize(-25),
          }}
          source={preord}
        />

        <Text
          style={[
            {
              fontFamily: 'Epilogue-SemiBold',
              color: colors.black,
              fontSize: normalize(20),
              marginTop: normalize(16),
            },
          ]}>
          {'Pre Orden'}
        </Text>
        <Text
          style={[
            {
              paddingLeft: normalize(9),
              fontFamily: 'Epilogue-Medium',
              color: 'grey',
              fontSize: normalize(12),
              marginTop: normalize(7),
            },
          ]}>
          Disponible
        </Text>
        <View
          style={{
            width: '100%',
            borderWidth: 0,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: normalize(15),
          }}>
          <Text style={styles.principalText}>Luz Viera</Text>
          <Text style={styles.principalText}>7:30 PM</Text>
        </View>
        <View
          style={{
            paddingVertical: '2%',
            justifyContent: 'space-between',
            width: '100%',
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
        <FlatList
          contentContainerStyle={{width: '100%'}}
          style={{
            width: '100%',
            marginTop: '5%',
          }}
          data={data}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>

      <ButtonComponent
        onPress={() => props?.close()}
        styleButton={{
          backgroundColor: colors.salmon,
          width: '100%',
          alignSelf: 'flex-end',
          top: '2%',
        }}
        buttonText={'Listo'}
      />
    </>
  );
}

export default OrderRender;
