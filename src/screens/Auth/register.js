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
import styles from './Styles/register';
import {useFocusEffect} from '@react-navigation/native';
import InputComponent from '../../Components/Input/CustomInput';
import logo from '../../Assets/Images/logos/soyavidIcon.png';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import CustomModal from '../../Components/Modal/ComponentModal';
import {asyncRegister} from '../../Functions/User/functions';
import back_black from '../../Assets/Images/commons/back_black.png';

function Register(props) {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [text, setText] = useState();
  const [showPassText, setShowPass] = useState(false);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (name === '' || mail === '' || pass === '' || confirmPass === '') {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [name, mail, pass, confirmPass]);

  function onRegister() {
    if (name === '' || mail === '' || pass === '' || confirmPass === '') {
      setText('Por favor llena todos los campos.');
      setModal(true);
    } else if (pass !== confirmPass) {
      setText('La contraseña es diferente.');
      setModal(true);
    } else {
      let body = {
        fullName: name,
        email: mail,
        password: pass,
        phone: phone,
      };
      asyncRegister(body).then(res => {
        if (
          res?.status === 200 &&
          res?.message === 'User Created Successfully'
        ) {
          setText('Correo registrado exitosamente.');
          setModal(true);
        } else {
          setText(res?.message);
          setModal(true);
        }
      });
    }
  }

  return (
    <KeyboardAvoidingView behavior={'height'} style={[styles.container]}>
      <CustomModal
        text={text}
        onClose={() => {
          setModal(false);
          if (text === 'Correo registrado exitosamente.')
            props?.navigation.goBack();
        }}
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
          <TouchableOpacity onPress={() => props?.navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{
                width: normalize(30),
                height: normalize(30),
                marginTop: normalize(30),
              }}
              source={back_black}
            />
          </TouchableOpacity>
          <Image source={logo} resizeMode="contain" style={[styles.img]} />
          <View style={styles.middleView}>
            <Text style={styles.topText}> Regístrate</Text>
            <InputComponent
              value={name}
              onChange={val => {
                setName(val);
                setShowPass(false);
              }}
              placeholder={'Nombre completo'}
            />
            <InputComponent
              value={mail}
              onChange={val => {
                setMail(val);
                setShowPass(false);
              }}
              placeholder={'Correo Electrónico'}
            />
            <InputComponent
              value={phone}
              onChange={val => {
                setPhone(val);
                setShowPass(false);
              }}
              placeholder={'Teléfono'}
            />
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
              value={confirmPass}
              onChange={val => {
                setConfirmPass(val);
                setShowPass(true);
              }}
              placeholder={'Confirma Contraseña'}
              type={'password'}
            />
            {showPassText ? (
              <Text style={styles.textValidation}>
                Mínimo 8 caracteres, 1 mayúscula y 1 caracter especial
              </Text>
            ) : null}
          </View>
          <View style={styles.bottomView}>
            <ButtonComponent
              onPress={() => onRegister()}
              disabled={!validate}
              styleButton={
                validate
                  ? {backgroundColor: colors.salmon, top: normalize(5)}
                  : {backgroundColor: colors.down_gray, top: normalize(5)}
              }
              buttonText={'Crear cuenta'}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function RegisterScreen({navigation, route}) {
  const [mounted, setMounted] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []),
  );

  return mounted ? <Register route={route} navigation={navigation} /> : null;
}

export default RegisterScreen;
