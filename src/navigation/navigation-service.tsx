import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RootStackType } from './root-stack-type';
import { Card } from '../screens/cards-list/card-list-type';

const navigationRef = createNavigationContainerRef<RootStackType>();

/**
 * To get navigation reference
 * @returns A navigation reference
 */
const getNavigationRef = () => navigationRef;

/**
 * A method to navigate to screens
 * @param name Screen name
 * @param params Required parameter
 */
const navigateTo = (name: any, params?: object) => {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.navigate(name, params);
  }
};

/**
 * A method to navigate to CardDetailsScreen
 * @param params typeof Card
 */
const navigateToCardDetailScreen = (params: { card: Card }) => {
  navigateTo('CardDetailsScreen', params);
};

export { navigateTo, getNavigationRef, navigateToCardDetailScreen };
