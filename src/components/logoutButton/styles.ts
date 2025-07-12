

import { StyleSheet } from "react-native";
import { ms } from "../../utlils/deviceConfig";
import { colors } from "../../utlils/colors";

export const styles = StyleSheet.create({
     logutButton:
          { width: ms(60), height: ms(42), alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', borderRadius: ms(8), backgroundColor: colors.backgroundError, marginTop:20 },
     text: {
          color: colors.quinary
     }
});