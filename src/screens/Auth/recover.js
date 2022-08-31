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
import logo_white from '../../Assets/Images/logos/logo_white.png';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import {resetPassword} from '../../Functions/User/functions';
import CustomModal from '../../Components/Modal/ComponentModal';

function Recover(props) {
  const [mail, setMail] = useState('');
  const [text, setText] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [showPassText, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  function forgotPassword() {
    if (mail !== '') {
      setLoading(true);
      setShowPass(false);
      resetPassword({email: mail}).then(res => {
        setLoading(false);
        if (res?.status === 'Ok') {
          setText(res?.message);
          setModal(true);
        } else {
          setText(res?.message);
          setModal(true);
        }
      });
    } else {
      setShowPass(true);
    }
  }

  function closeModal() {
    setModal(false);
    props?.navigation.navigate('RestardPassword');
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
          contentContainerStyle={stylesRegister.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Image
            source={logo_white}
            resizeMode="contain"
            style={styles.image}
          />
          <View style={styles.middleView}>
            <Text style={styles.topText}>Recupera tu contraseña</Text>
            <Text style={[styles.underText]}>
              Enviaremos un enlace de recuperación a la dirección de correo
              registrada
            </Text>
            <InputComponent
              style={{top: normalize(40)}}
              placeholder={'Correo Electrónico'}
              onChange={val => {
                setMail(val);
              }}
            />
            {showPassText ? (
              <Text style={stylesRegister.textValidation}>
                Es necesario el correo.
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
              onPress={() => (loading ? null : forgotPassword())}
              styleButton={{backgroundColor: colors.salmon}}
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
            <ButtonComponent
              styleButton={{
                backgroundColor: colors.primary_cream,
                letterColor: colors.brown,
                top: normalize(15),
              }}
              onPress={() => props?.navigation.navigate('Login')}
              buttonText={'Volver a Inicio de Sesión'}
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
