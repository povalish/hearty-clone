import { Colors } from 'modules/globals/Colors';
import { StyleSheet } from 'react-native';

export const storyStyles = StyleSheet.create({
  containerSize: {
    width: 120,
    height: 120,
  },

  card: {
    backgroundColor: Colors.Secondary,
  },

  title: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontWeight: '700',
    fontSize: 14,
  },
});


export const listStyles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
});
