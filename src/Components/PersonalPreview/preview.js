import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import trash_brown from '../../Assets/Images/commons/trash_brown.png';
import edit_brown from '../../Assets/Images/commons/edit_brown.png';
import {normalize} from '../../Helpers/normalize';

function PersonalComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.brownText}>Mesera</Text>
          <Text style={styles.brownText}>Joanna</Text>
        </View>
        <Text style={styles.rowText}>Joanna Massassi Aréchiga Muñoz</Text>
      </View>
      <View style={styles.column2}>
        <TouchableOpacity>
          <Image
            style={{
              width: normalize(25),
              height: normalize(25),
            }}
            source={edit_brown}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              width: normalize(25),
              height: normalize(25),
            }}
            source={trash_brown}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PersonalComponent;
