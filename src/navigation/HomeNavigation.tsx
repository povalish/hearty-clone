import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeCampaignsScreen } from 'screens/Home/HomeCampaigns';



export type HomeStackParams = {
  HomeCampaigns: undefined;
  HomeFilters: undefined;
}


const HomeStack = createStackNavigator<HomeStackParams>();


export const HomeNavigation: React.FC = () => (
  <HomeStack.Navigator initialRouteName='HomeCampaigns' headerMode='none'>
    <HomeStack.Screen name='HomeCampaigns' component={HomeCampaignsScreen} />
  </HomeStack.Navigator>
);
