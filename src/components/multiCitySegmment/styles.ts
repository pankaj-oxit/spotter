import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     segment: {
       borderBottomWidth: 2,
       borderBottomColor: colors.borderYellowColor,
       marginTop: ms(8),
     },
     row: {
       flexDirection: 'row',
       alignItems: 'center',
       paddingVertical: ms(10),
       borderBottomWidth: 1,
       borderBottomColor: colors.quaternary,
     },
     icon: {
       fontSize: ms(22),
       marginRight: ms(10),
     },
     dateRow: {
       flexDirection: 'row',
       alignItems: 'center',
       paddingVertical: ms(10),
       borderBottomWidth: 1,
       borderBottomColor: colors.quaternary,
     },
     dateIcon: {
       fontSize: ms(22),
       marginRight: ms(10),
     },
     dateText: {
       fontSize: ms(16),
       color: colors.textColor,
     },
   });