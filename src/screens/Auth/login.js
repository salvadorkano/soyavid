import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Styles/loginstyle';
import {useFocusEffect} from '@react-navigation/native';
import InputComponent from '../../Components/Input/CustomInput';
import logo from '../../Assets/Images/logos/soyavidIcon.png';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';
import CustomModal from '../../Components/Modal/ComponentModal';
import {asyncLogin, getInfo} from '../../Functions/User/functions';
import {
  onRefreshToken,
  refreshCurrentUser,
} from '../../Redux/user-store/actions';
import {StackActions} from '@react-navigation/native';

function Login(props) {
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [modalData, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if (mail === '' || pass === '') {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [mail, pass]);

  function onLogin() {
    if (mail === '' || pass === '') {
      setData('Por favor llena todos los campos');
      setModal(true);
    } else {
      dispatch(refreshCurrentUser('token'));
      dispatch(onRefreshToken('token'));
      props?.navigation.dispatch(StackActions.replace('App'));
      // setLoading(true);
      // let body = {
      //   email: mail,
      //   password: pass,
      // };
      // asyncLogin(body).then(res => {
      //   if (res?.object === 'CODE') {
      //     setData(res?.message);
      //     setModal(true);
      //     setTimeout(() => {
      //       props?.navigation.navigate('VerifyCode', {
      //         mail: mail,
      //         pass: pass,
      //       });
      //     }, 650);
      //   } else if (res?.object && res?.status !== 'Error') {
      //     dispatch(onRefreshToken(res.object));
      //     setLoading(false);
      //     getInfo().then(resp => {
      //       if (resp?.status === 'Ok') {
      //         dispatch(refreshCurrentUser(resp?.object));
      //       }
      //     });
      //     props?.navigation.dispatch(StackActions.replace('App'));
      //   } else {
      //     setData(res?.message);
      //     setModal(true);
      //     setLoading(false);
      //   }
      // });
    }
  }

  const validateEmail = textEmail => {
    let string = textEmail.trim();
    let reg =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(string) === false) {
      setMail(string);
      setShowError(true);
      setValidate(false);
    } else {
      setMail(string);
      setShowError(false);
      setValidate(true);
    }
  };

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
          <Image source={logo} resizeMode="contain" style={styles.imageLogin} />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Inicia sesi??n</Text>
            <InputComponent
              value={mail}
              // onChange={setMail}
              placeholder={'Correo electr??nico'}
              onChange={value => validateEmail(value)}
            />
            {showError ? (
              <Text style={styles.styleError}>
                Formato de correo incorrecto.
              </Text>
            ) : null}
            <InputComponent
              onChange={setPass}
              placeholder={'Contrase??a'}
              type={'password'}
            />
            <Text
              onPress={() => props?.navigation.navigate('Recover')}
              style={[styles.centerText, {marginTop: normalize(35)}]}>
              ??Olvidaste tu contrase??a?
            </Text>
          </View>

          <View style={styles.bottomView}>
            <ButtonComponent
              loading={loading}
              disabled={!validate}
              onPress={() => (loading ? null : onLogin())}
              styleButton={
                validate
                  ? {backgroundColor: colors.salmon, top: normalize(5)}
                  : {backgroundColor: colors.down_gray, top: normalize(5)}
              }
              buttonText={'Inicia sesi??n'}
            />
            <Text style={[styles.centerText, styles.paddingV]}>
              ??No tienes cuenta?
            </Text>

            <ButtonComponent
              onPress={() => props?.navigation.navigate('Register')}
              // onPress={() =>
              //   props?.navigation.dispatch(StackActions.replace('App'))
              // }
              buttonText={'Reg??strate aqu??'}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function LoginScreen({navigation, route}) {
  const [mounted, setMounted] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []),
  );

  return mounted ? <Login route={route} navigation={navigation} /> : null;
}

export default LoginScreen;
