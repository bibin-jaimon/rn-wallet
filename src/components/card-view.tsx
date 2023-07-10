import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardViewPropType } from '../screens/cards-list/card-list-type';
import Animated from 'react-native-reanimated';
import { dimen, images } from '../resource';

const getCardImage = (type: string) => {
  switch (type) {
    case 'gold':
      return images.gold;
    case 'platinum':
      return images.platinum;
    case 'visa':
      return images.visa;
  }
};
const CardView = (props: CardViewPropType) => {
  const { card } = props;
  let cardImage = getCardImage(card.bgImage);
  return (
    <View style={{ ...styles.container }}>
      <Animated.Image
        style={styles.animatedImageView}
        source={cardImage}
        sharedTransitionTag={`imageview-${card.id}}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  animatedImageView: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: dimen.defaultBorderRadius,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export { CardView };
