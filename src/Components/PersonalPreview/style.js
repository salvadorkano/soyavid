import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    borderRadius: normalize(9),
    flexDirection: 'row',
  },
  column1: {
    flex: 3,
    paddingRight: '2%',
  },
  column2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  brownText: {
    fontFamily: 'Epilogue-SemiBold',
    color: colors.brown,
  },
  rowText: {
    fontFamily: 'Epilogue-Regular',
    color: 'black',
    fontSize: normalize(12),
    paddingTop:'2%'
  },
});
