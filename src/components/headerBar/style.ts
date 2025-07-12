import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";

export const styles = StyleSheet.create({
     container: {
       backgroundColor: '#fff',
       borderRadius: ms(12),
       padding: ms(12),
       margin: ms(12),
       borderWidth: 2,
       borderColor: '#ffd700',
     },
     route: {
       fontSize: ms(18),
       color: '#222',
       marginBottom: ms(2),
     },
     bold: {
       fontWeight: 'bold',
     },
     details: {
       fontSize: ms(14),
       color: '#444',
     },
   });
   