import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { LayoutVars } from './Vars';

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: LayoutVars.HorizontalPadding,
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const linkStyles = StyleSheet.create({
  link: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.Primary,
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
