import { Colors } from 'modules/globals/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  categoryItem: {
    position: 'relative',
    alignSelf: 'flex-start',
    paddingRight: 10,
    paddingTop: 5,
  },

  categoryItemText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.7,
  },

  categoryItemCounter: {
    position: 'absolute',
    top: 0,
    right: 0,

    fontSize: 12,
    color: Colors.Grey,
  },


  filterList: {
    paddingBottom: 15,
  },
});
