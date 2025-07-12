import { StyleSheet } from 'react-native';
import { ms } from '../../utlils/deviceConfig';
import { colors } from '../../utlils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(24),
  },
  title: {
    fontSize: ms(32),
    fontWeight: 'bold',
    marginBottom: ms(24),
    color: colors.textColor,
  },
  input: {
    width: '100%',
    backgroundColor: colors.quinary,
    borderRadius: 12,
    padding: ms(14),
    fontSize: ms(16),
    marginBottom: ms(16),
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: ms(14),
    borderRadius: ms(12),
    alignItems: 'center',
    marginBottom: ms(16),
  },
  buttonText: {
    color: colors.quinary,
    fontWeight: 'bold',
    fontSize: ms(18),
  },
  toggleText: {
    color: colors.primary,
    fontSize: ms(14),
    textDecorationLine: 'underline',
  },
});
