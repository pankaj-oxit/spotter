import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
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
     normalText: {
       fontSize: ms(16),
     },
   });