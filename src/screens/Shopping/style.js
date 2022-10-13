import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {fonts} from '../../Assets/Fonts/fonts';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerHeader: {backgroundColor: '#FFFF', marginVertical: normalize(20)},
  styleError: {color: 'red', marginTop: 10, alignSelf: 'flex-end'},
  presstableTime: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: normalize(45),
    width: '100%',
    marginTop: normalize(14),
    borderRadius: normalize(8),
    alignItems: 'center',
    paddingHorizontal: normalize(17),
    justifyContent: 'space-between',
  },
  rowText: {
    fontFamily: fonts.epilogueRegular,
    color: 'black',
    fontSize: normalize(5),
    alignSelf: 'center',
    paddingVertical: normalize(3),
  },
  distanceTop: {
    marginTop: '5%',
    paddingHorizontal: normalize(10),
  },
  imgConfig: {
    marginLeft: normalize(18),
    width: normalize(40),
    height: normalize(40),
    alignSelf: 'center',
  },
  imgAdd: {
    marginLeft: normalize(18),
    width: normalize(30),
    height: normalize(30),
    alignSelf: 'center',
    marginRight: normalize(10),
  },
  textConfigvalidation: {
    alignSelf: 'center',
    marginLeft: normalize(15),
  },
  touchableItem: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  containerImgTxt: {
    flexDirection: 'row',
  },
  containerItem: {
    paddingVertical: normalize(10),
    flexDirection: 'row',
    width: '95%',
    backgroundColor: colors.whitey,
    marginVertical: normalize(10),
    justifyContent: 'space-between',
  },
  textPrincp: {
    color: colors.black,
    fontFamily: 'Epilogue-Bold',
    fontSize: normalize(14),
  },
});
