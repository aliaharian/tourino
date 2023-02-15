import { wrapper } from "../../redux/store";
import Layout from "../../src/components/Layout/Layout";
import Head from "next/head";
import Hotel from "../../src/components/hotel/Hotel";
import { BASE_URL } from "../../src/constant";
import axios from "axios";

export default function HotelInfo({ loading, hotel }) {

  return (
    <div>
      <Head>
        <title>جزییات هتل</title>
      </Head>
      <Layout
        // dest={hotelsSuggest.to_city}
        // origin={hotelsSuggest.from_city}
        error={false}
      >
        <Hotel hotel={hotel.hotel} />
      </Layout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, query }) => {
    const { user } = store.getState();
    let loading = true;

    // if (req) {
    //   if (req.headers) {
    //     const cookies = req.headers.cookie;
    //     let token = cookies
    //       ?.split(";")
    //       .find((c) => c.trim().startsWith("token="));
    //     if (token) {
    //       token = token.split("=")[1];
    //       //redirect to / if !user
    //       if (!user.userProfile) {
    //         res.writeHead(302, { Location: "/" });
    //         res.end();
    //       }
    //     } else {
    //       res.writeHead(302, { Location: "/" });
    //       res.end();
    //     }
    //   }
    // }

    const hotel = await axios.get(`${BASE_URL}/hotels/${query.id}`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });

    loading = false;

    return {
      props: {
        loading: loading,
        hotel: hotel.data,
      },
    };
  }
);
