import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import person from '../../Assets/Images/commons/person.png';
import location from '../../Assets/Images/commons/location.png';
import phone from '../../Assets/Images/commons/phone.png';
import message from '../../Assets/Images/commons/message.png';
import b_ingreso from '../../Assets/Images/commons/b_ingreso.png';
import b_quitar from '../../Assets/Images/commons/b_quitar.png';
import {normalize} from '../../Helpers/normalize';
import {colors} from '../../Assets/Colors/colors';
import {useNavigation} from '@react-navigation/native';

function GeneralPreview(props) {
  const {type, showButtons} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (props?.onPress) {
          props.onPress();
        }
      }}
      style={[styles.container, props?.style]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.principalText}>Luz Viera</Text>
        <Text style={styles.principalText}>7:30 pm</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: '3%',
          alignItems: 'center',
        }}>
        <View style={[styles.midRow, {flex: 0.9}]}>
          <Image
            style={{width: normalize(10), height: normalize(10)}}
            source={person}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.rowText,
              {fontFamily: 'Epilogue-SemiBold', color: colors.brown},
            ]}>
            4 Personas
          </Text>
        </View>
        <View style={[styles.midRow, {flex: 1}]}>
          <Image
            style={{width: normalize(10), height: normalize(10)}}
            source={location}
            resizeMode="contain"
          />
          <Text style={styles.rowText}>Zona: Terraza</Text>
        </View>

        <View style={[styles.midRow, {flex: 1}]}>
          <Image
            style={{width: normalize(10), height: normalize(10)}}
            source={phone}
            resizeMode="contain"
          />
          <Text style={styles.rowText}>Tel:1234567890</Text>
        </View>
      </View>
      <View style={[styles.midRow]}>
        <Image
          style={{width: normalize(10), height: normalize(10)}}
          source={message}
          resizeMode="contain"
        />
        {type == 'waitingList' || type == 'requests' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '96%',
            }}>
            <Text
              style={[
                styles.rowText,
                {fontFamily: 'Epilogue-SemiBold', color: colors.brown},
              ]}>
              Registro:{' '}
              <Text style={[styles.rowText]}>Lunes Febrero 14, 2022</Text>
            </Text>
            <Text style={[styles.rowText]}>12:30 PM</Text>
          </View>
        ) : (
          <Text style={[styles.rowText, {marginLeft: normalize(6)}]}>
            Comentario: Loremipsum dolor sit consectetur
          </Text>
        )}
      </View>
      {type == 'waitingList' && showButtons == true ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '96%',
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: normalize(10),
          }}>
          <TouchableOpacity>
            <Image
              style={{width: normalize(100), height: normalize(28)}}
              source={b_quitar}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AcceptWaiting')}>
            <Image
              style={{width: normalize(140), height: normalize(30)}}
              source={b_ingreso}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ) : null}
      {type == 'requests' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: normalize(10),
            width: '70%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 100,
              paddingHorizontal: '9%',
              paddingVertical: '4%',
            }}>
            <Text
              style={{
                fontFamily: 'Epilogue-Bold',
                color: 'white',
                fontSize: normalize(11),
              }}>
              Eliminar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.salmon,
              borderRadius: 100,
              paddingHorizontal: '9%',
              paddingVertical: '4%',
            }}>
            <Text
              s
              style={{
                fontFamily: 'Epilogue-Bold',
                color: 'white',
                fontSize: normalize(11),
              }}>
              Aceptar
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

export default GeneralPreview;
