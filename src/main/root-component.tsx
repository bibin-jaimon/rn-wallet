import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigator } from '../navigation/root-navigator';
import { StatusBar } from 'react-native';

const RootComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export { RootComponent };
