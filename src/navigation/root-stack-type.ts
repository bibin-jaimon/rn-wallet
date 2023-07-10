import React from 'react';
import {
  Card,
} from '../screens/cards-list/card-list-type';

export type RootStackType = {
  CardsListScreen: { };
  CardDetailsScreen: { card: Card };
};
