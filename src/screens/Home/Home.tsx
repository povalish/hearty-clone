import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { globalStyles } from 'modules/globals/Styles';
import { Logo } from 'ui-kit/Logo';
import { FilterButton } from 'ui-kit/Buttons/FilterButton';



export const HomeScreen: React.FC = () => (
  <SafeAreaView>
    <View style={[globalStyles.container, styles.header]}>
      <Logo type='campaign' />
      <FilterButton />
    </View>
  </SafeAreaView>
);
