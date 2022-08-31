import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.whitey,
    flex: 1,
  },
  textTop: {
    color: colors.orange,
    fontSize: normalize(11),
  },
  textPrincp: {
    color: colors.white,
  },

  fs11: {
    fontSize: normalize(11),
  },
});
