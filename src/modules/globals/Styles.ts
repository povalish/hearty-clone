import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { LayoutVars } from './Vars';

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: LayoutVars.HorizontalPadding,
  },
});

export const cardStyles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },

  shadow: {
    shadowColor: Colors.Main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 5,
  },
});
