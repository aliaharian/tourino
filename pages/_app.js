import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Head from "next/head";

import { SnackbarProvider } from 'notistack'
import RTL from "../src/components/RTL/RTL";
import theme from "../src/Theme/Theme";
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { wrapper } from "../redux/store";
import axios from 'axios';
import { BASE_URL } from "../src/constant";
import Cookies from 'cookies'
import { LOAD_SUCCESS, SET_TOKEN } from "../redux/user";


function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = BASE_URL;
  // axios.defaults.headers.post["Content-Type"] = "application/json";
  // axios.defaults.headers.common['Authorization'] = 'aaabbb';

  axios.defaults.withCredentials = false;
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
  )
}

MyApp.getInitialProps = async ({ ctx }) => {


  // if (ctx.req) {
  const { user } = ctx.store.getState();
  console.log('userrrrrruserrrrrruserrrrrruserrrrrruserrrrrr', user)
  if (!user.user?.id) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    try {
      const res = await axios.post(`${BASE_URL}/users/public/login`, {
        mobile: "09307473703",
        password: "Ali@77570328"
      }, {
        withCredentials: true,
        credentials: "include",
      });
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',res)


      const data = await res.data;

      ctx.store.dispatch({ type: LOAD_SUCCESS, payload: { user: data } });


    } catch (err) {
      console.log(err);
    }



  };
}

export default wrapper.withRedux((MyApp));

