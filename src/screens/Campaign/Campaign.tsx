import React from 'react';
import { View, Text } from 'react-native';
import { RootScreenProps } from 'navigation/types';


export const CampaignScreen: React.FC<RootScreenProps<'Campaign'>> = ({ route, navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>CampaignScreen {route.params.campaignId}</Text>
  </View>
);
