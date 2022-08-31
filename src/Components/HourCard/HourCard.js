import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

function HourCard(props) {
  const {data, index, select, setSelect} = props;

  return (
    <TouchableOpacity
      style={[styles.container, select === index ? styles.select : null]}
      onPress={() => setSelect(index)}>
      <Text
        style={[styles.textTitle, select === index ? styles.textSelect : null]}>
        {data?.hour ?? 'Nueva notificacion'}
      </Text>
    </TouchableOpacity>
  );
}

export default HourCard;
