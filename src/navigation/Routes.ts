import {HomeStackNavigator, StartTabNavigator} from 'navigation/navigators';

import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  ExampleScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
} from 'src/screens';

export const ROOT_NAVIGATORS = [
  {
    name: 'Start',
    component: StartTabNavigator,
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
};
