import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardViewPropType } from './card-list-type';
import Animated from 'react-native-reanimated';
import { images } from '../../resource';

const CardView = (props: CardViewPropType) => {
  const { card } = props;
  console.log({card})
  let cardImage = images.gold;
  if (card.id === 1) {
    cardImage = images.visa
  }
  return (
    <View style={{ ...styles.container }}>
      <Animated.Image
        style={styles.animatedImageView}
        // width={100}
        // height={100}
        source={cardImage}
        sharedTransitionTag={`imageview-${card.id}}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  animatedImageView: {
    resizeMode: "cover",
  },
});

export { CardView };
