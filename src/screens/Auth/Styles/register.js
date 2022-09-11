import {StyleSheet} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {normalize} from '../../../Helpers/normalize';
import {height} from '../../../Helpers/dimensions';
import {fonts} from '../../../Assets/Fonts/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  scroll: {
    minHeight: height,
    paddingHorizontal: '11%',
    paddingBottom: '5%',
  },
  img: {
    width: normalize(160),
    height: normalize(170),
    alignSelf: 'center',
  },
  topDistance20: {
    marginTop: normalize(20),
  },
  topDistance: {
    marginTop: '10%',
  },

  textValidation: {
    fontFamily: fonts.epilogueRegular,
    fontSize: normalize(10),
    marginTop: '3%',
    color: colors.salmon,
  },
  viewCheck: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: normalize(30),
  },
  iconStyle: {borderRadius: normalize(5), borderColor: colors.white},
  bold: {fontFamily: fonts.epilogueBold},
  textAccount: {paddingVertical: '4%', marginTop: normalize(5)},
  middleView: {
    flex: 2,
    marginBottom: normalize(20),
  },
  bottomView: {
    flex: 1,
  },
  topText: {
    fontSize: normalize(18),
    color: colors.brown,
    alignSelf: 'center',
    fontFamily: fonts.epilogueBold,
  },
  centerText: {
    fontSize: normalize(12),
    color: colors.black,
    alignSelf: 'center',
    fontFamily: fonts.epilogueRegular,
  },
  styleError: {color: 'red', marginTop: 10, alignSelf: 'flex-end'},
});
