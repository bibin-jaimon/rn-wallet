import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootStackType } from './root-stack-type';
import * as NavigationServie from '../navigation/navigation-service';


// Screens
import { CardsListScreen } from '../screens/cards-list/cards-list-screen';
import { CardDetailsScreen } from '../screens/card-details/card-details-screen';

// Components
import { BackButton } from '../components/back-button';

/**
 * Default configuration for all the screens
 */
const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: 'black',
    title: '',
  },
};

interface StackConfig {
  name: keyof RootStackType;
  component: any;
  options: NativeStackNavigationOptions;
}

/**
 * To add configuration for new screens
 */
const stackConfiguration: StackConfig[] = [
  {
    name: 'CardsListScreen',
    component: CardsListScreen,
    options: {
      ...defaultScreenOptions,
      title: 'Wallet',
      headerShown: false,
    },
  },
  {
    name: 'CardDetailsScreen',
    component: CardDetailsScreen,
    options: {
      ...defaultScreenOptions,
      headerLeft: () => <BackButton/>,
      headerBackTitle: 'Done',
      presentation: 'transparentModal',
      animation: 'fade',
      title: ''
    },
  },
];

export { stackConfiguration };
