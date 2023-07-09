// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { CardsListScreen } from '../screens/cards-list/cards-list-screen';
import { CardDetailsScreen } from '../screens/card-details/card-details-screen';

// StackType
import { RootStackType } from './root-stack-type';

const Stack = createNativeStackNavigator<RootStackType>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="CardsList">
      <Stack.Screen name="CardsList" component={CardsListScreen} />
      <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export { RootNavigator };
