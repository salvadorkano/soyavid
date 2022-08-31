import React from 'react';
import {View, Text, Animated, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {deleteDish} from '../../Functions/User/functions';
import {normalize} from '../../Helpers/normalize';
import dots from '../../Assets/Images/commons/dots.png';

export default function PickerOption(props) {
  const {info} = props;
  const styleOpenPicker = {
    height: props?.openPicker ? normalize(50) : 0, //openPickerAnimation,
    opacity: props?.openPicker ? 1 : 0, //opacityPickerAnimation,
    width: normalize(94),
    backgroundColor: 'white',
    position: 'absolute',
    left: normalize(173),
    bottom: normalize(-19),
  };

  function onDelete() {
    deleteDish({
      menuId: info?.id,
    }).then(res => {
      if (res?.status == 'Ok') {
        props?.deleteCallback(res.object);
      }
    });
  }
  function onEdit() {
    props?.editPressed(info);
  }
  function _showModal() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          paddingVertical: '3%',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingLeft: '7%',
          }}>
          <TouchableOpacity
            onPress={() => onEdit()}
            style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'Epilogue-Bold',
                fontSize: normalize(13),
                color: colors.salmon,
              }}>
              Editar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete()}
            style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'Epilogue-Bold',
                fontSize: normalize(13),
                color: colors.salmon,
              }}>
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.3, paddingTop: '5%'}}>
          <TouchableOpacity onPress={() => props?.closeCallback()}>
            <Image
              resizeMode="contain"
              style={{
                width: normalize(10),
                height: normalize(15),
              }}
              source={dots}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Animated.View
      style={[
        styleOpenPicker,
        {
          borderRadius: normalize(11),
          zIndex: 2,
          shadowOffset: {width: 1, height: 0},
          shadowOpacity: 0.1,
          elevation: 10,
        },
      ]}>
      {_showModal()}
    </Animated.View>
  );
}
