import React from 'react';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';
import styles from './styles';

function ButtonComponent(props) {
  return (
    <TouchableOpacity
      disabled={props?.disabled}
      onPress={() => (props?.loading === true ? null : props?.onPress())}
      style={[
        props?.styleButton,
        styles.button,
        {
          height: props?.styleButton?.height
            ? props?.styleButton?.height
            : global?.isTablet
            ? normalize(40)
            : normalize(45),
          backgroundColor: props?.styleButton?.backgroundColor ?? colors.brown,
          width: props?.styleButton?.width ?? '100%',
          marginTop: props?.styleButton?.top ?? normalize(5),
        },
      ]}>
      {props?.loading === true ? (
        <ActivityIndicator size="large" color="white" style={styles.center} />
      ) : (
        <Text
          style={[
            styles.btnText,
            {color: props?.styleButton?.letterColor ?? 'white'},
          ]}>
          {props?.buttonText}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default ButtonComponent;
