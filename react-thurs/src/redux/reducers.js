import * as types from '../redux/actionTypes'

const initialPotter = [
  {
    "_id": "5a0fa4daae5bc100213c232e",
    "name": "Hannah Abbott",
    "role": "student",
    "house": "Hufflepuff",
    "school": "Hogwarts School of Witchcraft and Wizardry",
    "__v": 0,
    "ministryOfMagic": false,
    "orderOfThePhoenix": false,
    "dumbledoresArmy": true,
    "deathEater": false,
    "bloodStatus": "half-blood",
    "species": "human"
  },
  {
    "_id": "5a0fa5deae5bc100213c2330",
    "name": "Ludo Bagman",
    "role": "Head, Department of Magical Games and Sports",
    "__v": 0,
    "ministryOfMagic": true,
    "orderOfThePhoenix": false,
    "dumbledoresArmy": false,
    "deathEater": false,
    "bloodStatus": "unknown",
    "species": "human"
  },
]

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