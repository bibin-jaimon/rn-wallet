import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackType } from '../../navigation/root-stack-type';

export interface Transaction {
  note: string;
  amount: string;
  currency: string;
  date: string;
}
export interface Card {
  id: number;
  name: string;
  bgImage: string;
  transactions: Transaction[];
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
