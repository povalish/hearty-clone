import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { cardStyles } from 'modules/globals/Styles';
import { storyStyles } from './styles';
import { IStoryView } from '../models/StoryView';



export const StoryView: React.FC<IStoryView> = ({ title, image, style }) => (
  <TouchableOpacity style={[cardStyles.shadow, style]} activeOpacity={0.9}>
    <View style={[cardStyles.wrapper, storyStyles.card, storyStyles.containerSize]}>
      <Image style={[storyStyles.containerSize]} source={image} />
      <Text style={[storyStyles.title]}>{title}</Text>
    </View>
  </TouchableOpacity>
);
