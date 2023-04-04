import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Head from "next/head";

import { SnackbarProvider } from "notistack";
import RTL from "../src/components/RTL/RTL";
import theme from "../src/Theme/Theme";
import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { wrapper } from "../redux/store";
import axios from "axios";
import { BASE_URL } from "../src/constant";
import { LOAD_SUCCESS, setMap, SET_TOKEN, USER_PROFILE } from "../redux/user";
import Cookies from "js-cookie";
import { Cookies as CookiesSsr } from "cookies";
import { setRTLTextPlugin } from "!mapbox-gl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + Cookies.get("token");

  axios.defaults.withCredentials = false;

  const Dispatch = useDispatch();
  const mapset = useSelector(state=>state.user.map)
  console.log('designed and developed by https://www.linkedin.com/in/aliaharian/')
  useEffect(() => {
    if (typeof window !== "undefined" && !mapset) {
      setRTLTextPlugin(
        "https://www.parsimap.com/scripts/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js"
      );
      Dispatch(setMap(true));
    }
  },[]);
  // console.log = ()=>{

  // }

  return (
    <SnackbarProvider maxSnack={3}>
      <React.Fragment>
        <Head>
          <title>گردشگری</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          {/* <link id="favicon" rel="shortcut icon" href="/public/favicon.ico"></link> */}
        </Head>
        <ThemeProvider theme={theme}>
          <RTL>
            <CssBaseline />
            <Component {...pageProps} />
          </RTL>
        </ThemeProvider>
      </React.Fragment>
    </SnackbarProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  // if (ctx.req) {
  const { user } = ctx.store.getState();

  //get token from cookies string
  try {
    if (ctx.req) {
      if (ctx.req.headers.cookie) {
        const cookies = ctx.req.headers.cookie;

        let token = cookies
          ?.split(";")
          .find((c) => c.trim().startsWith("token="));
        //remove token= from string
        if (token) {
          token = token.split("=")[1];
          ctx.store.dispatch({ type: SET_TOKEN, payload: { token } });

          const response = await axios.get(BASE_URL + "/userInfo", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          ctx.store.dispatch({
            type: USER_PROFILE,
            payload: response.data,
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }

  // if (!user.user?.id) {
  //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  //   try {
  //     const res = await axios.post(
  //       `${BASE_URL}/users/public/login`,
  //       {
  //         mobile: "09307473703",
  //         password: "Ali@77570328",
  //       },
  //       {
  //         withCredentials: true,
  //         credentials: "include",
  //       }
  //     );
  //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", res);

  //     const data = await res.data;

  //     ctx.store.dispatch({ type: LOAD_SUCCESS, payload: { user: data } });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
};

export default wrapper.withRedux(MyApp);
