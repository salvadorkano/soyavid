import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {fonts} from '../../Assets/Fonts/fonts';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    marginVertical: normalize(10),
    flexDirection: 'row',
  },
  imageContainer: {
    marginHorizontal: normalize(10),
    justifyContent: 'center',
  },
  iconNotificacion: {
    width: normalize(24),
    height: normalize(24),
    marginBottom: normalize(10),
  },
  textTitle: {
    fontFamily: fonts.epilogueBold,
    color: colors.black,
    fontSize: normalize(16),
  },
  textDescription: {
    fontFamily: fonts.epilogueRegular,
    color: colors.black,
    fontSize: normalize(12),
    textAlign: 'justify',
    paddingRight: '5%',
  },
});
