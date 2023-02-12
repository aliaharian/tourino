import { BASE_URL } from "../../src/constant";
import axios from "axios";
import Cookies from "js-cookie";

export const ENQUEUE_SNACKBAR = "enqueueSnackbar";
export const REMOVE_SNACKBAR = "removeSnackbar";
export const CODE_SEND = "codeSend";
export const CODE_CALL = "codeCall";
export const START_LOADING = "startLoading";
export const END_LOADING = "endLoading";
export const AUTH_STEP = "authStep";
export const AUTH_OPEN = "authOpen";
export const SET_ERROR = "setError";
export const CODE_VERIFY_LOGIN = "codeVerifyLogin";
export const USER_PROFILE = "userProfile";
export const LOGOUT = "logout";
export const SET_LOADING = "setLoading";
export const SET_TOKEN = "setToken";
export const LOAD_SUCCESS = "userLoadSuccess";
//openMenu
export const OPEN_MENU = "openMenu";
//SET_USER_INFO
export const SET_USER_INFO = "setUserInfo";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

export const enqueueSnackbar = (notification) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification,
  },
});

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});
export const loadUser =
  (data, gift = true) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: START_FETCH });
      if (data) {
        // dispatch({ type: LOAD_SUCCESS, payload: { user: data } });
        localStorage.setItem("isAuth", "true");
      } else {
        let url = gift ? "/user/profile" : "/user/profile?gift=false";
        const response = await axios.get(url);
        dispatch({ type: LOAD_SUCCESS, payload: { user: response.data } });
        if (
          response.data.roleTypeId === 2861 &&
          response.data.inCartable === false
        ) {
          const response = await axios.get("/advisor/profile");
          dispatch({
            type: LOAD_ADVISER_SUCCESS,
            payload: { adviser: response.data },
          });
        }
        localStorage.setItem("isAuth", "true");
      }
    } catch (e) {
      dispatch(errorSnackbar(e));
      // dispatch(userUpdateField({ prop: "load", value: false }));
      // dispatch(userLogout());
    }
  };

export const setLoading = (key) => ({
  type: SET_LOADING,
  key,
});
export const setToken = (key) => ({
  type: SET_TOKEN,
  key,
});

export const errorSnackbar = (e) => (dispatch) => {
  if (e.response) {
    const msg = e.response.data.messages || e.response.data.message;

    if (msg) {
      if (Array.isArray(msg)) {
        msg.forEach((element) => {
          dispatch(
            enqueueSnackbar({
              message: element,
            })
          );
        });
      } else {
        dispatch(
          enqueueSnackbar({
            message: msg,
          })
        );
      }
    } else {
      dispatch(
        enqueueSnackbar({
          message: "خطا ! یه مشکلی پیش اومده",
        })
      );
    }
  }
  console.log(e);
};

export const setAuthStep = (e) => (dispatch) => {
  dispatch({
    type: AUTH_STEP,
    payload: e,
  });
};

export const setAuthOpen = (e) => (dispatch) => {
  dispatch({
    type: AUTH_OPEN,
    payload: e,
  });
};

export const codeSend = (phone) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post(BASE_URL + "/sendOtp", {
      mobile: phone,
    });
    dispatch({
      type: CODE_SEND,
      payload: response.data,
    });
    dispatch({ type: END_LOADING });
    dispatch(setAuthStep("enterCode"));
  } catch (e) {
    dispatch(errorSnackbar(e));
    dispatch({ type: END_LOADING });
    dispatch({ type: SET_ERROR });
  }
};

export const codeCall = (phone) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post(BASE_URL + "/user/codeCall?check=true", {
      username: phone,
      uxId: 2801,
      roleId: 2891,
    });
    dispatch({
      type: CODE_CALL,
      payload: response.data,
    });
    dispatch({ type: END_LOADING });
  } catch (e) {
    dispatch(errorSnackbar(e));
    dispatch({ type: END_LOADING });
    dispatch({ type: SET_ERROR });
  }
};

export const codeVerifyLogin = (phone, code) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post(BASE_URL + "/verifyOtp", {
      mobile: phone,
      code: code,
    });
    dispatch({
      type: CODE_VERIFY_LOGIN,
      payload: response.data,
    });
    dispatch({ type: END_LOADING });

    //set token
    localStorage.setItem("isAuth", true);
    localStorage.setItem("token", response.data.token);
    Cookies.set("token", response.data.token);
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + response.data.token;

    if (response.data.login === true) {
      dispatch(setAuthOpen(false));

      dispatch(setAuthStep("enterNumber"));
      dispatch(getUserProfile());
    } else {
      dispatch(setAuthStep("enterInfo"));
    }
  } catch (e) {
    dispatch(errorSnackbar(e));
    dispatch({ type: END_LOADING });
    dispatch({ type: SET_ERROR });
  }
};

export const getUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(BASE_URL + "/userInfo");
    dispatch({
      type: USER_PROFILE,
      payload: response.data,
    });
    dispatch({ type: END_LOADING });
  } catch (e) {
    dispatch(errorSnackbar(e));
    dispatch({ type: END_LOADING });
    localStorage.removeItem("isAuth");
    dispatch(logout());
  }
};

//set user info
export const setUserInfo = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post(BASE_URL + "/userInfo", data);
    dispatch({
      type: SET_USER_INFO,
      payload: response.data,
    });
    dispatch({ type: END_LOADING });
    dispatch(setAuthOpen(false));
    // dispatch(getUserProfile());
  } catch (e) {
    dispatch(errorSnackbar(e));
    dispatch({ type: END_LOADING });
    dispatch({ type: SET_ERROR });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });
    // const response = await axios.post(BASE_URL + "/user/logout");
    dispatch({
      type: LOGOUT,
      payload: "",
    });
    dispatch({ type: END_LOADING });
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    Cookies.remove("token");
  } catch (e) {
    dispatch(errorSnackbar(e));
    dispatch({ type: END_LOADING });
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    Cookies.remove("token");
  }
};
export const openMenu = (open) => async (dispatch, getState) => {
  dispatch({
    type: OPEN_MENU,
    payload: open,
  });
};
