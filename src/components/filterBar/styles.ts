import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     container: {
       flexDirection: 'row',
       marginVertical: ms(12),
       paddingHorizontal: ms(8),
     },
     button: {
       backgroundColor: '#fff',
       borderRadius: ms(20),
       paddingHorizontal: ms(16),
       paddingVertical: ms(8),
       marginHorizontal: ms(4),
       borderWidth: 1,
       borderColor: '#eee',
       elevation: 1,
     },
     buttonSelected: {
       backgroundColor: colors.septenary,
       borderColor: colors.octonary,
     },
     buttonText: {
       fontSize: ms(14),
       color: colors.textColor,
       fontWeight: '500',
     },
     buttonTextSelected: {
       color: colors.quinary,
       fontWeight: 'bold',
     },
   });