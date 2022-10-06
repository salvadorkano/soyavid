import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import AlertRender from './Renders/alert';
import back_white from '../../Assets/Images/commons/back_white.png';
import {normalize} from '../../Helpers/normalize';
import {height} from '../../Helpers/dimensions';

function CustomModal(props) {
  const {type, nav, data, categoryId} = props;

  return (
    <View>
      <Modal
        backdropOpacity={0.8}
        style={{
          justifyContent: 'flex-start',
          paddingTop: global?.isTablet ? '3%' : height / 13,
          paddingHorizontal: '2%',
        }}
        onBackdropPress={() => props?.onClose()}
        isVisible={props?.visible}>
        {type == 'ALERT' ? null : (
          <TouchableOpacity onPress={() => props?.onClose()}>
            <Image
              resizeMode="contain"
              style={{
                width: normalize(25),
                height: normalize(25),
              }}
              source={back_white}
            />
          </TouchableOpacity>
        )}
        {type == 'ALERT' ? (
          <AlertRender
            buttonText={props?.buttonText}
            text={props?.text}
            callback={selection => props?.callBack()}
            close={() => props?.onClose()}
          />
        ) : null}
      </Modal>
    </View>
  );
}

export default CustomModal;
