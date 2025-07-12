
import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     modalOverlay: {
          flex: 1,
          backgroundColor: colors.black,

          justifyContent: 'center',
          alignItems: 'center',
     },
     modalContent: {
          backgroundColor: colors.quinary,
          borderRadius: 12,
          padding: ms(16),
          width: '95%',
          alignItems: 'center',
     },
     closeButton: {
          marginTop: ms(16),
          paddingVertical: ms(10),
          paddingHorizontal: ms(24),
          backgroundColor: colors.primary,
          borderRadius: 8,
     },
     closeButtonText: {
          color: colors.quinary,
          fontWeight: 'bold',
          fontSize: ms(16),
     },

});