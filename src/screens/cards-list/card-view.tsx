import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardViewPropType } from './card-list-type';

const CardView = (props: CardViewPropType) => {
  const { card } = props;
  return (
    <View style={{ ...styles.card, backgroundColor: card.bgColor }}>
      <Text style={styles.title}>{card.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    height: 210,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { CardView };
