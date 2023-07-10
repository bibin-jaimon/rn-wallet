import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackType } from '../../navigation/root-stack-type';

export interface Card {
  id: number;
  name: string;
  bgColor: string;
  bgImage: string;
}

export interface CardViewPropType {
  card: Card;
}

export interface CardRenderItemParams {
  item: Card;
  index: number;
}

export type CardsListScreenProps = NativeStackScreenProps<
  RootStackType,
  'CardsListScreen'
>;
