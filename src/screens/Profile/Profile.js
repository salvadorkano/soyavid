import {DrawerActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import menu from '../../Assets/Images/commons/menu.png';
import {normalize} from '../../Helpers/normalize';
import styles from './style';
import {updateProfile} from '../../Functions/User/functions';
import moment from 'moment';

function ProfileScreen({navigation, route}) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [showError, setShowError] = useState(false);
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);
  const [birthdate, setBirthdate] = useState('Fecha de Nacimiento');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [validateButton, setValidate] = useState(false);
  const [modalText, setText] = useState('');
  const [modalVisible, setModal] = useState(false);
  // const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState('');

  // useEffect(() => {
  //   const handleInitialInfo = () => {
  //     setLoading(true);
  //     getProfile().then(res => {
  //       console.log('ress', res.object);
  //       if (res.status === 'Ok') {
  //         setProfile(res.object);
  //         setName(res.object.fullName);
  //         setMail(res.object.email);
  //         setBirthdate(res.object.birthdate);
  //         setPhone(res.object.telephone);
  //         setCity(res.object.city);
  //         setCountry(res.object.country);
  //         setLoading(false);
  //       } else {
  //         setProfile([]);
  //         setLoading(false);
  //       }
  //     });
  //   };
  //   handleInitialInfo();
  // }, []);

  // useEffect(() => {
  //   const handleCuisines = () => {
  //     setLoading(true);
  //     getCuisineTypes().then(res => {
  //       if (res.status === 'Ok') {
  //         setDetails(res.object);
  //         setLoading(false);
  //       } else {
  //         setDetails([]);
  //         setLoading(false);
  //       }
  //     });
  //   };
  //   handleCuisines();
  // }, []);

  // useEffect(() => {
  //   if (
  //     (profile !== [] && profile.fullName !== name) ||
  //     (profile.email !== mail && showError === false) ||
  //     profile.telephone !== phone ||
  //     profile.birthdate !== birthdate
  //   ) {
  //     setValidate(true);
  //   } else {
  //     setValidate(false);
  //   }
  // }, [profile, name, mail, showError, phone, birthdate]);

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

  const showDatepicker = () => {
    setShow(!show);
  };

  const handleConfirm = selectDate => {
    const formatted = moment(selectDate).format('DD/MM/YYYY');
    setBirthdate(formatted);
    setShow(!show);
  };

  const changeInfo = () => {
    let body = {
      fullName: name,
      email: mail,
      tel: phone,
      birthdate: birthdate,
      city: 'Monterrey',
      country: 'Mexico',
    };
    updateProfile(body).then(res => {
      if (res?.status === 'Ok') {
        setText(res?.message);
        setModal(true);
        setProfile(res.object);
        setName(res.object.fullName);
        setMail(res.object.email);
        setBirthdate(res.object.birthdate);
        setPhone(res.object.telephone);
        setCity(res.object.city);
        setCountry(res.object.country);
      } else {
        setText(res?.message);
        setModal(true);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '7%',
          paddingTop: '3%',
          paddingBottom: '5%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            style={{width: normalize(22), height: normalize(22)}}
            source={menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Epilogue-Bold',
            color: 'black',
            fontSize: normalize(16),
            paddingLeft: normalize(25),
          }}>
          Perfil
        </Text>
      </View>
      <Text style={{color: colors.black, alignSelf: 'center', fontSize: 30}}>
        Perfil
      </Text>
    </View>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <CustomModal
  //       text={modalText}
  //       onClose={() => setModal(false)}
  //       nav={navigation}
  //       visible={modalVisible}
  //       type={'ALERT'}
  //       buttonText={'OK'}
  //     />
  //     <DateTimePickerModal
  //       locale={'es_ES'}
  //       isVisible={show}
  //       value={birthdate}
  //       mode={'date'}
  //       onCancel={showDatepicker}
  //       onConfirm={handleConfirm}
  //     />
  //     <ScrollView
  //       contentContainerStyle={{
  //         minHeight: height,
  //       }}
  //       showsVerticalScrollIndicator={false}
  //       bounces={false}>
  //       <View style={styles.containerHeader}>
  //         <TouchableOpacity
  //           onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
  //           <Image style={styles.imgMenu} source={menu} resizeMode="contain" />
  //         </TouchableOpacity>
  //         <Text style={styles.textHeader}>Perfil</Text>
  //       </View>
  //       <View style={styles.containerForm}>
  //         {loading ? (
  //           <ActivityIndicator size="large" color={colors.black} />
  //         ) : (
  //           <View>
  //             <InputComponent
  //               placeholder={'Nombre de Usuario'}
  //               value={name}
  //               onChange={setName}
  //             />
  //             <InputComponent
  //               placeholder={'Correo Electrónico'}
  //               value={mail}
  //               onChange={value => validate(value)}
  //             />
  //             {showError ? (
  //               <Text style={styles.styleError}>
  //                 Formato de correo incorrecto.
  //               </Text>
  //             ) : null}
  //             <InputComponent
  //               placeholder={'Teléfono'}
  //               value={phone}
  //               onChange={setPhone}
  //               keyboardType={'numeric'}
  //               maxLength={10}
  //             />
  //             <TouchableOpacity
  //               style={styles.presstableTime}
  //               onPress={() => setShow(true)}>
  //               <Text style={[styles.rowText, {fontSize: normalize(12)}]}>
  //                 {birthdate}
  //               </Text>
  //             </TouchableOpacity>
  //             <InputComponent
  //               placeholder={'Contraseña'}
  //               rightPress={() => navigation.navigate('ChangePassword')}
  //               children={<Text style={styles.textChange}>Cambiar</Text>}
  //             />
  //             {/* <InputComponent rightImage={drop} placeholder={'Ciudad'} /> */}
  //             {/* <RNPickerSelect
  //         value={selection}
  //         Icon={() => (
  //           <Image resizeMode="contain" style={styles.imgDrop} source={drop} />
  //         )}
  //         placeholder={{}}
  //         fixAndroidTouchableBug={true}
  //         useNativeAndroidPickerStyle={false}
  //         style={pickerSelectStyles(false)}
  //         onValueChange={(value, index) => {
  //           setSelection({value: zones[index].label, id: value});
  //         }}
  //         items={zones}
  //       /> */}
  //             <InputComponent
  //               value={country}
  //               onChange={setPhone}
  //               rightImage={drop}
  //               placeholder={'País'}
  //             />
  //             <InputComponent
  //               value={city}
  //               onChange={setPhone}
  //               rightImage={drop}
  //               placeholder={'Ciudad'}
  //             />
  //             {/* <InputComponent placeholder={''} /> */}
  //             <InputComponent
  //               rightPress={() => {
  //                 // if (detail !== '') {
  //                 //   addDetail({
  //                 //     Name: detail,
  //                 //     RestaurantId: data?.restaurantId,
  //                 //   }).then(res => {
  //                 //     if (res?.object) {
  //                 //       setDetails(res?.object);
  //                 //     } else {
  //                 //     }
  //                 //     setDetail('');
  //                 //   });
  //                 // }
  //               }}
  //               value={detail}
  //               onChange={setDetail}
  //               isAdd={true}
  //               rightImage={add}
  //               placeholder={'Tus comidas y bebidas favoritas'}
  //               editable={false}
  //             />
  //           </View>
  //         )}
  //         {details.length > 0 ? <ListComponent data={details} /> : null}
  //       </View>

  //       <View style={styles.containerButton}>
  //         <ButtonComponent
  //           onPress={() => (validateButton ? changeInfo() : {})}
  //           styleButton={
  //             validateButton ? styles.buttonActive : styles.buttonDisabled
  //           }
  //           buttonText={'Guardar cambios'}
  //         />
  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
}

export default ProfileScreen;
