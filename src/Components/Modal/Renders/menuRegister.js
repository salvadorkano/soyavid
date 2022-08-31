import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {
  addDishToCategory,
  addMenuCategory,
} from '../../../Functions/User/functions';
import {normalize} from '../../../Helpers/normalize';
import ButtonComponent from '../../Button/button';
import InputComponent from '../../Input/CustomInput';
function MenuRender(props) {
  const {renderType, data, categoryId, isEdit} = props;
  const [inputText, setInput] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEdit !== null) {
      setName(isEdit?.name);
      setPrice(isEdit?.price.toString());
      setDescription(isEdit?.description);
    }
  }, []);
  function saveCategory() {
    if (inputText == '' || inputText == ' ') {
      return;
    } else {
      addMenuCategory({
        Id: 0,
        Name: inputText,
        restaurantId: data?.restaurantId,
      }).then(res => {
        if (res?.status == 'Ok') {
          props?.callback();
        }
      });
    }
  }

  function saveDish() {
    if (name == '' || price == '' || description == '') {
      return;
    } else {
      addDishToCategory({
        Id: isEdit !== null ? isEdit.id : 0,
        Name: name,
        Description: description,
        Price: parseInt(price),
        MenuCategoryId: categoryId,
        RestaurantId: data?.restaurantId,
      }).then(res => {
        if (res?.status == 'Ok') {
          props?.callback2(isEdit);
        }
      });
    }
  }
  return (
    <>
      <View
        style={{
          marginTop: '10%',
          backgroundColor: 'white',
          width: '100%',
          borderRadius: normalize(10),
          paddingVertical: '9%',
          paddingHorizontal: '5%',
        }}>
        {renderType == 'CATEGORY' ? (
          <View>
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-SemiBold',
                  color: colors.brown,
                  fontSize: normalize(12),
                },
              ]}>
              Nueva categoría
            </Text>
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-Regular',
                  color: colors.black,
                  fontSize: normalize(11),
                  paddingTop: '3%',
                },
              ]}>
              Ordena los platillos del menú de tu restaurante en pestañas por
              categoría. Ejemplo: Entradas, Postres, Bebidas.
            </Text>
            <InputComponent
              value={inputText}
              onChange={setInput}
              style={{backgr: colors.whitey}}
              placeholder={'Escribe el nombre'}
            />
          </View>
        ) : (
          <View>
            <Text
              style={[
                {
                  fontFamily: 'Epilogue-SemiBold',
                  color: colors.brown,
                  fontSize: normalize(12),
                },
              ]}>
              {isEdit !== null ? 'Editar Platillo' : ' Nuevo Platillo'}
            </Text>

            <InputComponent
              value={name}
              onChange={setName}
              style={{backgr: colors.whitey}}
              placeholder={'Escribe el nombre'}
            />
            <InputComponent
              value={price}
              onChange={setPrice}
              style={{backgr: colors.whitey}}
              placeholder={'Indicar precio'}
            />
            <InputComponent
              value={description}
              onChange={setDescription}
              style={{backgr: colors.whitey, height: normalize(80)}}
              placeholder={'Agrega descripción'}
            />
          </View>
        )}
      </View>
      <ButtonComponent
        onPress={() => (renderType == 'CATEGORY' ? saveCategory() : saveDish())}
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

export default MenuRender;
