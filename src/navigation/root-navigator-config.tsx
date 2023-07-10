import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootStackType } from './root-stack-type';


// Screens
import { CardsListScreen } from '../screens/cards-list/cards-list-screen';
import { CardDetailsScreen } from '../screens/card-details/card-details-screen';

// Components
import { BackButton } from '../components/back-button';

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
      headerLeft: () => <BackButton />,
      headerBackTitle: 'Done',
      presentation: 'transparentModal',
      animation: 'fade',
      title: ''
    },
  },
];

export { stackConfiguration };
