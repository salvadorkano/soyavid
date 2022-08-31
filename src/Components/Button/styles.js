import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.whitey,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    borderRadius: normalize(7),
  },
  btnText: {
    alignSelf: 'center',
    fontFamily: 'Epilogue-Bold',
    fontSize: normalize(15),
  },
  center: {alignSelf: 'center'},
});
