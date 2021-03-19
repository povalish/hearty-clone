import { Category } from 'modules/categories/models/Category';


export interface ICategoryListView {
  categories: Category[];
  onSelectCategories: (selected: Category[]) => void;
}
