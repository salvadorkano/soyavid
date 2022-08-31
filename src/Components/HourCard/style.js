import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {fonts} from '../../Assets/Fonts/fonts';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.down_gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: normalize(50),
    alignSelf: 'center',
    paddingHorizontal: normalize(20),
  },
  select: {backgroundColor: colors.salmon},
  textTitle: {
    fontFamily: fonts.epilogueBold,
    color: colors.black,
    fontSize: normalize(14),
    textAlign: 'center',
  },
  textSelect: {
    color: colors.whitey,
  },
});
