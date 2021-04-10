import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  categories: {
    paddingBottom: 20,
    flexGrow: 0,
  },

  scrollArea: {
    flex: 1,
    flexGrow: 1,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 20,
  },
});
