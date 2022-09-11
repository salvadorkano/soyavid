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
  buttonActive: {
    backgroundColor: colors.salmon,
    position: 'absolute',
    bottom: normalize(30),
    alignSelf: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.down_gray,
    position: 'absolute',
    bottom: normalize(30),
    alignSelf: 'center',
  },
  imgMenu: {
    width: normalize(25),
    height: normalize(25),
    position: 'absolute',
    left: normalize(20),
  },
  textHeader: {
    fontFamily: fonts.epilogueBold,
    color: colors.black,
    fontSize: normalize(18),
    alignSelf: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: colors.whitey,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  containerButton: {
    backgroundColor: colors.whitey,
    paddingVertical: normalize(25),
    paddingHorizontal: 12,
    paddingTop: normalize(60),
    flex: 1,
  },
  textChange: {
    color: 'red',
  },
  textValidation: {
    fontFamily: fonts.epilogueRegular,
    fontSize: normalize(10),
    marginTop: '3%',
    color: colors.salmon,
  },
});
