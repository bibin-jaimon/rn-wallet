import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Platform,
  ViewStyle,
  Dimensions,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Card,
  CardRenderItemParams,
  CardsListScreenProps,
} from './card-list-type';

//services
import { fetchCards } from '../../service/card-service/card-service';
import { CardView } from './card-view';

const CardsListScreen = (props: CardsListScreenProps) => {
  const { navigation } = props;
  const stepOffset = 60;
  const [cardData, setCardData] = useState<Card[]>([]);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const deviceHeight: number = Dimensions.get('window').height;

  useEffect(() => {
    fetchCards().then((cards: Card[]) => setCardData(cards));
  }, []);
  const scrollViewContentHeightAdjustment = cardData.length * 60 + deviceHeight;
  const contentContainerStyle =
    Platform.OS == 'ios'
      ? {}
      : {
          height: scrollViewContentHeightAdjustment,
          flexGrow: 1,
        };
  const renderItem = (data: CardRenderItemParams) => {
    const { index, item } = data;
    const initialOffset = index * stepOffset;
    let translateY = initialOffset;
    if (scrollOffset > 0) {
      translateY =
        translateY - scrollOffset > 0 ? translateY - scrollOffset : 0;
    } else {
      translateY = initialOffset - scrollOffset * index;
    }
    return (
      <View style={styles.flatListItem}>
        <Pressable
          onPress={() =>
            navigation.navigate('CardDetailsScreen', { card: item })
          }>
          <Animated.View style={{ transform: [{ translateY: translateY }] }}>
            <CardView card={item} />
          </Animated.View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        ListHeaderComponent={
          <Animated.View style={{ height: 100, backgroundColor: 'yellow' }}>
            <Text style={{ color: 'white' }}>Wallet</Text>
          </Animated.View>
        }
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          let value = event.nativeEvent.contentOffset.y;
          setScrollOffset(value);
        }}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flatListItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export { CardsListScreen };
