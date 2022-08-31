import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';

function AlertRender(props) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '7%',
        borderRadius: normalize(10),
        marginTop: global?.isTablet ? '20%' : '60%',
      }}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Epilogue-SemiBold',
          fontSize: normalize(14),
          textAlign: 'center',
        }}>
        {props?.text}
      </Text>

      <ButtonComponent
        onPress={() => props?.close()}
        styleButton={{
          backgroundColor: colors.salmon,
          width: '60%',
          alignSelf: 'center',
          top: '8%',
        }}
        buttonText={props?.buttonText}
      />
    </View>
  );
}

export default AlertRender;
