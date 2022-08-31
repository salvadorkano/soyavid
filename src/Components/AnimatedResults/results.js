import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {normalize} from '../../Helpers/normalize';
import {colors} from '../../Assets/Colors/colors';

export default function ResultsComponent(props) {
  const {data} = props;

  function renderItem(item, index) {
    return (
      <TouchableOpacity
        onPress={() => props?.selection(item)}
        style={{
          flex: 1,
          justifyContent: 'center',
          height: normalize(40),
          width: '90%',
        }}>
        <Text
          style={{
            fontFamily: 'Epilogue-SemiBold',
            fontSize: normalize(12),
            color: colors.brown,
          }}>
          {item?.formatted_address}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{height: normalize(10)}} />}
      contentContainerStyle={{
        paddingBottom: '2%',
        flexGrow: 1,
      }}
      style={{
        paddingHorizontal: '2%',
        paddingVertical: '2%',
        backgroundColor: 'white',
      }}
      data={data}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={item => item.label}
    />
  );
}
