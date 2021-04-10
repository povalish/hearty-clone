import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors } from 'modules/globals/Colors';



const buttonBase: ViewStyle = {
  width: '100%',
  paddingHorizontal: 20,
  paddingVertical: 15,
};

const textBase: TextStyle = {
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
};


export const localStyles = StyleSheet.create({
  buttonBase,
  buttonPrimary: {
    ...buttonBase,
    backgroundColor: Colors.Primary,
  },

  textWhite: {
    ...textBase,
    color: Colors.White,
  },
  textPrimary: {
    ...textBase,
    color: Colors.Primary,
  },
});
