import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles/loginstyle';
import {useFocusEffect} from '@react-navigation/native';
import logo from '../../Assets/Images/logos/soyavidIcon.png';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';
import CustomModal from '../../Components/Modal/ComponentModal';

import {
  asyncLogin,
  confirmEmail,
  getInfo,
  resendcode,
} from '../../Functions/User/functions';
import {
  onRefreshToken,
  refreshCurrentUser,
} from '../../Redux/user-store/actions';
import {StackActions} from '@react-navigation/native';

function VerifyCode(props) {
  const {mail, pass} = props.route.params;
  const [modalVisible, setModal] = useState(false);
  const [modalData, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  function onLogin() {
    setLoading(true);
    let body = {
      email: mail,
      password: pass,
    };
    asyncLogin(body).then(res => {
      if (res?.object && res?.status !== 'Error') {
        dispatch(onRefreshToken(res.object));
        setLoading(false);
        getInfo().then(resp => {
          if (resp?.status === 'Ok') {
            dispatch(refreshCurrentUser(resp?.object));
          }
        });
        props?.navigation.dispatch(StackActions.replace('App'));
      } else {
        setData(res?.message);
        setModal(true);
        setLoading(false);
      }
    });
  }

  function verifyCode() {
    if (value === '') {
      setModal(true);
    } else {
      setLoading(true);
      confirmEmail({
        email: mail,
        code: value,
      }).then(res => {
        if (res?.object && res?.status !== 'Error') {
          onLogin();
        } else {
          setData(res?.message);
          setModal(true);
          setLoading(false);
        }
      });
    }
  }

  function sendCodeAgain() {
    resendcode({email: mail}).then(res => {
      if (res?.status === 'Ok') {
        setData(res?.message);
        setModal(true);
      } else {
        setData(res?.message);
        setModal(true);
      }
    });
  }

  return (
    <KeyboardAvoidingView behavior={'height'} style={[styles.container]}>
      <CustomModal
        text={modalData}
        onClose={() => setModal(false)}
        nav={props?.navigation}
        visible={modalVisible}
        type={'ALERT'}
        buttonText={'OK'}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.containerScroll}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Image source={logo} resizeMode="contain" style={styles.img} />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Ingresa el código</Text>

            <TouchableOpacity onPress={() => sendCodeAgain()}>
              <Text style={[styles.centerText, {marginTop: normalize(35)}]}>
                No tengo código reenviar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
            <ButtonComponent
              loading={loading}
              onPress={() => verifyCode()}
              styleButton={{backgroundColor: colors.salmon}}
              buttonText={'Verificar Cuenta'}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function VerifyCodeScreen({navigation, route}) {
  const [mounted, setMounted] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []),
  );

  return mounted ? <VerifyCode route={route} navigation={navigation} /> : null;
}

export default VerifyCodeScreen;
