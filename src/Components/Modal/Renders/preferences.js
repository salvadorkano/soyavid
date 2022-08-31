import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';
import InputComponent from '../../Input/CustomInput';
import back_white from '../../../Assets/Images/commons/back_white.png';

function PreferencesRender(props) {
  const {renderType} = props;

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
          width: '100%',
          borderRadius: normalize(10),
          paddingVertical: '9%',
          paddingHorizontal: '5%',
        }}>
        <View>
          <Text
            style={[
              {
                fontFamily: 'Epilogue-SemiBold',
                color: colors.brown,
                fontSize: normalize(12),
              },
            ]}>
            Nueva entrada
          </Text>

          <InputComponent
            style={{backgr: colors.whitey, height: normalize(110)}}
            placeholder={'Ingresa comentario'}
          />
        </View>
      </View>
      <ButtonComponent
        onPress={() => props?.close()}
        styleButton={{
          backgroundColor: colors.salmon,
          width: '100%',
          alignSelf: 'flex-end',
          top: '5%',
        }}
        buttonText={'Guardar '}
      />
    </>
  );
}

export default PreferencesRender;
