import React from 'react';
import {
  StyleProp, TouchableOpacity, ViewStyle, Text,
} from 'react-native';

import { IButton } from 'types/Button';
import { Colors } from 'modules/globals/Colors';


interface IPrimaryButton extends IButton {
  style?: StyleProp<ViewStyle>
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ onPress, style, children }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={[style, {
      width: '100%',
      backgroundColor: Colors.Primary,
      paddingHorizontal: 20,
      paddingVertical: 15,
    }]}
  >
    <Text
      style={{
        color: Colors.White,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>
);
