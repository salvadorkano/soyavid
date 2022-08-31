import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './style';
import promo from '../../Assets/Images/commons/promo.png';
import {normalize} from '../../Helpers/normalize';
import dots from '../../Assets/Images/commons/dots.png';
import time from '../../Assets/Images/commons/time.png';

function PromotionPreview(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        borderRadius={normalize(8)}
        resizeMode="cover"
        style={{width: '100%', flex: 1, justifyContent:'flex-end'}}
        source={promo}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: normalize(45),
            borderBottomRightRadius: normalize(8),
            borderBottomLeftRadius: normalize(8),
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            alignSelf:'flex-end'
          }}>
          <Text
            style={{
              fontFamily: 'Epilogue-Bold',
              color: 'black',
              fontSize: normalize(18),
            }}>
            Promoción #1
          </Text>
          <Image
            style={{width: normalize(20), height: normalize(20)}}
            source={dots}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default PromotionPreview;
