import { StyleProp, ViewStyle } from 'react-native';
import { ISelectable } from 'modules/common/models/Selectable';


export interface ICategoryView extends ISelectable {
  name: string;
  count: number;
  style?: StyleProp<ViewStyle>;
}
