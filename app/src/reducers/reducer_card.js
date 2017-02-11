import {SET_CARD_TITLE, REMOVE_CARD_TITLE} from '../constants';

const INITIAL_STATE = {
  text: null,
  id: Math.random()
}
/*
const removeById = (state = [], id) => {
  const cards = state.filter(cards => cards.id !== id);
  console.log('new reduced cards', cards);
  return cards;
}
*/

export default function(state = INITIAL_STATE, action) {
//  let error;
  switch (action.type) {
    case SET_CARD_TITLE:
      //cards = [...state,card(action)];
      return {...state, text: 'ss', id: Math.random()};
    case REMOVE_CARD_TITLE:
      //cards = removeById(state, action.id);
      return {...state, INITIAL_STATE};
    default:
      return state;
  }
}
/*
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
*/
