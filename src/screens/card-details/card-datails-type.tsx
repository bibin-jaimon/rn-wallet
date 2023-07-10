import { PropsWithChildren } from 'react';
import { Card } from '../cards-list/card-list-type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackType } from '../../navigation/root-stack-type';

export type CardDetailsScreenProps = NativeStackScreenProps<
  RootStackType,
  'CardDetailsScreen'
>;
