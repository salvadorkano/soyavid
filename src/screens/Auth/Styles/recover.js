import {StyleSheet} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {fonts} from '../../../Assets/Fonts/fonts';
import {normalize} from '../../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  middleView: {
    flex: 2,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: '5%',
  },
  image: {
    width: normalize(150),
    height: normalize(160),
    alignSelf: 'center',
  },
  textBold: {
    fontFamily: fonts.epilogueBold,
  },
  topText: {
    fontSize: normalize(18),
    color: colors.black,
    alignSelf: 'center',
    fontFamily: fonts.epilogueBold,
  },
  underText: {
    fontSize: normalize(12),
    paddingTop: normalize(10),
    color: colors.black,
    alignSelf: 'center',
    fontFamily: fonts.epilogueMedium,
    textAlign: 'center',
  },

  centerText: {
    fontSize: normalize(12),
    color: colors.black,
    alignSelf: 'center',
    fontFamily: fonts.epilogueRegular,
  },
  bttomText: {
    fontSize: normalize(12),
    color: 'gray',
    alignSelf: 'flex-end',
    marginRight: normalize(9),
    paddingTop: normalize(14),
  },
  styleError: {color: 'red', marginTop: 10, alignSelf: 'flex-end'},
});
