import { result } from "lodash";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Layout from "../../src/components/Layout/Layout";
import SearchTour from "../../src/components/SearchTour/SearchTour";
import { BASE_URL } from "../../src/constant";
import axios from "axios";
export default function Search({ loading, hotelsSuggest, roomsParam }) {
  const Router = useRouter();
  let query = Router.query;

  console.log("adlvkjbndviodbvkdjsbvdksjavbdsvb", hotelsSuggest);
  return (
    <div>
      <Head>
        <title>جستجوی تور های {hotelsSuggest.to_city.title} </title>
      </Head>
      <Layout
        dest={hotelsSuggest.from_city}
        origin={hotelsSuggest.to_city}
        error={false}
      >
        <SearchTour
          roomsParam={roomsParam}
          hotelsSuggest={hotelsSuggest}
          loadingParam={loading}
          query={query}
          // startBusSuggest={startBusSuggest}
          // endBusSuggest={endBusSuggest}
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  let loading = true;

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

  console.log("roomsParamroomsParamroomsParamroomsParam", roomsParam);
  console.log("roomsParamroomsParamroomsParamroomsParam", roomsArray);

  console.log("dvdvvd", {
    adult: roomsArray[0]?.adult,
    kids: roomsArray[0]?.child,
    teens: roomsArray[0]?.teen,
    infants: roomsArray[0]?.infant,
    from_date: query.startDate,
    to_date: query.endDate,
    from_city_id: query.origin,
    to_city_id: query.dest,
    departure_vehicle_type: query.transport,
    arrival_vehicle_type: query.transport,
  });
  const hotelsSuggest = await axios.post(`${BASE_URL}/tours/suggest/hotel`, {
    adult: roomsArray[0]?.adult,
    kids: roomsArray[0]?.child,
    teens: roomsArray[0]?.teen,
    infants: roomsArray[0]?.infant,
    from_date: query.startDate*1000,
    to_date: query.endDate*1000,
    from_city_id: query.origin,
    to_city_id: query.dest,
    departure_vehicle_type: query.transport,
    arrival_vehicle_type: query.transport,
  });

  loading = false;

  return {
    props: {
      hotelsSuggest: hotelsSuggest.data,
      roomsParam: roomsParam,
      loading: loading,
    },
  };
}
