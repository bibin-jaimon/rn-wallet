import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  Dimensions,
} from 'react-native';
import { useEffect, useState } from 'react';
import {
  Card,
  CardRenderItemParams,
  CardsListScreenProps,
} from './card-list-type';

import { fetchCards } from '../../service/card-service/card-service';
import { CardView } from '../../components/card-view';

import Animated from 'react-native-reanimated';
import { colors, strings } from '../../resource';

const contentContainerStyleAndroid = (itemCount: number) => {
  const deviceHeight: number = Dimensions.get('window').height;
  const scrollViewContentHeightAdjustment = itemCount * 60 + deviceHeight;
  const contentContainerStyle = {
    flexGrow: 1,
    height: scrollViewContentHeightAdjustment,
  };
  const style = Platform.OS == 'ios' ? {} : contentContainerStyle;
  return style;
};

const calculateTranslateY = (
  index: number,
  scrollOffset: number,
  stepOffset = 60,
) => {
  const initialOffset = index * stepOffset;
  let translateY = initialOffset;
  if (scrollOffset > 0) {
    translateY = translateY - scrollOffset > 0 ? translateY - scrollOffset : 0;
  } else {
    const newTranslateY = initialOffset - scrollOffset * index;
    const verticalLimit = initialOffset * 1.8;
    translateY = newTranslateY < verticalLimit ? newTranslateY : verticalLimit;
  }

  return translateY;
};

const CardsListScreen = (props: CardsListScreenProps) => {
  const { navigation } = props;
  const STEP_OFFSET = 60;
  const [cardData, setCardData] = useState<Card[]>([]);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    // Import card data
    fetchCards().then((cards: Card[]) => setCardData(cards));
  }, []);

  const contentContainerStyle = contentContainerStyleAndroid(cardData.length);

  const renderItem = (data: CardRenderItemParams) => {
    const { index, item } = data;

    // Calculating translationY
    const translateY = calculateTranslateY(index, scrollOffset);

    const handleOnPressCardView = (card: Card) => {
      navigation.navigate('CardDetailsScreen', { card: card });
    };

    return (
      <View
        style={[
          styles.flatListItem,
          { transform: [{ translateY: translateY }] },
        ]}>
        <Pressable onPress={() => handleOnPressCardView(item)}>
          <CardView card={item} />
        </Pressable>
      </View>
    );
  };

  const renderListHeaderView = () => {
    return (
      <>
        <Animated.View style={[styles.flatListHeaderContainer]}>
          <Text style={styles.flatListHeaderTitle}>{strings.wallet}</Text>
        </Animated.View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        ListHeaderComponent={renderListHeaderView}
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.id}`}
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
    backgroundColor: colors.black,
  },
  flatListItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  flatListHeaderContainer: {
    padding: 10,
    height: 100,
    backgroundColor: colors.black,
    justifyContent: 'flex-end',
  },
  flatListHeaderTitle: {
    color: colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export { CardsListScreen };
