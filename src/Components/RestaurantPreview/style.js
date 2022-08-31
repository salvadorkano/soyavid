import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(150),
    borderRadius: normalize(10),
    justifyContent: 'space-between',
    marginBottom: normalize(20),
  },
  smallContainers: {
    borderRadius: 100,
    paddingVertical: normalize(5),
    paddingHorizontal: '10%',
    flexDirection: 'row',
    alignContent: 'center',
  },
  btnImage2: {
    width: normalize(12),
    height: normalize(12),
    marginRight: normalize(6),
    bottom: normalize(2),
    alignSelf: 'center',
  },
  topTexts: {
    fontSize: normalize(11),
    color: 'white',
    fontFamily: 'Epilogue-Bold',
  },
  whiteContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: normalize(20),
    flexDirection: 'row',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    marginTop: '19%',
    alignItems: 'center',
  },
  contentText: {
    fontFamily: 'Epilogue-Regular',
    color: 'black',
    fontSize: normalize(11),
    marginLeft: normalize(5),
  },
  topContainer: {
    flexDirection: 'row',
    width: '20%',
    alignSelf: 'flex-end',
    paddingTop: '4%',
    paddingRight: '4%',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: normalize(60),
    borderBottomRightRadius: normalize(8),
    borderBottomLeftRadius: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    // alignSelf: 'flex-end',
  },
});
