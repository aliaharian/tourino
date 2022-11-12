import { HOTEL_TYPE } from "../../src/constant";
import { errorSnackbar } from "../user";
import axios from 'axios'
export const GET_HOTEL_TYPES = "getHotelTypes";
export const GET_HOTELS_LIST = "getHotelsList";

export const getHotelTypes = () => async (dispatch, getState) => {
  try {
    // dispatch({ type: START_FETCH });
    const state = getState()
    const response = await axios.post("/hotelTypes/all",{},{
      headers: { Authorization: state.user.authorization },
    });
    dispatch({
      type: GET_HOTEL_TYPES,
      payload: response.data,
    });

  } catch (e) {
    dispatch(errorSnackbar(e));

  }
};
export const getHotelsList = (server = false, payload = null) => async (dispatch, getState) => {
  const state = getState();
  if (server) {

    dispatch({
      type: GET_HOTELS_LIST,
      payload: payload
    });
  }
  else {
    try {
      const response = await axios.post("/hotels/page", {
        "pageNumber": 0,
        "pageSize": 5,
      },{
        headers: { Authorization: state.user.authorization },
      });
      dispatch({
        type: GET_HOTELS_LIST,
        payload: response.data,
      });

    } catch (e) {
      dispatch(errorSnackbar(e));

    }
  }
};