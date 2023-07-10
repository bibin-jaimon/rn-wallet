import { PropsWithChildren } from 'react';
import { Transaction } from '../cards-list/card-list-type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackType } from '../../navigation/root-stack-type';

export type CardDetailsScreenProps = NativeStackScreenProps<
  RootStackType,
  'CardDetailsScreen'
>;

export interface TransactioRenderParams {
  item: Transaction;
  index: number;
}
