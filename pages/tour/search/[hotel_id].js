import axios from "axios";
import { result } from "lodash";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import HotelDetail from "../../../src/components/HotelDetail/HotelDetail";
import Layout from "../../../src/components/Layout/Layout";
import SearchTour from "../../../src/components/SearchTour/SearchTour";
import { BASE_URL } from "../../../src/constant";

export default function SearchHotel({
  hotel,
  departureVehicles,
  arrivalVehicles,
  roomsParam,
  info,
  tourServices,
}) {
  const Router = useRouter();
  let query = Router.query;
  console.log(hotel.hotel);
  console.log(departureVehicles);
  console.log(arrivalVehicles);
  console.log("calcPrice", info);
  console.log("tourServices", tourServices);
  return (
    <div>
      <Head>
        <title>جستجوی اتاق های هتل {hotel.hotel.name} </title>
      </Head>
      <Layout dest={info.to_city} origin={info.from_city} error={false}>
        <HotelDetail
          query={query}
          dest={info.to_city}
          info={info}
          origin={info.from_city}
          hotel={hotel.hotel}
          tourServices={tourServices}
          departureVehicles={departureVehicles}
          arrivalVehicles={arrivalVehicles}
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query , req , res}) {
  let roomsParam = "";
  let tmp = query.rooms;
  let roomsArray = [];
  let adultsTmp = 0;
  let infantsTmp = 0;

  tmp = tmp.split(",");
  tmp.map((item) => {
    let singleRoom = item.split("_");
    adultsTmp =
      parseInt(adultsTmp) + parseInt(singleRoom[0]) + parseInt(singleRoom[1]);
    infantsTmp = parseInt(infantsTmp) + parseInt(singleRoom[2]);

    roomsArray.push({
      adult: singleRoom[0],
      teen: singleRoom[1],
      child: singleRoom[2],
      infant: singleRoom[3],
    });
  });

  roomsArray.map((room) => {
    roomsParam += room.adult;
    for (let i = 0; i < room.child; i++) {
      roomsParam += ",5";
    }
    for (let i = 0; i < room.infant; i++) {
      roomsParam += ",0";
    }
    roomsParam += "_";
  });
  roomsParam = roomsParam.substring(0, roomsParam.length - 1);
  // try {
    const hotel = await axios.get(`${BASE_URL}/hotels/${query.hotel_id}`);

    let departure_params = {
      adult: roomsArray[0]?.adult,
      kids: roomsArray[0]?.child,
      teens: roomsArray[0]?.teen,
      infants: roomsArray[0]?.infant,
      date: query.startDate * 1000,
      from_city_id: query.origin,
      to_city_id: query.dest,
      vehicle_type: query.departure_type,
      order: "price",
      type: "departure",
      prev_departure_vehicle_id: query.curr_departure_cehicle,
      prev_arrival_vehicle_id: query.curr_arrival_cehicle,
      hotel_id: query.hotel_id,
    };

    const departureVehicles = await axios.post(
      `${BASE_URL}/tours/suggest/vehicle`,
      departure_params
    );

    let arrival_params = {
      adult: roomsArray[0]?.adult,
      kids: roomsArray[0]?.child,
      teens: roomsArray[0]?.teen,
      infants: roomsArray[0]?.infant,
      date: query.endDate * 1000,
      from_city_id: query.dest,
      to_city_id: query.origin,
      vehicle_type: query.arrival_type,
      order: "price",
      type: "arrival",
      prev_departure_vehicle_id: query.curr_departure_cehicle,
      prev_arrival_vehicle_id: query.curr_arrival_cehicle,
      hotel_id: query.hotel_id,
    };

    const arrivalVehicles = await axios.post(
      `${BASE_URL}/tours/suggest/vehicle`,
      arrival_params
    );

    let calcParams = {
      adult: roomsArray[0]?.adult,
      kids: roomsArray[0]?.child,
      teens: roomsArray[0]?.teen,
      infants: roomsArray[0]?.infant,
      arrival_vehicle_id: query.curr_arrival_cehicle,
      departure_vehicle_id: query.curr_departure_cehicle,
      hotel_id: query.hotel_id,
    };

    const calcPrice = await axios.post(
      `${BASE_URL}/tours/calculatePrice`,
      calcParams
    );

    const tourServices = await axios.get(`${BASE_URL}/tours/services`);

    return {
      props: {
        hotel: hotel.data,
        departureVehicles: departureVehicles.data,
        arrivalVehicles: arrivalVehicles.data,
        roomsParam: roomsParam,
        info: calcPrice.data.calculateable,
        tourServices: tourServices.data,
      },
    };
  // } catch (err) {
  //   //redirect to home page
  //   res.writeHead(302, { Location: "/" });
  //   res.end();
  // }
}
