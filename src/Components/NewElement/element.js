import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {normalize} from '../../Helpers/normalize';
import {colors} from '../../Assets/Colors/colors';
import moment from 'moment';

function ElementComponent(props) {
  const {item, type} = props;
  return (
    <TouchableOpacity
      onPress={() => (type == 'date' ? props?.onPress(item) : null)}
      style={{
        borderRadius: normalize(11),
        backgroundColor: colors.salmon,
        justifyContent: 'center',
        alignItems: 'center',
        height: normalize(20),
        alignSelf: 'center',
      }}>
      <Text
        style={[
          {
            paddingHorizontal: normalize(10),

            color: 'white',
            fontFamily: 'Epilogue-Regular',
            fontSize: normalize(12),
          },
        ]}>
        {type == 'date' ? moment(item?.date, 'M/D/YYYY').format('YYYY/MM/DD') : item?.name}
      </Text>
    </TouchableOpacity>
  );
}

export default ElementComponent;
