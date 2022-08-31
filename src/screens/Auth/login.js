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
import logo_red from '../../Assets/Images/logos/logo_red.png';
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
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [modalData, setData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const dispatch = useDispatch();

  function onLogin() {
    if (mail === '' || pass === '') {
      setData('Por favor llena todos los campos');
      setModal(true);
    } else {
      setLoading(true);
      let body = {
        email: mail,
        password: pass,
      };
      asyncLogin(body).then(res => {
        if (res?.object === 'CODE') {
          setData(res?.message);
          setModal(true);
          setTimeout(() => {
            props?.navigation.navigate('VerifyCode', {
              mail: mail,
              pass: pass,
            });
          }, 650);
        } else if (res?.object && res?.status !== 'Error') {
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
          <Image
            source={logo_red}
            resizeMode="contain"
            style={styles.imageLogin}
          />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Inicia Sesión</Text>
            <InputComponent
              onChange={setMail}
              placeholder={'Correo Electrónico'}
            />
            <InputComponent
              onChange={setPass}
              placeholder={'Contraseña'}
              type={'password'}
            />
            <Text
              onPress={() => props?.navigation.navigate('Recover')}
              style={[styles.centerText, {marginTop: normalize(35)}]}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>

          <View style={styles.bottomView}>
            <ButtonComponent
              loading={loading}
              onPress={() => (loading === true ? null : onLogin())}
              styleButton={{backgroundColor: colors.salmon}}
              buttonText={'Inicia Sesión'}
            />
            <Text style={[styles.centerText, styles.paddingV]}>
              ¿No tienes cuenta?
            </Text>

            <ButtonComponent
              onPress={() => props?.navigation.navigate('Register')}
              buttonText={'Regístrate aquí'}
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
