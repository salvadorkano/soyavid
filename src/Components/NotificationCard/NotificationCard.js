import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import rest from '../../Assets/Images/Drawer/rest.png';

function NotificationCard(props) {
  const {data} = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.iconNotificacion}
          source={rest}
        />
      </View>
      <View>
        <Text style={styles.textTitle}>
          {data?.name ?? 'Nueva notificacion'}
        </Text>
        <Text style={styles.textDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
          dolor sit amet.
        </Text>
      </View>
    </View>
  );
}

export default NotificationCard;
