import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {normalize} from '../../Helpers/normalize';
import person from '../../Assets/Images/commons/person.png';
import location from '../../Assets/Images/commons/location.png';
import phone from '../../Assets/Images/commons/phone.png';
import see from '../../Assets/Images/commons/see.png';
import star from '../../Assets/Images/commons/star.png';
import rest from '../../Assets/Images/Drawer/rest.png';
import FastImage from 'react-native-fast-image';
import {getRestById} from '../../Functions/User/functions';
import {useDispatch} from 'react-redux';
import {isRestOpen} from '../../Redux/app-store/actions';
import {colors} from '../../Assets/Colors/colors';
import ButtonComponent from '../Button/button';

function HistoryCard(props) {
  const {data} = props;

  //star
  return (
    <View style={styles.container}>
      <View
        style={{
          height: normalize(40),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image resizeMode="contain" style={styles.btnImage2} source={rest} />
          <Text
            style={{
              fontFamily: 'Epilogue-Bold',
              color: 'black',
              fontSize: normalize(16),
              fontWeight: 'bold',
            }}>
            {data?.name ?? 'Pendiente'}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Epilogue-Bold',
            color: 'black',
            fontSize: normalize(16),
            fontWeight: 'bold',
          }}>
          {data?.hour ?? 'Pendiente'}
        </Text>
      </View>
      <View
        style={{
          height: normalize(30),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={styles.btnImage1}
            source={person}
          />
          <Text
            style={{
              fontFamily: 'Epilogue-Bold',
              color: colors.brown,
              fontSize: normalize(12),
              fontWeight: 'bold',
            }}>
            {`${data?.people} personas`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={styles.btnImage1}
            source={location}
          />
          <Text
            style={{
              fontFamily: 'Epilogue-Light',
              color: 'black',
              fontSize: normalize(12),
            }}>
            {`Zona: ${data?.zona}`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image resizeMode="contain" style={styles.btnImage1} source={phone} />
          <Text
            style={{
              fontFamily: 'Epilogue-Light',

              color: 'black',
              fontSize: normalize(12),
            }}>
            {`Tel: ${data?.phone}`}
          </Text>
        </View>
      </View>
      {data.rating ? (
        <View
          style={{
            height: normalize(40),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Epilogue-Bold',
              color: colors.brown,
              fontSize: normalize(12),
              fontWeight: 'bold',
            }}>
            {`Tu Evaluación: `}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="contain"
              style={styles.btnImage1}
              source={star}
            />
            <Image
              resizeMode="contain"
              style={styles.btnImage1}
              source={star}
            />
            <Image
              resizeMode="contain"
              style={styles.btnImage1}
              source={star}
            />
            <Image
              resizeMode="contain"
              style={styles.btnImage1}
              source={star}
            />
            <Image
              resizeMode="contain"
              style={styles.btnImage1}
              source={star}
            />
            <Text
              style={{
                fontFamily: 'Epilogue-Bold',
                color: colors.brown,
                fontSize: normalize(12),
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {data.rating}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image resizeMode="contain" style={styles.btnImage1} source={see} />
            <Text
              style={{
                fontFamily: 'Epilogue-Light',
                color: 'black',
                fontSize: normalize(12),
              }}>
              Ver tu reseña
            </Text>
          </View>
        </View>
      ) : (
        <View />
      )}
      <View
        style={{
          // height: normalize(40),
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        <ButtonComponent
          onPress={() => {}}
          styleButton={{
            backgroundColor: colors.black,
            height: normalize(30),
            width: normalize(100),
            borderRaius: 100,
          }}
          buttonText={'Cancelar'}
        />
        <ButtonComponent
          onPress={() => props.nav.navigate('Review')}
          styleButton={{
            backgroundColor: colors.black,
            height: normalize(30),
            width: normalize(100),
          }}
          buttonText={'Evaluar'}
        />
      </View>
    </View>
  );
}

export default HistoryCard;
