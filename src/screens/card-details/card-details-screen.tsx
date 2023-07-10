import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CardView } from '../../components/card-view';
import { CardDetailsScreenProps } from './card-datails-type';
import { colors, dimen, strings } from '../../resource';

const CardDetailsScreen = (props: CardDetailsScreenProps) => {
  const { card } = props.route.params;

  return (
    <View style={styles.container}>
      <CardView card={card} />
      <View style={styles.latestTextContainer}>
        <Text style={styles.latestText}>{strings.latestTransaction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.black,
    paddingTop: 8,
  },
  latestTextContainer: { padding: 10, marginTop: 10 },
  latestText: {
    color: colors.white,
    fontSize: dimen.largeText,
    fontWeight: 'bold',
  },
});

export { CardDetailsScreen };
