import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RootStackType } from './root-stack-type';
import { Card } from '../screens/cards-list/card-list-type';

const navigationRef = createNavigationContainerRef<RootStackType>();
const getNavigationRef = () => navigationRef;

const navigateTo = (name: any, params?: object) => {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.navigate(name, params);
  }
};

const navigateToCardDetailScreen = (params: { card: Card }) => {
  navigateTo('CardDetailsScreen', params);
};

export { navigateTo, getNavigationRef, navigateToCardDetailScreen };
