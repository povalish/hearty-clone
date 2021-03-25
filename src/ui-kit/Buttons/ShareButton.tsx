import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import ShareIcon from 'assets/icons/share.svg';
import { IButton } from 'types/Button';


interface IShareButton extends IButton {
  style?: StyleProp<ViewStyle>
}

export const ShareButton: React.FC<IShareButton> = ({ onPress, style }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={style}
  >
    <ShareIcon />
  </TouchableOpacity>
);
