import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CardView } from '../../components/card-view';
import {
  CardDetailsScreenProps,
  TransactioRenderParams,
} from './card-datails-type';
import { colors, dimen, strings } from '../../resource';
import { TransactionItem } from '../../components/tansaction-item';

const CardDetailsScreen = (props: CardDetailsScreenProps) => {
  const { card } = props.route.params;

  const renderItem = (data: TransactioRenderParams) => {
    const { item } = data;
    return <TransactionItem data={item} />;
  };
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <CardView card={card} />
        <View style={styles.latestTextContainer}>
          <Text style={styles.latestText}>{strings.latestTransaction}</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            scrollEnabled={false}
            data={card.transactions}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScrollView>
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
  flatListContainer: {
    borderRadius: dimen.defaultBorderRadius,
    backgroundColor: 'gray',
    paddingVertical: 8,
  },
});

export { CardDetailsScreen };
