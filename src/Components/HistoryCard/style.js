import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: normalize(20),
    marginBottom: normalize(20),
    backgroundColor: 'white',
    paddingHorizontal: normalize(10),
  },
  smallContainers: {
    borderRadius: 100,
    paddingVertical: normalize(5),
    paddingHorizontal: '10%',
    flexDirection: 'row',
    alignContent: 'center',
  },
  btnImage1: {
    width: normalize(14),
    height: normalize(14),
    marginRight: normalize(3),
    alignSelf: 'center',
  },
  btnImage2: {
    width: normalize(16),
    height: normalize(16),
    marginRight: normalize(6),
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
});
