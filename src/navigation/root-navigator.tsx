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
    <Stack.Navigator initialRouteName="CardsListScreen">
      <Stack.Screen name="CardsListScreen" component={CardsListScreen} />
      <Stack.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export { RootNavigator };
