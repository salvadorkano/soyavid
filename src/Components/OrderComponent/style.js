import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/Colors/colors';
import {normalize} from '../../Helpers/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: '5%',
    paddingBottom: '6%',
    borderRadius: normalize(8),
    paddingHorizontal: '5%',
  },
  midRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    alignContent:'center',
  },
  rowText: {
    fontFamily: 'Epilogue-Regular',
    fontSize: normalize(11.5),
    color:'black'
  },
  principalText: {
    fontFamily: 'Epilogue-Bold',
    color: colors.brown,
  },
});
