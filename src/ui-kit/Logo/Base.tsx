import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { HeartIcon } from 'ui-kit/Icons';

import { ILogo } from './types';
import { Colors } from 'modules/globals/Colors';


export const Base: React.FC<ILogo> = ({ theme }) => {
  // Calculate icon color based on theme property
  const fillColor = useMemo(() => {
    if (theme === 'green') { return Colors.Secondary; }
    return Colors.Primary;
  }, [theme]);


  return (
    <View style={styles.base}>
      <Text style={styles.text}>hearty</Text>
      <HeartIcon
        style={styles.icon}
        pathColor={fillColor}
      />
    </View>
  );
};
