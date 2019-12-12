import axios from 'axios'

import * as types from './actionTypes'

export const getPotter = () => dispatch => {
  axios.get(`https://www.potterapi.com/v1/characters/?key=$2a$10$Hf2ROkKenXHcTM1KED693O3xITjOmlhsvYCh7iM1v2LfmeEk27uaC`)
    .then(response => {
      const potter = response.data;
      debugger
      dispatch({
        type: types.GET_POTTER,
        payload: potter,
      })
    })
    .catch(error => {
      debugger
      alert(error.message)
    })
}