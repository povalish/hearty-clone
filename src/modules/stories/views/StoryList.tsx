import React from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

import { LayoutVars } from 'modules/globals/Vars';
import { StoryModel } from '../models/StoryModel';
import { StoryView } from './Story';
import { listStyles } from './styles';



interface IStoryList {
  stories: StoryModel[];
  style?: StyleProp<ViewStyle>;
}

export const StoryList: React.FC<IStoryList> = ({ stories, style }) => (
  <ScrollView
    contentOffset={{ x: -LayoutVars.HorizontalPadding, y: 0 }}
    contentInset={{ left: LayoutVars.HorizontalPadding, right: LayoutVars.HorizontalPadding }}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={[style, listStyles.wrapper]}
  >
    {stories.map((story, index) => (
      <StoryView
        key={index}
        title={story.title}
        image={story.image}
        style={{ marginRight: LayoutVars.HorizontalPadding }}
      />
    ))}
  </ScrollView>
);
