import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { CardViewPropType } from '../screens/cards-list/card-list-type';
import Animated from 'react-native-reanimated';
import { colors, dimen, images } from '../resource';

/**
 * To retrieve image from the of the card
 * @param type Image type coming from card object
 * @returns Image for a type of card
 */
const getCardImage = (type: string) => {
  switch (type) {
    case 'gold':
      return images.gold;
    case 'platinum':
      return images.platinum;
    case 'visa':
      return images.visa;
    default:
      return 'visa';
  }
};

const groupCreditCardNumber = (number: string): string | undefined => {
  // Remove any non-digit characters from the input
  const cleanedNumber = number.replace(/\D/g, '');

  // Split the number into groups of four digits each
  const groups = cleanedNumber.match(/.{1,4}/g);

  // Join the groups with a space in between
  const formattedNumber = groups?.join('  ');

  return formattedNumber;
};

const CardView = (props: CardViewPropType) => {
  const { card } = props;
  const { cardHolderName, cardNumber, validity, name } = card;
  const cardImage = getCardImage(card.bgImage);
  const formattedCardNumber = groupCreditCardNumber(cardNumber);
  return (
    <Animated.View
      sharedTransitionTag={`imageview-${card.id}`}
      style={{ ...styles.container }}>
      <ImageBackground style={styles.imageBackground} source={cardImage}>
        <View style={styles.layerView}>
          <View style={styles.topSection}>
            <Text style={styles.bankText}>{name}</Text>
          </View>
          <View style={styles.middleSection}>
            <Text style={styles.cardText}>{formattedCardNumber}</Text>
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.cardHolderName}>{cardHolderName}</Text>
            <Text style={styles.validity}>{validity}</Text>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    borderRadius: dimen.defaultBorderRadius,
    borderWidth: 2,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  title: {
    fontSize: dimen.mediumText,
    fontWeight: 'bold',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
  },
  layerView: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: 'black',
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 24,
    paddingTop: 12,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankText: { fontWeight: '900', fontSize: 30, color: colors.white },
  cardText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: dimen.largeText,
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  cardHolderName: { color: colors.white, fontSize: dimen.largeText },
  validity: { color: colors.white, fontSize: dimen.largeText },
});

export { CardView };
