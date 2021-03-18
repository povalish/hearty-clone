import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { Base } from './Base';


export const Campaign: React.FC = () => (
  <View style={styles.base}>
    <Base />
    <Text style={styles.text}>кампании</Text>
  </View>
);
