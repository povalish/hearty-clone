import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


/**
 * Generic types for route and navigation.
 */

export type ScreenNavigation<
  S extends ParamListBase,
  K extends keyof S
> = StackNavigationProp<S, K>;

export type ScreenRoute<
S extends ParamListBase,
K extends keyof S
> = RouteProp<S, K>;

export type ScreenProps<
  S extends ParamListBase,
  K extends keyof S
> = {
  route: ScreenRoute<S, K>;
  navigation: ScreenNavigation<S, K>;
};



//
/* Example */
//
// Define stack with screens and params
//
// type RootStack = {
//   Home: undefined;
//   Campaign: { campaignId: number };
// }
//
//
//
// Then if we need typings
// for useNavigation() inside Home component
//
// type RootNavigation = ScreenNavigation<RootStack, 'Campaign'>
//
// Same logic for creating typings for Route
