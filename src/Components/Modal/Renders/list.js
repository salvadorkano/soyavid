import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Keyboard} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';
import InputComponent from '../../Input/CustomInput';
import add from '../../../Assets/Images/commons/add.png';
import {category, cuisine} from '../../../DefaultData/globalVars';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  saveCategoryTypes,
  saveCuisineTypes,
} from '../../../Functions/User/functions';

function ListRender(props) {
  const {type, data, hasCateg, hasCuisines} = props;
  const [input, setInput] = useState('');
  const [defaultCategories, setCategories] = useState(category);
  const [defaultCuisine, setCuisine] = useState(cuisine);
  const [selectedItems, setSelection] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertData, setAlertData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlePrincipalData();
  }, []);

  function handlePrincipalData() {
    if (hasCateg && type == 'LIST-CATEGORIES') {
      let newArr = [...selectedItems];
      const newDta = [...hasCateg];
      newDta.forEach((el, index) => {
        let stateArray = defaultCategories;

        newArr.push(el?.name);
        setSelection(newArr);
        if (stateArray.includes(el.name)) {
          return;
        } else {
          stateArray.push(el.name);
          setCategories(stateArray);
        }
      });
    } else if (hasCuisines && type == 'LIST-CUISINE') {
      let newArr = [...selectedItems];
      const newDta = [...hasCuisines];
      newDta.forEach((el, index) => {
        let stateArray = defaultCuisine;

        newArr.push(el?.name);
        setSelection(newArr);
        if (stateArray.includes(el.name)) {
          return;
        } else {
          stateArray.push(el.name);
          setCuisine(stateArray);
        }
      });
    }
  }

  function handleSelection(elem) {
    let array = [...selectedItems];
    const index = array.indexOf(elem);
    if (index !== -1) {
      array.splice(index, 1);
    } else {
      array.push(elem);
    }
    setSelection(array);
  }
  function renderItem(item, i) {
    return (
      <View
        key={i}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          paddingVertical: '2%',
        }}></View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <AwesomeAlert
        show={alertVisible}
        showProgress={false}
        title={alertData}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText={'OK'}
        titleStyle={{
          color: 'black',
          fontFamily: 'Epilogue-Medium',
          textAlign: 'center',
        }}
        confirmButtonTextStyle={{
          color: 'white',
          fontFamily: 'Epilogue-Bold',
        }}
        onConfirmPressed={() => {
          setAlertVisible(false);
        }}
        confirmButtonColor={colors.brown}
      />
      <View
        style={{
          marginTop: '10%',
          backgroundColor: 'white',
          width: '100%',
          borderRadius: normalize(10),
          paddingVertical: '9%',
          paddingHorizontal: '5%',
          maxHeight: '71%',
        }}>
        <View>
          <Text
            style={[
              {
                fontFamily: 'Epilogue-SemiBold',
                color: 'black',
                fontSize: normalize(12),
              },
            ]}>
            {props?.text}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={{
            alignContent: 'center',
          }}
          style={{
            width: '100%',
            paddingHorizontal: '2%',
            marginTop: normalize(15),
            paddingBottom: '5%',
          }}
          data={type == 'LIST-CATEGORIES' ? defaultCategories : defaultCuisine}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          extraData={
            type == 'LIST-CATEGORIES' ? defaultCategories : defaultCuisine
          }
        />
        <InputComponent
          value={input}
          rightPress={() => {
            if (input !== '') {
              if (type == 'LIST-CATEGORIES') {
                let stateArray = defaultCategories;
                stateArray.push(input);
                setCategories(stateArray);
              } else {
                let stateArray = defaultCuisine;
                stateArray.push(input);
                setCuisine(stateArray);
              }
              setInput('');

              Keyboard.dismiss();
            }
          }}
          style={{backgr: '#F2F2F2'}}
          isAdd={true}
          rightImage={add}
          onChange={setInput}
          placeholder={'Agregar'}
        />
      </View>
      <ButtonComponent
        loading={loading}
        onPress={() => {
          if (selectedItems.length <= 0) {
            setAlertData('Selecciona uno o más valores para continuar');
            setAlertVisible(true);
          } else {
            setLoading(true);
            const property =
              type == 'LIST-CATEGORIES' ? 'categories' : 'cuisineTypes';
            const body = {
              restaurantId: data?.restaurantId,
            };
            body[property] = selectedItems;
            if (property == 'categories') {
              saveCategoryTypes(body).then(res => {
                if (res?.status == 'Ok') {
                  props?.callback(res?.object);
                } else {
                  setAlertData(
                    'Algo salió mal, por favor intenta de nuevo más tarde',
                  );
                  setAlertVisible(true);
                }
                setLoading(false);
              });
            } else {
              saveCuisineTypes(body).then(res => {
                if (res?.status == 'Ok') {
                  props?.callback(res?.object);
                } else {
                  setAlertData(
                    'Algo salió mal, por favor intenta de nuevo más tarde',
                  );
                  setAlertVisible(true);
                }
                setLoading(false);
              });
            }
          }
        }}
        styleButton={{
          backgroundColor: colors.salmon,
          width: '100%',
          alignSelf: 'flex-end',
          top: '5%',
        }}
        buttonText={props?.buttonText}
      />
    </View>
  );
}

export default ListRender;
