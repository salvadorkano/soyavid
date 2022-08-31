import React, {useState} from 'react';
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
import logo_red from '../../Assets/Images/logos/logo_red.png';

function RestardPassword(props) {
  const [code, setCode] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [text, setText] = useState();
  const [showPassText, setShowPass] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function changePassword() {
    if (code === '' || mail === '' || pass === '') {
      setText('Por favor llena todos los campos');
      setModal(true);
    } else {
      setLoading(true);
      setNewPassword({
        code: code,
        email: mail,
        password: pass,
      }).then(res => {
        setLoading(false);
        if (res?.status === 'Ok') {
          setText(res?.message);
          setModal(true);
          setResponseModal(true);
        } else {
          setText(res?.message);
          setModal(true);
          setResponseModal(false);
        }
      });
    }
  }

  function closeModal() {
    setModal(false);
    if (responseModal) {
      props?.navigation.navigate('Login');
    }
  }

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
            source={logo_red}
            resizeMode="contain"
            style={[styles.img, styles.topDistance]}
          />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Cambiar contraseña</Text>
            <InputComponent
              value={mail}
              onChange={val => {
                setMail(val);
                setShowPass(false);
              }}
              placeholder={'Correo Electrónico'}
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
              onPress={() => (loading ? null : changePassword())}
              styleButton={{backgroundColor: colors.salmon, top: normalize(5)}}
              buttonText={'Cambiar contraseña'}
            />
            <Text style={[styles.centerText, styles.textAccount]}>
              Recordaste tu contraseña
            </Text>

            <ButtonComponent
              onPress={() => props?.navigation.navigate('Login')}
              buttonText={'Inicia Sesión aquí'}
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
