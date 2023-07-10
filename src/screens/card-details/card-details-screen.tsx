import React from 'react';
import { Button, Text, View } from 'react-native';
import { CardView } from '../cards-list/card-view';
import { Card } from '../cards-list/card-list-type';
import { CardDetailsScreenProps } from './card-datails-type';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const CardDetailsScreen = (props: CardDetailsScreenProps) => {
  const { card } = props.route.params;

  return (
    <View style={{ backgroundColor: 'black', flex:1 }}>
      <CardView card={card} />
      <Text style={{color: 'white'}}>Latest Transactions</Text>
    </View>
  );
};

export { CardDetailsScreen };
