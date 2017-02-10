import {SET_CARD_TITLE, REMOVE_CARD_TITLE} from '../constants';

const card = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const cards = state.filter(cards => cards.id !== id);
  console.log('new reduced cards', cards);
  return cards;
}

const cards = (state = [], action) => {
  let cards = null;
  switch (action.type) {
    case SET_CARD_TITLE:
      cards = [...state,card(action)];
      console.log('cards as state', cards);
      return cards;
      break;
    case REMOVE_CARD_TITLE:
      cards = removeById(state, action.id);
      return cards;
    default:
      return state;
  }
}

export default cards;
