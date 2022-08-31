import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';
import back_white from '../../../Assets/Images/commons/back_white.png';
import pick from '../../../Assets/Images/commons/pick.png';

function TimeRender(props) {
  return (
    <>
      <TouchableOpacity onPress={() => props?.close()}>
        <Image
          resizeMode="contain"
          style={{
            width: normalize(25),
            height: normalize(25),
          }}
          source={back_white}
        />
      </TouchableOpacity>

      <View
        style={{
          marginTop: '10%',
          backgroundColor: 'white',
          width: '95%',
          borderRadius: normalize(10),
          paddingVertical: '15%',
          paddingHorizontal: '15%',
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
          source={pick}
        />

        <Text
          style={[
            {
              fontFamily: 'Epilogue-SemiBold',
              color: colors.brown,
              fontSize: normalize(20),
              marginTop: normalize(16),
            },
          ]}>
          {'Pick & Go'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: normalize(8),
          }}>
          <View
            style={{
              backgroundColor: '#5BC236',
              height: normalize(7),
              width: normalize(7),
              borderRadius: 100,
            }}
          />
          <Text
            style={[
              {
                paddingLeft: '2%',
                fontFamily: 'Epilogue-Regular',
                color: '#5BC236',
                fontSize: normalize(12),
              },
            ]}>
            Activado
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '80%',
            marginTop: '7%',
          }}>
          <View style={{width: '40%', alignItems: 'center'}}>
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-Regular',
                  color: colors.black,
                  fontSize: normalize(11),
                  paddingVertical: normalize(9),
                },
              ]}>
              Desde:
            </Text>
            <TextInput
              textAlign="center"
              style={{
                fontFamily: 'Epilogue-Bold',
                fontSize: normalize(22),
                backgroundColor: colors.whitey,
                borderRadius: normalize(9),
                alignContent: 'center',
                width: '100%',
                height: normalize(50),
                color: colors.brown,
              }}
              allowFontScaling={false}
              textContentType={'none'}
            />
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-Regular',
                  color: colors.black,
                  fontSize: normalize(11),
                  paddingVertical: normalize(9),
                },
              ]}>
              minutos
            </Text>
          </View>
          {/* <View style={{}}> */}
          <View
            style={{
              height: normalize(5),
              width: normalize(15),
              backgroundColor: colors.brown,
            }}></View>
          {/* </View> */}
          <View style={{width: '40%', alignItems: 'center'}}>
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-Regular',
                  color: colors.black,
                  fontSize: normalize(11),
                  paddingVertical: normalize(9),
                },
              ]}>
              Hasta:
            </Text>
            <TextInput
              textAlign="center"
              style={{
                fontFamily: 'Epilogue-Bold',
                fontSize: normalize(22),
                backgroundColor: colors.whitey,
                borderRadius: normalize(9),
                alignContent: 'center',
                width: '100%',
                height: normalize(50),
                color: colors.brown,
              }}
              allowFontScaling={false}
              textContentType={'none'}
            />
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-Regular',
                  color: colors.black,
                  fontSize: normalize(11),
                  paddingVertical: normalize(9),
                },
              ]}>
              minutos
            </Text>
          </View>
        </View>
        <Text
          style={[
            {
              fontFamily: 'Epilogue-Bold',
              color: colors.black,
              fontSize: normalize(12),
              textAlign: 'center',
              lineHeight: normalize(15),
              marginTop: normalize(25),
            },
          ]}>
          Determina el tiempo promedio de preparación de los alimentos.
        </Text>
        <Text
          style={[
            {
              fontFamily: 'Epilogue-Regular',
              color: colors.black,
              fontSize: normalize(12),
              textAlign: 'center',
              lineHeight: normalize(15),
            },
          ]}>
          Esta información se mostrará en los pedidos entrantes
        </Text>
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

export default TimeRender;
