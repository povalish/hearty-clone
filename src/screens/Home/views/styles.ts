import { StyleSheet } from 'react-native';

export const localStyles = StyleSheet.create({
  flatListContainer: {
    // flex: 1,
  },

  stories: {
    marginBottom: 15,
  },

  card: {
    marginBottom: 15,
  },
});


export const emptyMessageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});
