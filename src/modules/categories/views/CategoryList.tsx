import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { LayoutVars } from 'modules/globals/Vars';

import { CategoryView } from './Category';
import { ICategoryListView } from '../models/CategoryListView';
import { Category } from '../models/Category';



export const CategoryList: React.FC<ICategoryListView> = ({ categories, onSelectCategories }) => {
  // Store selection filter mode
  const [mode, setMode] = useState<'single' | 'multiple'>('single');

  // Store filters for manipulating inside this component
  const [categoryModels, setCategoyModels] = useState<Category[]>([]);

  // Watch for changes of `categories` property
  // and re-assign categoryModels
  useEffect(() => {
    setCategoyModels(categories);
  }, [categories]);


  const handleSelectedCat = (index: number, isSelected: boolean) => {
    // Update particular filter with passed index and value
    const updatedFilters = categoryModels.map((cat, catIndex) => {
      // return updated filter with new `isSelected` flag
      if (catIndex === index) { return { ...cat, isSelected }; }
      // if single mode selection -- returns filters with de-selected values
      // if multiple mode selection -- do nothing and return default filter
      return mode === 'single' ? { ...cat, isSelected: false } : cat;
    });
    // Update component filters
    setCategoyModels(updatedFilters);
    onSelectCategories(updatedFilters.filter((cat) => cat.isSelected));
  };


  return (
    <ScrollView
      contentOffset={{ x: -LayoutVars.HorizontalPadding, y: 0 }}
      contentInset={{ left: LayoutVars.HorizontalPadding, right: LayoutVars.HorizontalPadding }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categoryModels.map((cat, index) => (
        <CategoryView
          key={index}
          name={cat.name}
          count={cat.count}
          isSelected={cat.isSelected}
          onSelect={(value) => handleSelectedCat(index, value)}
          style={{ marginRight: LayoutVars.HorizontalPadding }}
        />
      ))}
    </ScrollView>
  );
};
