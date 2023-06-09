import {
  GET_AVAILABLE_CITIES
} from "./Actions"


const defaultState = {
  availableCities: null,
}

const areaReducer = (state = defaultState, action) => {
  switch (action.type) {

    case GET_AVAILABLE_CITIES:
      return {
        ...state,
        availableCities: action.payload
      }

    default:
      return state
  }
}

export default areaReducer;