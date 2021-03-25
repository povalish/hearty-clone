import React from 'react';
import {
  View, Text, StyleProp, ViewStyle,
} from 'react-native';

import { progressStyles } from './style';
import { globalStyles } from 'modules/globals/Styles';


interface IProgress {
  start?: number;
  end?: number;
  style?: StyleProp<ViewStyle>;
}

export const Progress: React.FC<IProgress> = ({ start = 0, end = 100, style }) => (
  // Wrapper
  <View style={style}>
    {/* Progress Bar */}
    <View style={progressStyles.line}>
      <View style={[progressStyles.fill, { width: `${(start / end) * 100}%` }]} />
    </View>

    {/* Progress Stats */}
    <View style={[globalStyles.flexRow, globalStyles.container, progressStyles.statsContainer]}>
      <Text style={progressStyles.statsItem}>Собрано {start} Р</Text>
      <Text style={progressStyles.statsItem}>еще {end - start} Р</Text>
    </View>
  </View>
);
