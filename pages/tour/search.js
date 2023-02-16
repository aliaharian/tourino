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
        dest={hotelsSuggest.to_city}
        origin={hotelsSuggest.from_city}
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

  let minPrice = undefined;
  let maxPrice = undefined;
  if (query.price) {
    //split min and max price from query price by ,
    let price = query.price.split(",");
    minPrice = price[0];
    maxPrice = price[1];
  }


  console.log("neeee", {
    adult: roomsArray[0]?.adult,
    kids: roomsArray[0]?.child,
    teens: roomsArray[0]?.teen,
    infants: roomsArray[0]?.infant,
    from_date: query.startDate * 1000,
    to_date: query.endDate * 1000,
    from_city_id: query.origin,
    to_city_id: query.dest,
    departure_vehicle_type: query.departure_type,
    arrival_vehicle_type: query.arrival_type,
    hotel_stars: query.star || null,
    min_price: minPrice ? minPrice : null,
    max_price: maxPrice ? maxPrice : null,
    order: query.sort || null,
  });
  let params = {
    adult: roomsArray[0]?.adult,
    kids: roomsArray[0]?.child,
    teens: roomsArray[0]?.teen,
    infants: roomsArray[0]?.infant,
    from_date: query.startDate * 1000,
    to_date: query.endDate * 1000,
    from_city_id: query.origin,
    to_city_id: query.dest,
    departure_vehicle_type: query.departure_type,
    arrival_vehicle_type: query.arrival_type,
  };
  if (query.star) {
    params.hotel_stars = query.star;
  }
  //rate
  if (query.rate) {
    params.hotel_rate = query.rate;
  }
  if (minPrice) {
    params.min_price = minPrice;
  }
  if (maxPrice) {
    params.max_price = maxPrice;
  }
  if (query.sort) {
    params.order = query.sort;
  }
  const hotelsSuggest = await axios.post(
    `${BASE_URL}/tours/suggest/hotel`,
    params
  );

  loading = false;

  return {
    props: {
      hotelsSuggest: hotelsSuggest.data,
      roomsParam: roomsParam,
      loading: loading,
    },
  };
}
