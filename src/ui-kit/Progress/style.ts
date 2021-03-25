import { StyleSheet } from 'react-native';
import { Colors } from 'modules/globals/Colors';


export const progressStyles = StyleSheet.create({
  line: {
    position: 'relative',
    height: 5,
    backgroundColor: Colors.Grey,
  },

  fill: {
    // inline width
    height: '100%',
    backgroundColor: Colors.Secondary,
  },

  statsContainer: {
    marginTop: 5,
  },

  statsItem: {
    textTransform: 'uppercase',
    fontSize: 10,
    color: Colors.Grey,
  },
});
