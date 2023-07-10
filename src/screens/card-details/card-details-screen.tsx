import React from 'react';
import { Text, View } from 'react-native';
import { CardView } from '../cards-list/card-view';
import { Card } from '../cards-list/card-list-type';
import { CardDetailsScreenProps } from './card-datails-type';

const CardDetailsScreen = (props: CardDetailsScreenProps) => {
  const { card } = props.route.params;

  return (
    <View style={{ backgroundColor: 'white' }}>
      <CardView card={card} />
    </View>
  );
};

export { CardDetailsScreen };
