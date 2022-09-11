import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  screenWraper: {
    backgroundColor: colors.brown,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  topView: {
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(15),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: normalize(1),
  },
  touchableBack: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: '3%',
  },
  containerTextUser: {flex: 1, paddingLeft: normalize(15)},
  containerImgRes: {
    flexDirection: 'row',
    paddingTop: normalize(15),
  },
  imgRes: {
    marginLeft: normalize(18),
    width: normalize(20),
    height: normalize(20),
    alignSelf: 'center',
  },
  middleView: {
    flex: 3,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  distanceTop: {
    marginTop: '5%',
  },
  bottomView: {
    borderTopColor: 'white',
    borderTopWidth: normalize(1),
    flex: 0.7,
    width: '100%',
    justifyContent: 'space-around',
  },
  touchableConfig: {
    height: normalize(80),
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  containerConfig: {
    flexDirection: 'row',
    width: '100%',
  },
  imgConfig: showCompleteDrawer => ({
    marginLeft: normalize(18),
    width: normalize(13),
    height: normalize(13),
    alignSelf: 'center',
    opacity: showCompleteDrawer ? 1 : 0.2,
  }),
  textConfigvalidation: showCompleteDrawer => ({
    alignSelf: 'center',
    marginLeft: normalize(15),
    opacity: showCompleteDrawer ? 1 : 0.2,
  }),
  textPrincp: {
    color: 'white',
    fontFamily: 'Epilogue-Bold',
    fontSize: normalize(14),
  },
  textName: {
    fontSize: normalize(19),
    paddingLeft: normalize(10),
    maxWidth: '80%',
  },
  lightText: {
    color: 'white',
    fontFamily: 'Epilogue-Regular',
    fontSize: normalize(11),
    marginTop: normalize(3),
  },
  touchableOut: {
    height: normalize(80),
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  containerOut: {
    flexDirection: 'row',
    width: '100%',
  },
  imgOut: {
    marginLeft: normalize(18),
    width: normalize(13),
    height: normalize(13),
    alignSelf: 'center',
  },
  textCenterOut: {alignSelf: 'center', marginLeft: normalize(15)},
  //Render Item
  touchableItem: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  containerItem: {
    paddingVertical: normalize(18),
    flexDirection: 'row',
    paddingRight: '3%',
    width: '100%',
  },
});
