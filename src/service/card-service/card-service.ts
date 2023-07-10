import { Card } from '../../screens/cards-list/card-list-type';
import mockCards from './mock.json';

const fetchCards = () => {
  return Promise.resolve<Card[]>(mockCards.data);
};

export { fetchCards };
