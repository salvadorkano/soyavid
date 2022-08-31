import {StyleSheet} from 'react-native';
import { colors } from '../../../../Assets/Colors/colors';
import {normalize} from '../../../../Helpers/normalize';

export default StyleSheet.create({
  midRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    alignContent:'center',
    paddingTop:'2%'
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
