import axios from 'axios';
import { ADD_ATHLETE, GET_ATHLETES } from './types';

export const getAthletes = () => async dispatch => {
  const res = await axios.get('/api/athletes');

  dispatch({
    type: GET_ATHLETES,
    payload: res.data,
  });
};

export const addAthlete = athleteData => async dispatch => {
  const res = await axios.post('/api/athletes', athleteData);

  dispatch({
    type: ADD_ATHLETE,
    payload: res.data,
  });
};
