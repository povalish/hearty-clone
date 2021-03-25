import { StyleSheet } from 'react-native';
import { LayoutVars } from 'modules/globals/Vars';
import { Colors } from 'modules/globals/Colors';

export const localStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.White,
  },

  caption: {
    paddingTop: 5,
    paddingHorizontal: LayoutVars.HorizontalPadding,
    paddingBottom: LayoutVars.HorizontalPadding,
  },

  title: {
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },

  statsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  statsCounter: {
    fontWeight: 'bold',
  },
});
