import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: '3%',
    paddingBottom: '6%',
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
  float: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
  },
});
