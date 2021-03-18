import { GestureResponderEvent } from "react-native";

export interface IButton {
  onPress?: (event: GestureResponderEvent) => void;
}
