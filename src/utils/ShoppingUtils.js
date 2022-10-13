import React, {useEffect, useState} from 'react';
import uuid from 'react-native-uuid';

export default class Utils {
  static async deleteItem(id, array) {
    return array.filter(item => item.id !== id);
  }

  static async addItem(body, array) {
    array.splice(0, 0, {
      title: body.title,
      price: body.price,
      // icon: body.icon,
      id: body._id,
    });
    return array;
  }
}
