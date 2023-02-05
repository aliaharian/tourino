import {
  GET_HOTEL_TYPES,
  GET_HOTELS_LIST
} from "./Actions"


const defaultState = {
  hotelTypes: null,
  featuredHotelsList:null
}

const hotelReducer = (state = defaultState, action) => {
  switch (action.type) {

    case GET_HOTEL_TYPES:
      return {
        ...state,
        hotelTypes: action.payload
      }
    case GET_HOTELS_LIST:
      return {
        ...state,
        featuredHotelsList: action.payload
      }

    default:
      return state
  }
}


export default hotelReducer;