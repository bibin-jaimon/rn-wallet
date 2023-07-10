import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CardView } from '../cards-list/card-view';
import { CardDetailsScreenProps } from './card-datails-type';

const CardDetailsScreen = (props: CardDetailsScreenProps) => {
  const { card } = props.route.params;

  return (
    <View style={styles.container}>
      <CardView card={card} />
      <View style={styles.latestTextContainer}>
        <Text style={styles.latestText}>Latest Transactions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    paddingTop: 8
  },
  latestTextContainer: { padding: 10, marginTop: 10 },
  latestText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
});

export { CardDetailsScreen };
