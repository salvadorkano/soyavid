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
import styles from './Styles/register';
import {useFocusEffect} from '@react-navigation/native';
import InputComponent from '../../Components/Input/CustomInput';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import CustomModal from '../../Components/Modal/ComponentModal';
import {setNewPassword} from '../../Functions/User/functions';
import logo from '../../Assets/Images/logos/soyavidIcon.png';

function RestardPassword(props) {
  const [code, setCode] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [text, setText] = useState();
  const [showPassText, setShowPass] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (code === '' || mail === '' || pass === '') {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [code, mail, pass]);

  function changePassword() {
    if (code === '' || mail === '' || pass === '') {
      setText('Por favor llena todos los campos');
      setModal(true);
    } else {
      // setLoading(true);
      props?.navigation.navigate('Login');
      // setNewPassword({
      //   code: code,
      //   email: mail,
      //   password: pass,
      // }).then(res => {
      //   setLoading(false);
      //   if (res?.status === 'Ok') {
      //     setText(res?.message);
      //     setModal(true);
      //     setResponseModal(true);
      //   } else {
      //     setText(res?.message);
      //     setModal(true);
      //     setResponseModal(false);
      //   }
      // });
    }
  }

  function closeModal() {
    setModal(false);
    if (responseModal) {
      props?.navigation.navigate('Login');
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
        text={text}
        onClose={() => closeModal()}
        nav={props?.navigation}
        visible={modalVisible}
        type={'ALERT'}
        buttonText={'OK'}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Image
            source={logo}
            resizeMode="contain"
            style={[styles.img, styles.topDistance]}
          />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Cambiar contraseña</Text>
            <InputComponent
              value={mail}
              onChange={value => validateEmail(value)}
              placeholder={'Correo electrónico'}
            />
            {showError ? (
              <Text style={styles.styleError}>
                Formato de correo incorrecto.
              </Text>
            ) : null}
            <InputComponent
              value={pass}
              onChange={val => {
                setPass(val);
                setShowPass(true);
              }}
              placeholder={'Contraseña'}
              type={'password'}
            />
            <InputComponent
              value={code}
              onChange={val => {
                setCode(val);
                setShowPass(false);
              }}
              placeholder={'Codigo'}
            />
            {showPassText ? (
              <Text style={styles.textValidation}>
                Mínimo 8 caracteres, 1 mayúscula y 1 caracter especial
              </Text>
            ) : null}
          </View>
          <View style={styles.bottomView}>
            <ButtonComponent
              loading={loading}
              disabled={!validate}
              onPress={() => (loading ? null : changePassword())}
              styleButton={
                validate
                  ? {backgroundColor: colors.salmon, top: normalize(5)}
                  : {backgroundColor: colors.down_gray, top: normalize(5)}
              }
              buttonText={'Cambiar contraseña'}
            />
            <Text style={[styles.centerText, styles.textAccount]}>
              Recordaste tu contraseña
            </Text>

            <ButtonComponent
              onPress={() => props?.navigation.navigate('Login')}
              buttonText={'Inicia sesión aquí'}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function RestardPasswordScreen({navigation, route}) {
  const [mounted, setMounted] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []),
  );

  return mounted ? (
    <RestardPassword route={route} navigation={navigation} />
  ) : null;
}

export default RestardPasswordScreen;
