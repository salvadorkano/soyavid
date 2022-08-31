import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';
import back_white from '../../../Assets/Images/commons/back_white.png';
import cancel2 from '../../../Assets/Images/orderStatuses/checked/cancel2.png';
import delivered2 from '../../../Assets/Images/orderStatuses/checked/delivered2.png';
import finished2 from '../../../Assets/Images/orderStatuses/checked/finished2.png';
import prep2 from '../../../Assets/Images/orderStatuses/checked/prep2.png';
import cancel from '../../../Assets/Images/orderStatuses/notChecked/cancel.png';
import delivered from '../../../Assets/Images/orderStatuses/notChecked/delivered.png';
import finished from '../../../Assets/Images/orderStatuses/notChecked/finished.png';
import prep from '../../../Assets/Images/orderStatuses/notChecked/prep.png';

function StatusRender(props) {
  const {renderType} = props;
  const [selection, setSelection] = useState('Prep');

  return (
    <>
      <TouchableOpacity onPress={() => props?.close()}>
        <Image
          resizeMode="contain"
          style={{
            width: normalize(25),
            height: normalize(25),
          }}
          source={back_white}
        />
      </TouchableOpacity>

      <View
        style={{
          marginTop: '10%',
          backgroundColor: 'white',
          width: '100%',
          borderRadius: normalize(10),
          paddingVertical: '13%',
          paddingHorizontal: '5%',
        }}>
        <View>
          <Text
            style={[
              {
                fontFamily: 'Epilogue-Bold',
                color: colors.brown,
                fontSize: normalize(18),
                textAlign: 'center',
                paddingHorizontal: '18%',
              },
            ]}>
            {'Pick & Go Estatus'}
          </Text>
        </View>
        <TouchableOpacity
          style={{marginTop: '5%'}}
          onPress={() => setSelection('Prep')}>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: normalize(40),
            }}
            source={selection == 'Prep' ? prep2 : prep}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: '5%'}}
          onPress={() => setSelection('Finish')}>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: normalize(40),
            }}
            source={selection == 'Finish' ? finished2 : finished}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: '5%'}}
          onPress={() => setSelection('Deliv')}>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: normalize(40),
            }}
            source={selection == 'Deliv' ? delivered2 : delivered}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: '5%'}}
          onPress={() => setSelection('Cancel')}>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: normalize(40),
            }}
            source={selection == 'Cancel' ? cancel2 : cancel}
          />
        </TouchableOpacity>
      </View>
      <ButtonComponent
        onPress={() => props?.callback(selection)}
        styleButton={{
          backgroundColor: colors.salmon,
          width: '100%',
          alignSelf: 'flex-end',
          top: '5%',
        }}
        buttonText={'Guardar '}
      />
    </>
  );
}

export default StatusRender;
