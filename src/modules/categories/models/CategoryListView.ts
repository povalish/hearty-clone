import { Category } from 'modules/categories/models/Category';
import { StyleProp, ViewStyle } from 'react-native';


export interface ICategoryListView {
  categories: Category[];
  onSelectCategories: (selected: Category[]) => void;
  style?: StyleProp<ViewStyle>;
}
