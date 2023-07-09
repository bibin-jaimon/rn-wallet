export interface CardsListScreenProps {}

export interface CardPropType {
  card: Card;
}

export interface Card {
  id: number;
  name: string;
  bgColor: string;
}

export interface CardRenderItemParams {
  item: Card;
  index: number;
}
