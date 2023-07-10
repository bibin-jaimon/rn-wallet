import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardPropType } from './card-list-type';
import { useNavigation } from '@react-navigation/native';

const CardView = (props: CardPropType) => {
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 210,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { CardView };
