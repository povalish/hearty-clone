import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { Logo } from 'ui-kit/Logo';
import { FilterButton } from 'ui-kit/Buttons/FilterButton';
import { Card } from 'ui-kit/Card';

import { globalStyles } from 'modules/globals/Styles';

import { CategoryList } from 'modules/categories/views/CategoryList';
import { CampaignCategory } from 'modules/categories/models/CampaignCategory';
import { campaignTypes } from 'modules/campaigns/mocks/campaignTypes';
import { StoryList } from 'modules/stories/views/StoryList';
import { availableStories } from 'modules/stories/mocks/availableStories';
import { ScrollableArea } from './views/ScrollableArea';



export const HomeScreen: React.FC = () => {
  // Store available campaign categories
  const [campaignCategories, setCampaignCategories] = useState<CampaignCategory[]>([]);

  // Fetch categories
  // and convert to Category type for correct work of CategoryList
  useEffect(() => {
    // here goes fetch() call
    // and return result
    const converted: CampaignCategory[] = campaignTypes.map((type) => ({
      ...type,
      // Setup types for correct work of category list component
      name: type.title,
      count: type.stats?.campaigns || 0,
    }));

    setCampaignCategories(converted);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={[globalStyles.container, styles.header]}>
          <Logo type='campaign' />
          <FilterButton />
        </View>
      </SafeAreaView>

      <CategoryList
        categories={campaignCategories}
        onSelectCategories={() => undefined}
        style={styles.categories}
      />

      <View style={styles.scrollArea}>
        <ScrollableArea
          stories={availableStories}
          campaigns={{ status: 'loaded', payload: [1, 2, 3, 4, 5, 6, 7] }}
        />
      </View>
    </View>
  );
};
