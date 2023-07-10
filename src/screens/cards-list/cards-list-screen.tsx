import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Card,
  CardRenderItemParams,
  CardsListScreenProps,
} from './card-list-type';

//services
import { fetchCards } from '../../service/card-service/card-service';
import { CardView } from './card';

const CardsListScreen = (props: CardsListScreenProps) => {
  const { navigation } = props;
  const stepOffset = 60;
  const [cardData, setCardData] = useState<Card[]>([]);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  useEffect(() => {
    fetchCards().then((cards: Card[]) => setCardData(cards));
  }, []);

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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CardDetailsScreen', { card: item })
        }>
        <Animated.View style={{ transform: [{ translateY: translateY }] }}>
          <CardView card={item} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical={true}
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
    backgroundColor: '#f2f2f2',
    paddingTop: 10,
  },
});

export { CardsListScreen };
