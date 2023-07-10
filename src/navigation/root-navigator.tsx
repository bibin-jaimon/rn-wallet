// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { CardsListScreen } from '../screens/cards-list/cards-list-screen';
import { CardDetailsScreen } from '../screens/card-details/card-details-screen';

// StackType
import { RootStackType } from './root-stack-type';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator<RootStackType>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="CardsListScreen">
      <Stack.Screen
        name="CardsListScreen"
        component={CardsListScreen}
        
        options={{
          title: 'Wallet',
          // headerLeft: () => {
          //   return <Text>Hey there</Text>;
          // },
          // headerLargeTitle: true
        }}
      />
      <Stack.Screen name="CardDetailsScreen" component={CardDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export { RootNavigator };
