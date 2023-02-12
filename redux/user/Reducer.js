import {
  AUTH_STEP,
  CODE_CALL,
  CODE_SEND,
  END_LOADING,
  ENQUEUE_SNACKBAR,
  REMOVE_SNACKBAR,
  START_LOADING,
  AUTH_OPEN,
  SET_ERROR,
  CODE_VERIFY_LOGIN,
  USER_PROFILE,
  LOGOUT,
  SET_LOADING,
  SET_TOKEN,
  LOAD_SUCCESS,
  SET_USER_INFO,
  OPEN_MENU,
} from "./Actions";

const defaultState = {
  notifications: [],
  ssoLoading: false,
  authStep: "enterNumber",
  authOpen: false,
  error: false,
  userProfile: null,
  searchLoading: false,
  authorization: null,
  load: true,
  user: null,
  openMenu: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        load: false,
        user: action.payload.user,
      };
    case START_LOADING:
      return {
        ...state,
        ssoLoading: true,
        error: false,
      };
    case END_LOADING:
      return {
        ...state,
        ssoLoading: false,
      };
    case SET_TOKEN:
      console.log("set", action.payload);
      return {
        ...state,
        authorization: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case CODE_VERIFY_LOGIN:
      return {
        ...state,
      };
    case AUTH_STEP:
      return {
        ...state,
        authStep: action.payload,
        error: false,
      };
    case AUTH_OPEN:
      return {
        ...state,
        authOpen: action.payload,
        error: false,
      };
    case CODE_SEND:
      return {
        ...state,
      };
    case CODE_CALL:
      return {
        ...state,
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userProfile: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userProfile: null,
      };
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification,
          },
        ],
      };

    case REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key
        ),
      };

    case SET_LOADING:
      return {
        ...state,
        searchLoading: action.key,
      };
    //openMenu
    case OPEN_MENU:
      return {
        ...state,
        openMenu: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
