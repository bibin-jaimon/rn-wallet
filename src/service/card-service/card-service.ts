import { Card } from '../../screens/cards-list/card-list-type';
import mockCards from './mock.json';

/**
 * A method to fetch cards data
 * @returns cards
 */
const fetchCards = () => {
  return Promise.resolve<Card[]>(mockCards.data);
};

export { fetchCards };
