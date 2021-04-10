import React from 'react';
import {
  Text, StyleProp, TouchableOpacity, ViewStyle,
} from 'react-native';

import { localStyles } from './styles';
import { IButton } from 'types/Button';
import { Colors } from 'modules/globals/Colors';


interface IPrimaryButton extends IButton {
  style?: StyleProp<ViewStyle>
}

export const DefaultButton: React.FC<IPrimaryButton> = ({ onPress, style, children }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={[style, localStyles.buttonBase]}
  >
    <Text
      style={localStyles.textPrimary}
    >
      {children}
    </Text>
  </TouchableOpacity>
);
