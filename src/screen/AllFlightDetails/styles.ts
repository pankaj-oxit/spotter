import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     mainContainer: { backgroundColor: colors.background, paddingHorizontal: 10 },
     container: {
          flex: 1,
          justifyContent: 'center',
          padding: ms(16),
          backgroundColor: colors.quinary,
     },
     label: {
          fontSize: ms(16),
          marginBottom: ms(8),
     },
     input: {
          height: ms(40),
          borderColor: colors.senary,
          borderWidth: 1,
          marginBottom: ms(16),
          paddingHorizontal: ms(8),
          borderRadius: ms(4),
     },
});