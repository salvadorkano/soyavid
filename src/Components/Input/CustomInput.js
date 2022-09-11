import React, {useEffect, useState} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import styles from './styles';
import show from '../../Assets/Images/commons/show.png';
import {normalize} from '../../Helpers/normalize';
import {fonts} from '../../Assets/Fonts/fonts';

function InputComponent(props) {
  const {style, leftText} = props;
  let isSecure = props?.type == 'password';
  let [secure, setSecure] = useState(isSecure);
  return (
    <View
      style={{
        width: style?.width ?? '100%',
        marginTop: style?.top ?? normalize(15),
        zIndex: style?.zIndex ?? 99999,
      }}>
      {props?.upperText ? (
        <Text
          style={[
            styles.textTop,
            {
              marginLeft: leftText ?? normalize(15),
              paddingBottom: leftText == 5 ? 0 : normalize(8),
            },
          ]}>
          {props?.upperText}:
        </Text>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: style?.backgr ?? colors.primary_cream,
          height: style?.height
            ? style?.height
            : global?.isTablet
            ? normalize(40)
            : normalize(45),
          borderRadius: style?.borderRadius ?? normalize(8),
        }}>
        <TextInput
          editable={props?.editable ?? true}
          style={{
            flex: 1,
            paddingTop: props?.multi ? '5%' : normalize(8),
            paddingLeft: style?.paddingL ?? normalize(15),
            // fontFamily: 'Epilogue-Regular',
            fontFamily:
              props?.font !== undefined ? props.font : fonts.epilogueRegular,
            fontSize: style?.letterSize
              ? style?.letterSize
              : global?.isTablet
              ? normalize(12)
              : normalize(13),
            textAlign: style?.letterSize == normalize(12) ? 'center' : 'auto',
            color: props?.editable == false ? 'grey' : colors.black,
            textAlignVertical:
              props?.placeholder == 'Descripción' ||
              props?.placeholder ==
                '¿Quieres agregar una solicitud especial?' ||
              props?.placeholder == 'Deja una reseña (Opcional)'
                ? 'top'
                : 'center',
          }}
          onKeyPress={({nativeEvent}) => {
            if (props?.keyCallback) {
              props?.keyCallback(nativeEvent);
            }
          }}
          returnKeyType={props?.returnType ?? 'default'}
          allowFontScaling={false}
          keyboardType={props?.keyboardType}
          onChangeText={props?.onChange}
          value={props?.value}
          placeholder={props?.placeholder}
          placeholderTextColor={style?.textcolor ?? colors.black}
          secureTextEntry={secure}
          textContentType={'none'}
          multiline={props?.multi}
        />

        {props?.rightImage !== null || props?.rightImage !== undefined ? (
          <TouchableOpacity
            onPress={() => {
              if (props?.rightPress) {
                props.rightPress();
              }
            }}
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: props?.isAdd ? normalize(20) : normalize(15),
                height: props?.isAdd ? normalize(20) : normalize(15),
                alignSelf: 'center',
              }}
              resizeMode={'contain'}
              source={props?.rightImage}
            />
          </TouchableOpacity>
        ) : null}
        {props?.type == 'password' ? (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}
            style={{
              paddingLeft: 5,
              paddingRight: 10,
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: normalize(18),
                height: normalize(18),
                alignSelf: 'center',
              }}
              resizeMode={'contain'}
              source={show}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default InputComponent;
