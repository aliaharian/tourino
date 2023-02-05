import axios from 'axios'
import { BASE_URL } from '../../src/constant';
import { errorSnackbar } from '../user';


export const GET_AVAILABLE_CITIES = "getAvailableCities";

export const getAvailableCities = () => async (dispatch, getState) => {
  const state = getState();
  console.log('getState', state);
  try {
    const response = await axios.get("/cities/available", {},
    //  {
    //   headers: { Authorization: state.user.user.uuid },
    // }
    );
    dispatch({ type: GET_AVAILABLE_CITIES, payload: response.data });

  } catch (e) {
    console.log(e.response)
    dispatch(errorSnackbar(e));

  }
};

