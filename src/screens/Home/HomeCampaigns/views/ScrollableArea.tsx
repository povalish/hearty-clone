import React, { useEffect, useState } from 'react';
import {
  FlatList, StyleProp, View, ViewStyle, Text, ListRenderItem, ActivityIndicator,
} from 'react-native';


import { Card } from 'ui-kit/Card';
import { globalStyles } from 'modules/globals/Styles';
import { Colors } from 'modules/globals/Colors';
import { localStyles } from './styles';

import { Payload } from 'modules/common/models/Payload';
import { StoryModel } from 'modules/stories/models/StoryModel';
import { StoryList } from 'modules/stories/views/StoryList';
import { EmptyCampaignsMessage } from './EmptyCampaignsMessage';


interface IScrollableArea {
  stories: StoryModel[];
  campaigns: Payload<number[]>;

  style?: StyleProp<ViewStyle>;
}

export const ScrollableArea: React.FC<IScrollableArea> = ({ stories, campaigns, style }) => {
  // Render FlatList header -- Stories
  const renderHeader = () => <StoryList stories={stories} style={localStyles.stories} />;

  // Render card items
  const renderItem = () => (
    <View style={[globalStyles.container, localStyles.card]}>
      <Card />
    </View>
  );

  const renderEmptyMessage = () => <EmptyCampaignsMessage style={{ marginTop: 100 }} />;

  // If Campaigns successfully laoded
  // Then we can render flatlist
  if (campaigns.status === 'loaded') {
    return (
      <FlatList
        style={style}
        data={campaigns.payload}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyMessage}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={localStyles.flatListContainer}
      />
    );
  }

  if (campaigns.status === 'error') {
    return (
      <View style={style}>
        <StoryList stories={stories} style={localStyles.stories} />
        <View style={[globalStyles.container, {
          display: 'flex',
          alignItems: 'center',
          marginTop: 100,
        }]}
        >
          <Text style={{ marginBottom: 15, color: Colors.Error }}>
            {campaigns.error.message}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={style}>
      <StoryList stories={stories} style={localStyles.stories} />
      <View style={[globalStyles.container, {
        display: 'flex',
        alignItems: 'center',
        marginTop: 100,
      }]}
      >
        <Text style={{ marginBottom: 15 }}>
          Загрузка списка кампаний...
        </Text>
        <ActivityIndicator color={Colors.Primary} />
      </View>
    </View>
  );
};
