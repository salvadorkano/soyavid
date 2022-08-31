import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import MenuRender from './Renders/menuRegister';
import Modal from 'react-native-modal';
import TimeRender from './Renders/time';
import OrderRender from './Renders/preorder';
import PreferencesRender from './Renders/preferences';
import StatusRender from './Renders/status';
import AlertRender from './Renders/alert';
import ListRender from './Renders/list';
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

        {type == 'CATEGORY' || type == 'DISH' ? (
          <MenuRender
            isEdit={props?.isEdit}
            callback2={(hasInfo) => props?.callback2(hasInfo)}
            categoryId={categoryId}
            callback={() => props?.callback()}
            data={data}
            close={() => props?.onClose()}
            renderType={type}
          />
        ) : null}
        {type == 'TIME' ? <TimeRender close={() => props?.onClose()} /> : null}
        {type == 'PREORDER' ? (
          <OrderRender close={() => props?.onClose()} />
        ) : null}

        {type == 'PREFERENCES' ? (
          <PreferencesRender close={() => props?.onClose()} />
        ) : null}
        {type == 'STATUSES' ? (
          <StatusRender
            callback={selection => props?.callBack(selection)}
            close={() => props?.onClose()}
          />
        ) : null}
        {type == 'ALERT' ? (
          <AlertRender
            buttonText={props?.buttonText}
            text={props?.text}
            callback={selection => props?.callBack()}
            close={() => props?.onClose()}
          />
        ) : null}
        {type == 'LIST-CATEGORIES' || type == 'LIST-CUISINE' ? (
          <ListRender
            hasCateg={props?.hasCateg}
            hasCuisines={props?.hasCuisines}
            data={data}
            text={props?.text}
            buttonText={props?.buttonText}
            callback={selection => props?.callBack(selection, type)}
            close={() => props?.onClose()}
            type={type}
          />
        ) : null}
      </Modal>
    </View>
  );
}

export default CustomModal;
