import { Text, View } from 'react-native';
import { Card } from './card';

//Components


interface CardsListScreenProps {}

const CardsListScreen: React.FC<CardsListScreenProps> = () => {
  return (
    <View>
      <Text>CardsListScreen works</Text>
      <Card></Card>
    </View>
  );
};

export { CardsListScreen };
