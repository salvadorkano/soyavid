import {StyleSheet} from 'react-native';
import {colors} from '../../../Assets/Colors/colors';
import {height} from '../../../Helpers/dimensions';
import {normalize} from '../../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  middleView: {
    flex: 3,
  },
  bottomView: {
    flex: 1,
  },
  imageLogin: {
    width: normalize(160),
    height: normalize(170),
    alignSelf: 'center',
    marginTop: '20%',
  },
  topText: {
    fontSize: normalize(18),
    color: colors.brown,
    alignSelf: 'center',
    fontFamily: 'Epilogue-Bold',
  },
  centerText: {
    fontSize: normalize(12),
    color: colors.black,
    alignSelf: 'center',
    fontFamily: 'Epilogue-Regular',
  },
  paddingV: {
    paddingVertical: '4%',
  },
  codeFieldRoot: {marginTop: 50},
  cell: {
    width: normalize(50),
    height: normalize(60),
    lineHeight: normalize(50),
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    backgroundColor: 'white',
    color: colors.black,
  },
  focusCell: {
    borderColor: '#000',
  },
  //verifyCount
  containerScroll: {
    minHeight: height - normalize(20),
    paddingHorizontal: '11%',
    paddingBottom: '5%',
  },
  img: {
    width: normalize(160),
    height: normalize(170),
    alignSelf: 'center',
    marginTop: '10%',
  },
  styleError: {color: 'red', marginTop: 10, alignSelf: 'flex-end'},
});
