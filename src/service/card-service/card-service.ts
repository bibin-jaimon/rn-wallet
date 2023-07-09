import mockCards from './mock.json';

const fetchCards = () => {
  return Promise.resolve(mockCards.data) ;
};

export { fetchCards };
