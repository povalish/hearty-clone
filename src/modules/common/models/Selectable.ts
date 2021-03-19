// Usually using for view-components
export interface ISelectable {
  isSelected?: boolean;
  onSelect?: (value: boolean) => void;
}

// Usually using for type defenitions
export type Selectable = {
  isSelected?: boolean;
}
