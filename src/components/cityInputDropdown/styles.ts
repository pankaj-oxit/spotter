import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: ms(12),
    paddingVertical: ms(10),
    fontSize: ms(16),
    backgroundColor: colors.background,
    marginBottom: ms(2),
  },
  dropdown: {
    position: 'absolute',
    top: ms(44),
    left: 0,
    right: 0,
    backgroundColor: colors.quinary,
    borderWidth: 1,
    borderColor: colors.senary,
    borderRadius: 8,
    zIndex: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  dropdownItem: {
    paddingVertical: ms(10),
    paddingHorizontal: ms(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.quaternary,
  },
  dropdownItemText: {
    fontSize: ms(16),
    color: 'black',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  loadingText: {
    marginLeft: 10,
    color: '#888',
  },

  noResultText: {
    padding: 10,
    color: '#888',
    fontStyle: 'italic',
  },
});