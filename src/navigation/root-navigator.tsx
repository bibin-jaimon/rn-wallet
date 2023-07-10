// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// StackType
import { RootStackType } from './root-stack-type';
import { stackConfiguration } from './root-navigator-config';

const Stack = createNativeStackNavigator<RootStackType>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={stackConfiguration[0].name}>
      {stackConfiguration.map(({ name, component, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export { RootNavigator };
