import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  Dimensions,
  ListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Card,
  CardRenderItemParams,
  CardsListScreenProps,
} from './card-list-type';

import { useEffect, useState } from 'react';
import Animated, {
  AnimatedStyleProp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { colors, strings } from '../../resource';
import { CardView } from '../../components/card-view';
import { fetchCards } from '../../service/card-service/card-service';
import * as NavigationServie from '../../navigation/navigation-service';
import { CardListRenderItem } from './list-card-item';

// To calculate the scrollview height for android
const contentContainerStyleAndroid = (itemCount: number) => {
  const deviceHeight: number = Dimensions.get('window').height;
  const scrollViewContentHeightAdjustment = itemCount * 28 + deviceHeight;
  const contentContainerStyle = {
    flexGrow: 1,
    height: scrollViewContentHeightAdjustment,
  };
  const style = Platform.OS == 'ios' ? {} : contentContainerStyle;
  return style;
};

const CardsListScreen = (props: CardsListScreenProps) => {
  const { navigation } = props;
  const [cardData, setCardData] = useState<Card[]>([]);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    // Import card data
    fetchCards().then((cards: Card[]) => setCardData(cards));
  }, []);
  const contentContainerStyle = contentContainerStyleAndroid(cardData.length);

  const sharedValue = useSharedValue(0);

  const renderListHeaderView = () => {
    return (
      <>
        <Animated.View style={[styles.flatListHeaderContainer]}>
          <Text style={styles.flatListHeaderTitle}>{strings.wallet}</Text>
        </Animated.View>
      </>
    );
  };

  const handleOnPressCardView = (card: Card) => {
    NavigationServie.navigateToCardDetailScreen({ card: card });
  };

  const onScrollFlatList = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let value = event.nativeEvent.contentOffset.y;
    sharedValue.value = value;
  }

  const renderItem: ListRenderItem<Card> = (data: CardRenderItemParams) => (
    <CardListRenderItem
      onPress={handleOnPressCardView}
      sharedValue={sharedValue}
      data={data}
    />
  )

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        ListHeaderComponent={renderListHeaderView}
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.id}`}
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollFlatList}
        scrollEventThrottle={16}
        initialNumToRender={10}
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
    height: 120,
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
