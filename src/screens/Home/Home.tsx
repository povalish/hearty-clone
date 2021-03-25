import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';
import { Logo } from 'ui-kit/Logo';
import { FilterButton } from 'ui-kit/Buttons/FilterButton';

import { globalStyles } from 'modules/globals/Styles';

import { CategoryList } from 'modules/categories/views/CategoryList';
import { CampaignCategory } from 'modules/categories/models/CampaignCategory';
import { campaignTypes } from 'modules/campaigns/mocks/campaignTypes';
import { StoryList } from 'modules/stories/views/StoryList';
import { availableStories } from 'modules/stories/mocks/availableStories';



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
    <SafeAreaView>
      <View style={[globalStyles.container, styles.header]}>
        <Logo type='campaign' />
        <FilterButton />
      </View>

      <CategoryList
        categories={campaignCategories}
        onSelectCategories={() => undefined}
        style={{ paddingBottom: 10 }}
      />

      <StoryList
        stories={availableStories}
      />
    </SafeAreaView>
  );
};
