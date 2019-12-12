import * as types from '../redux/actionTypes'

const initialPotter = [];
export function potterReducer(potter = initialPotter, action){
  switch (action.type) {
    case types.GET_POTTER:
      return {
        ...potter,
        payload: action.payload,
      };
    default:
      return potter;
  }
}