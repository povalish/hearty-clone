import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CampaignScreen } from 'screens/Campaign';
import { HomeNavigation, HomeStackParams } from './HomeNavigation';



export type RootStackParams = {
  Home: HomeStackParams;
  Campaign: { campaignId: number };
}


const RootStack = createStackNavigator<RootStackParams>();


export const RootNavigation: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName='Home' headerMode='none'>
      <RootStack.Screen name='Home' component={HomeNavigation} />
      <RootStack.Screen name='Campaign' component={CampaignScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);
