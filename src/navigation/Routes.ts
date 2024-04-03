import {
  FavoritesStackNavigator,
  HomeStackNavigator,
  StartTabNavigator,
  YourCartStackNavigator,
  YourOrdersStackNavigator,
} from 'navigation/navigators';

import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  HomeScreen,
  FavoritesScreen,
  ProfileScreen,
  SearchScreen,
  YourCartScreen,
  YourOrdersScreen,
  ExampleScreen,
  ItemDetailsScreen,
} from 'src/screens';

export const ROOT_NAVIGATORS = [
  {
    name: 'Start',
    component: StartTabNavigator,
  },
  {
    name: 'Your Cart',
    component: YourCartStackNavigator,
  },
  {
    name: 'Favorites',
    component: FavoritesStackNavigator,
  },
  {
    name: 'Your Orders',
    component: YourOrdersStackNavigator,
  },
];

export const START_SCREENS = [
  {
    name: 'Home',
    component: HomeStackNavigator,
    icon: faHouse,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Search',
    component: SearchScreen,
    icon: faMagnifyingGlass,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: faUser,
  },
];

export const HOME_SCREENS = [
  {
    name: 'Home Screen',
    component: HomeScreen,
    icon: faHouse,
  },
  {
    name: 'Screen1',
    component: ExampleScreen,
  },
  {
    name: 'Screen2',
    component: ExampleScreen,
  },
];

export const YOUR_CART_SCREENS = [
  {
    name: 'Your Cart Screen',
    component: YourCartScreen,
  },
  {
    name: 'Item Details',
    component: ItemDetailsScreen,
  },
];

export const FAVORITES_SCREENS = [
  {
    name: 'Favorites Screen',
    component: FavoritesScreen,
  },
];

export const YOUR_ORDERS_SCREENS = [
  {
    name: 'Your Orders Screen',
    component: YourOrdersScreen,
  },
];

export const ROUTES = {
  ROOT: {
    name: 'Root Navigator',
    navigators: ROOT_NAVIGATORS,
  },
  START: {
    name: 'Start Navigator',
    screens: START_SCREENS,
  },
  HOME: {
    name: 'Home Navigator',
    screens: HOME_SCREENS,
  },
  YOUR_CART: {
    name: 'Your Cart Navigator',
    screens: YOUR_CART_SCREENS,
  },
  FAVORITES: {
    name: 'Favorites Navigator',
    screens: FAVORITES_SCREENS,
  },
  YOUR_ORDERS: {
    name: 'Your Orders Navigator',
    screens: YOUR_ORDERS_SCREENS,
  },
};
