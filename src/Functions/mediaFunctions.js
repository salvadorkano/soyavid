import {Alert} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {
  request,
  PERMISSIONS,
} from 'react-native-permissions';

export async function requestLib(callback) {
  let result = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);

  if (result == 'granted') {
    callback();
  }
}
export async function accesLibrary() {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
    noData: true,
  });
  return result;
}
