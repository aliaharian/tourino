import { result } from "lodash";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import HotelDetail from "../../../src/components/HotelDetail/HotelDetail";
import Layout from "../../../src/components/Layout/Layout";
import SearchTour from "../../../src/components/SearchTour/SearchTour";
import { BASE_URL } from "../../../src/constant";

export default function SearchHotel({ dest, origin ,hotelInfo }) {
    const Router = useRouter()
    let query = Router.query

    return (
        <div>
            <Head>
                <title>
                    جستجوی اتاق های هتل {hotelInfo.name}  </title>
            </Head>
            <Layout dest={dest} origin={origin} error={origin.errorCode || dest.errorCode ? true : false}>
                <HotelDetail query={query} origin={origin} dest={dest} hotel={hotelInfo}/>
            </Layout>
        </div>
    )

}

export async function getServerSideProps({ query }) {

    const result = await fetch(`${BASE_URL}/area/view?id=${query.dest}`, {
        credentials: "include",
        // headers: { cookie: req.headers.cookie },
    });
    const dest = await result.json();


    const result2 = await fetch(`${BASE_URL}/area/view?id=${query.origin}`, {
        credentials: "include",
        // headers: { cookie: req.headers.cookie },
    });
    const origin = await result2.json();

    const result3 = await fetch(`${BASE_URL}/hotel/view?id=${query.hotel_id}`, {
        credentials: "include",
        // headers: { cookie: req.headers.cookie },
    });
    const hotelInfo = await result3.json();

    return {
        props: {
            dest,
            origin,
            hotelInfo
        }
    }
}
