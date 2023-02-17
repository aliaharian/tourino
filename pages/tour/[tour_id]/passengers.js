import axios from "axios";
import { result } from "lodash";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { wrapper } from "../../../redux/store";
import HotelDetail from "../../../src/components/HotelDetail/HotelDetail";
import Layout from "../../../src/components/Layout/Layout";
import SearchTour from "../../../src/components/SearchTour/SearchTour";
import TourInfo from "../../../src/components/tourInfo/TourInfo";
import { BASE_URL } from "../../../src/constant";

export default function TourPassengers({ tour, passengers }) {
  const Router = useRouter();
  let query = Router.query;
  console.log("tour", tour);
  return (
    <div>
      <Head>
        <title>ثبت مسافرین تور </title>
      </Head>
      <Layout>
        <TourInfo tour={tour} userPassengers={passengers} />
        {/* <HotelDetail
          query={query}
          dest={info.to_city}
          info={info}
          origin={info.from_city}
          hotel={hotel.hotel}
          tourServices={tourServices}
          departureVehicles={departureVehicles}
          arrivalVehicles={arrivalVehicles}
        /> */}
      </Layout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, query }) => {
    const { user } = store.getState();
    let token;
    if (req) {
      if (req.headers) {
        const cookies = req.headers.cookie;
        token = cookies?.split(";").find((c) => c.trim().startsWith("token="));
        if (token) {
          token = token.split("=")[1];
          //redirect to / if !user
          if (!user.userProfile) {
            res.writeHead(302, { Location: "/" });
            res.end();
          }
        } else {
          res.writeHead(302, { Location: "/" });
          res.end();
        }
      }
    }

    // try {
    const tour = await axios.get(`${BASE_URL}/tours/${query.tour_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const passengers = await axios.get(`${BASE_URL}/user/passengers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (tour.data.tour.passengers.length > 0) {
      res.writeHead(302, { Location: "/profile/tours" });
      res.end();
    }

    return {
      props: {
        tour: tour.data,
        passengers: passengers.data,
      },
    };
    // } catch (err) {
    //   //redirect to home page
    //   res.writeHead(302, { Location: "/" });
    //   res.end();
    // }
  }
);
