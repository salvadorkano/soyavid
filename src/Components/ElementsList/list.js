import React from 'react';
import {FlatList, View} from 'react-native';
import {normalize} from '../../Helpers/normalize';
import ElementComponent from '../NewElement/element';

function ListComponent(props) {
  const {type} = props;
  function renderItem(item, index) {
    return (
      <ElementComponent
        onPress={el => props?.onPress(el)}
        type={type}
        item={item}
      />
    );
  }
  return (
    <FlatList
      horizontal={true}
      style={{height: normalize(45), marginTop: '3%'}}
      //   columnWrapperStyle={{justifyContent: 'space-between'}}
      key={Math.floor(Math.random() * 1000)}
      ItemSeparatorComponent={() => (
        <View style={{width: normalize(12)}}></View>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: '2%',
      }}
      data={props?.data}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
    />
  );
}
export default ListComponent;
