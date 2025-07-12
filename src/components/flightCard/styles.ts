import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     card: {
       backgroundColor: colors.quinary,
       borderRadius: 12,
       padding: ms(16),
       marginVertical: ms(8),
       shadowColor: '#000',
       shadowOpacity: 0.05,
       shadowRadius: 8,
       elevation: 2,
     },
     row: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
     logo: {
       width: ms(32),
       height: ms(32),
       resizeMode: 'contain',
       marginRight: ms(8),
     },
     timeSection: {
       alignItems: 'center',
       flex: 1,
     },
     time: {
       fontSize: ms(20),
       fontWeight: 'bold',
     },
     city: {
       fontSize: ms(12),
       color: colors.secondaryTextColor,
     },
     durationSection: {
       alignItems: 'center',
       flex: 1,
     },
     direct: {
       backgroundColor: colors.septenary,
       color: colors.quinary,
       borderRadius: ms(6),
       paddingHorizontal: ms(6),
       fontSize: ms(12),
       marginBottom: ms(2),
     },
     duration: {
       fontSize: ms(12),
       color: colors.secondaryTextColor,
     },
     airline: {
       fontSize: ms(14),
       color: '#444',
       marginTop: ms(8),
     },
     iconRow: {
       flexDirection: 'row',
       marginTop: ms(8) ,
     },
     note: {
       color: '#b9770e',
       fontSize: ms(12),
       marginTop: ms(4),
     },
     priceRow: {
       flexDirection: 'row',
       alignItems: 'flex-end',
       marginTop: ms(8),
     },
     price: {
       fontSize: ms(20),
       fontWeight: 'bold',
       color: '#222',
       marginRight: ms(8),
     },
     total: {
       fontSize: ms(12)           ,
       color: colors.secondaryTextColor,
       alignSelf: 'flex-end',
     },
     tagRow: {
       flexDirection: 'row',
       marginTop: ms(8),
     },
     tag: {
       backgroundColor: colors.quaternary,
       color: colors.nonary,
       borderRadius: 6,
       paddingHorizontal: ms(8),
       paddingVertical: ms(2),
       fontSize: ms(12),
       marginRight: ms(6),
     },
   });