import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { IButton } from 'types/Button';
import { FilterIcon } from 'ui-kit/Icons';


interface IFilterButton extends IButton {
  style?: StyleProp<ViewStyle>
}

export const FilterButton: React.FC<IFilterButton> = ({ onPress, style }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={style}
  >
    <FilterIcon />
  </TouchableOpacity>
);
