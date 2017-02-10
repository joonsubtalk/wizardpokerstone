import { SET_CARD_TITLE, REMOVE_CARD_TITLE } from '../constants';

export const setCardTitle = (text) => {
  const action = {
    type: SET_CARD_TITLE,
    text
  }
  console.log('action in setCardTitle', action);
  return action;
}

export const removeCardTitle = (id) => {
  const action = {
    type: REMOVE_CARD_TITLE,
    id
  }
  console.log('action in removeCardTitle', action);
  return action;
}
