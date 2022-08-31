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
import styles from './Styles/register';
import {useFocusEffect} from '@react-navigation/native';
import InputComponent from '../../Components/Input/CustomInput';
import logo_red from '../../Assets/Images/logos/logo_red.png';
import {normalize} from '../../Helpers/normalize';
import ButtonComponent from '../../Components/Button/button';
import {colors} from '../../Assets/Colors/colors';
import CustomModal from '../../Components/Modal/ComponentModal';
import {asyncRegister} from '../../Functions/User/functions';
import moment from 'moment';

function Register(props) {
  const [name, setName] = useState('Kano');
  const [mail, setMail] = useState('salvador.gonzalez@metodika.mx');
  const [phone, setPhone] = useState('2721288529');
  const [birthdate, setBirthdate] = useState('1999/04/14');
  const [pass, setPass] = useState('Contra12!');
  const [confirmPass, setConfirmPass] = useState('Contra12!');
  const [modalVisible, setModal] = useState(false);
  const [checked, setCheck] = useState(false);
  const [text, setText] = useState();
  const [showPassText, setShowPass] = useState(false);

  const [show, setShow] = useState(false);
  const selectedDate = new Date('1991-01-01');

  function onRegister() {
    if (
      name === '' ||
      mail === '' ||
      birthdate === '' ||
      pass === '' ||
      confirmPass === ''
    ) {
      setText('Por favor llena todos los campos.');
      setModal(true);
    } else if (pass !== confirmPass) {
      setText('La contraseña es diferente.');
      setModal(true);
    } else if (checked === false) {
      setText('Para crear una cuenta acepta los Términos y condiciones.');
      setModal(true);
    } else {
      let body = {
        fullName: name,
        email: mail,
        password: pass,
        tel: phone,
        birthdate: birthdate,
      };
      asyncRegister(body).then(res => {
        if (
          res?.status === 'Ok' ||
          res?.message === 'El correo electrónico ya se encuentra registrado'
        ) {
          setText(res?.message);
          setModal(true);
          setTimeout(() => {
            props?.navigation.navigate('VerifyCode', {
              mail: mail,
              pass: pass,
            });
          }, 650);
        } else {
          setText(res?.message);
          setModal(true);
        }
      });
    }
  }

  const showDatepicker = () => {
    setShow(!show);
  };

  const handleConfirm = newDate => {
    const formatted = moment(newDate).format('YYYY/MM/DD');
    setBirthdate(formatted);
    setShow(!show);
  };

  return (
    <KeyboardAvoidingView behavior={'height'} style={[styles.container]}>
      <CustomModal
        text={text}
        onClose={() => setModal(false)}
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
            style={[styles.img, styles.topDistance20]}
          />
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
            <TouchableOpacity onPress={() => setShow(true)}>
              <InputComponent
                value={birthdate}
                editable={false}
                selectTextOnFocus={false}
                placeholder={'Fecha de Nacimiento'}
              />
            </TouchableOpacity>
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
            <View style={styles.viewCheck}>
              <Text style={[styles.centerText]}>
                Acepto los {''}
                <Text style={[styles.centerText, styles.bold]}>
                  Términos y Condiciones
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.bottomView}>
            <ButtonComponent
              onPress={() => onRegister()}
              styleButton={{backgroundColor: colors.salmon, top: normalize(5)}}
              buttonText={'Crear Cuenta'}
            />
            <Text style={[styles.centerText, styles.textAccount]}>
              ¿Ya tienes una cuenta?
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
