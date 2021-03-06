import React from 'react';
import {
  StyleProp, TouchableOpacity, ViewStyle, Text,
} from 'react-native';

import { IButton } from 'types/Button';
import { Colors } from 'modules/globals/Colors';
import { localStyles } from './styles';


interface IPrimaryButton extends IButton {
  style?: StyleProp<ViewStyle>
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ onPress, style, children }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={[style, localStyles.buttonPrimary]}
  >
    <Text
      style={localStyles.textWhite}
    >
      {children}
    </Text>
  </TouchableOpacity>
);
