import React, { useEffect, useState } from 'react';
import {
  Animated, StyleProp, Text, TouchableOpacity, ViewStyle,
} from 'react-native';

import { styles } from './styles';
import { Colors } from 'modules/globals/Colors';
import { ICategoryView } from 'modules/categories/models/CategoryView';
import { useColorTransition } from 'modules/common/utils/useColorTransition';



export const CategoryView: React.FC<ICategoryView> = ({
  name, count,
  style,
  isSelected, onSelect,
}) => {
  // Setup hook for color transition
  const { color, setToEndValue, setToStartValue } = useColorTransition(Colors.Main, Colors.Primary);

  useEffect(() => {
    if (isSelected) { setToEndValue(); }
    if (!isSelected) { setToStartValue(); }
  }, [isSelected]);

  return (
    <TouchableOpacity
      style={[style, styles.categoryItem]}
      onPress={() => onSelect && onSelect(!isSelected)}
    >
      <Animated.Text style={[styles.categoryItemText, { color }]}>
        {name}
      </Animated.Text>

      <Text style={styles.categoryItemCounter}>
        {count}
      </Text>
    </TouchableOpacity>
  );
};
