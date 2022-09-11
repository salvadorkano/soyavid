import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import styles from './style';
import {height} from '../../Helpers/dimensions';
import ButtonComponent from '../../Components/Button/button';
import InputComponent from '../../Components/Input/CustomInput';
import {getProfile, updatePassword} from '../../Functions/User/functions';
import back_black from '../../Assets/Images/commons/back_black.png';
import CustomModal from '../../Components/Modal/ComponentModal';

function ChangePasswordScreen({navigation, route}) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  const [mail, setMail] = useState('');
  const [showError, setShowError] = useState(false);
  const [validateButton, setValidate] = useState(false);
  const [modalText, setText] = useState('');
  const [modalVisible, setModal] = useState(false);
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPassText, setShowPass] = useState(false);

  useEffect(() => {
    const handleInitialInfo = () => {
      setLoading(true);
      getProfile().then(res => {
        if (res.status === 'Ok') {
          setProfile(res.object);
          setMail(res.object.email);
          setLoading(false);
        } else {
          setProfile([]);
          setLoading(false);
        }
      });
    };
    handleInitialInfo();
  }, []);

  useEffect(() => {
    if (profile !== [] && profile.email === mail && pass === confirmPass) {
      console.log('aqui 1');
      setValidate(true);
    } else {
      console.log('aqui 2222');
      setValidate(false);
    }
  }, [profile, mail, pass, confirmPass]);

  const validate = textEmail => {
    let string = textEmail.trim();
    let reg =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(string) === false) {
      setMail(string);
      setShowError(true);
      return false;
    } else {
      setMail(string);
      setShowError(false);
    }
  };

  const changePass = () => {
    let body = {
      email: mail,
      password: pass,
    };
    updatePassword(body).then(res => {
      if (res?.status === 'Ok') {
        setText(res?.message);
        setModal(true);
      } else {
        setText(res?.message);
        setModal(true);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomModal
        text={modalText}
        onClose={() => setModal(false)}
        nav={navigation}
        visible={modalVisible}
        type={'ALERT'}
        buttonText={'OK'}
      />
      <ScrollView
        contentContainerStyle={{
          minHeight: height,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imgMenu}
              source={back_black}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Cambiar contarseña</Text>
        </View>
        <View style={styles.containerForm}>
          {loading ? (
            <ActivityIndicator size="large" color={colors.black} />
          ) : (
            <View>
              <InputComponent
                placeholder={'Correo Electrónico'}
                value={mail}
                onChange={value => validate(value)}
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
          )}
        </View>

        <View style={styles.containerButton}>
          <ButtonComponent
            onPress={() => (validateButton ? changePass() : {})}
            styleButton={
              validateButton ? styles.buttonActive : styles.buttonDisabled
            }
            buttonText={'Cambiar contraseña'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChangePasswordScreen;
