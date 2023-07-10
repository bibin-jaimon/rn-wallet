import React from 'react';
import {
  Card,
} from '../screens/cards-list/card-list-type';

/**
 * Type of Stack Navigator
 */
export type RootStackType = {
  CardsListScreen: { };
  CardDetailsScreen: { card: Card };
};
