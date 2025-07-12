import {StyleSheet} from 'react-native';
import {colors} from '../../utlils/colors';
import { ms } from '../../utlils/deviceConfig';

export const styles = StyleSheet.create({
  tripTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: ms(10),
  },
  tripTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(15),
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: ms(10),
  },
  radioDot: {
    backgroundColor: colors.primary,
    height: ms(15),
    width: ms(15),
    borderRadius: ms(7.5),
  },
  tripTypeLabel: {
    fontSize: ms(16),
    color: '#000',
  },
});
