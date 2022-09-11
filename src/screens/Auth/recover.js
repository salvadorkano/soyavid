import React, {useState} from 'react';
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
import styles from './Styles/recover';
import stylesRegister from './Styles/register';
import {useFocusEffect} from '@react-navigation/native';
import InputComponent from '../../Components/Input/CustomInput';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import {resetPassword} from '../../Functions/User/functions';
import CustomModal from '../../Components/Modal/ComponentModal';
import logo from '../../Assets/Images/logos/soyavidIcon.png';
import back_black from '../../Assets/Images/commons/back_black.png';

function Recover(props) {
  const [mail, setMail] = useState('');
  const [text, setText] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [showError, setShowError] = useState(false);

  function forgotPassword() {
    if (mail !== '') {
      props?.navigation.navigate('RestardPassword');

      // setLoading(true);
      // resetPassword({email: mail}).then(res => {
      //   setLoading(false);
      //   if (res?.status === 'Ok') {
      //     setText(res?.message);
      //     setModal(true);
      //   } else {
      //     setText(res?.message);
      //     setModal(true);
      //   }
      // });
    }
  }

  function closeModal() {
    setModal(false);
    props?.navigation.navigate('RestardPassword');
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
          contentContainerStyle={stylesRegister.scroll}
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
          <Image source={logo} resizeMode="contain" style={styles.image} />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Recupera tu contraseña</Text>
            <Text style={[styles.underText]}>
              Enviaremos un enlace de recuperación a la dirección de correo
              registrada
            </Text>
            <InputComponent
              style={{top: normalize(40)}}
              value={mail}
              placeholder={'Correo electrónico'}
              onChange={value => validateEmail(value)}
            />
            {showError ? (
              <Text style={styles.styleError}>
                Formato de correo incorrecto.
              </Text>
            ) : null}
            <TouchableOpacity
              onPress={() => (loading ? null : forgotPassword())}>
              <Text style={[styles.centerText, {marginTop: normalize(35)}]}>
                No recibí el enlace,{' '}
                <Text style={[styles.centerText, styles.textBold]}>
                  reenviar{' '}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomView}>
            <ButtonComponent
              loading={loading}
              disabled={!validate}
              onPress={() => (loading ? null : forgotPassword())}
              styleButton={
                validate
                  ? {backgroundColor: colors.salmon}
                  : {backgroundColor: colors.down_gray}
              }
              buttonText={'Enviar'}
            />
            <ButtonComponent
              styleButton={{
                backgroundColor: colors.primary_cream,
                letterColor: colors.brown,
                top: normalize(10),
              }}
              onPress={() => props?.navigation.navigate('RestardPassword')}
              buttonText={'Tengo un codigo'}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function RecoverScreen({navigation, route}) {
  const [mounted, setMounted] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []),
  );

  return mounted ? <Recover route={route} navigation={navigation} /> : null;
}

export default RecoverScreen;
