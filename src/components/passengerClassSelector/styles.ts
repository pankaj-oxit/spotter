import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     row: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginVertical: ms(8),
       width: '100%',
     },
     passengerSelector: {
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: colors.tertiary,
       borderRadius: 8,
       borderWidth: 1,
       borderColor: colors.senary,
       paddingHorizontal: ms(8),
       paddingVertical: ms(4),
     },
     passengerButton: {
       paddingHorizontal: ms(12),
       paddingVertical: ms(4),
       borderRadius: 6,
       backgroundColor: colors.quinary,
       borderWidth: 1,
       borderColor: colors.quaternary,
       marginHorizontal: ms(2),
     },
     disabled: {
       opacity: 0.4,
     },
     passengerButtonText: {
      //  fontSize: ms(20),
       color: colors.primary,
       fontWeight: 'bold',
     },
     disabledText: {
       color: colors.secondary,
     },
     passengerCountText: {
       fontSize: ms(16),
       marginHorizontal: ms(8),
       color: colors.textColor,
     },
     classSelectorWrapper: {
       marginLeft: ms(12),
       position: 'relative',
       flex: 1,
     },
     classSelector: {
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: colors.background,
       borderRadius: 8,
       borderWidth: 1,
       borderColor: colors.senary,
       paddingHorizontal: ms(14),
       paddingVertical: ms(10),
       justifyContent: 'space-between',
     },
     classSelectorText: {
       fontSize: ms(16),
       color: colors.textColor,
     },
     classSelectorArrow: {
       fontSize: ms(14),
       color: colors.secondaryTextColor,
       marginLeft: ms(6),
     },
     classDropdown: {
       position: 'absolute',
       top: ms(48),
       left: 0,
       right: 0,
       backgroundColor: colors.quinary,
       borderWidth: 1,
       borderColor: colors.borderColor,
       borderRadius: 8,
       zIndex: ms(20),
      //  shadowColor: colors.black,
      //  shadowOpacity: 0.08,
      //  shadowRadius: 8,
      //  shadowOffset: { width: 0, height: 2 },
      //  elevation: 3,
     },
     classDropdownItem: {
       paddingVertical: ms(12),
       paddingHorizontal: ms(18),
       borderBottomWidth: 1,
       borderBottomColor: colors.quaternary,
       zIndex:100
     },
     classDropdownItemText: {
      //  fontSize: ms(16),
      //  color: colors.secondaryTextColor,
     },




     dropdownContainer: {
  position: 'absolute',
  top: 50, // adjust based on your layout
  right: 0,
  zIndex: 100,
},

classDropdown: {
  backgroundColor: '#fff',
  borderRadius: 8,
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
},

classDropdownItem: {
  padding: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
},

classDropdownItemText: {
  fontSize: 16,
},

dropdownBackdrop: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},

   });