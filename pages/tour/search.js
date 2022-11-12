import { result } from "lodash";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Layout from "../../src/components/Layout/Layout";
import SearchTour from "../../src/components/SearchTour/SearchTour";
import { BASE_URL } from "../../src/constant";
import axios from 'axios'
export default function Search({ dest, origin, startBusSuggest, endBusSuggest, loading, hotelsSuggest, roomsParam }) {
    const Router = useRouter()
    let query = Router.query

    return (
        <div>
            <Head>
                <title>
                    جستجوی تور های {dest.name}  </title>
            </Head>
            <Layout dest={dest} origin={origin} error={origin.errorCode || dest.errorCode ? true : false}>
                <SearchTour roomsParam={roomsParam} hotelsSuggest={hotelsSuggest} loadingParam={loading} query={query} startBusSuggest={startBusSuggest} endBusSuggest={endBusSuggest} />
            </Layout>
        </div>
    )

}

export async function getServerSideProps({ query }) {

    let loading = true;
    // const dest = await axios.get(`${BASE_URL}/areas/${query.dest}`);


    const response = await fetch(`${BASE_URL}/areas/${query.dest}`, {
        withCredentials: false,
        // headers: { cookie: req.headers.cookie },
    });
    const dest = await response.json();


    // const origin = await axios.get(`${BASE_URL}/areas/${query.origin}`);

    const response2 = await fetch(`${BASE_URL}/areas/${query.origin}`, {
        withCredentials: false,
        // headers: { cookie: req.headers.cookie },
    });
    const origin = await response2.json();


    let roomsParam = ''
    let tmp = query.rooms
    let roomsArray = []
    let adultsTmp = 0
    let infantsTmp = 0

    tmp = tmp.split(',')
    tmp.map((item) => {
        let singleRoom = item.split('_')
        adultsTmp = parseInt(adultsTmp) + parseInt(singleRoom[0]) + parseInt(singleRoom[1])
        infantsTmp = parseInt(infantsTmp) + parseInt(singleRoom[2])

        roomsArray.push({
            adult: singleRoom[0],
            child: singleRoom[1],
            infant: singleRoom[2]
        })
    })

    roomsArray.map((room) => {
        roomsParam += room.adult;
        for (let i = 0; i < room.child; i++) {
            roomsParam += ',5'
        }
        for (let i = 0; i < room.infant; i++) {
            roomsParam += ',0'
        }
        roomsParam += '_'
    })
    roomsParam = roomsParam.substring(0, roomsParam.length - 1);


    /////start bus
    let startBusParams = `
    sourceCode=${origin.data.sepandCode}&
    destinationCode=${dest.data.sepandCode}&
    passengerCount=${adultsTmp}&day=${parseInt(query.startDate) * 1000}`

    startBusParams += query.sort === 'price' ? `&best=true` : `&best=false`;
    startBusParams += query.sort === 'time' ? `&descending=false` : `&descending=false`;

    const startBusSuggest = await axios.post(`${BASE_URL}/buses/suggest?${startBusParams}`);

    ///////end bus
    let endBusParams = `
    sourceCode=${dest.data.sepandCode}&
    destinationCode=${origin.data.sepandCode}&
    passengerCount=${adultsTmp}&day=${parseInt(query.endDate) * 1000}`

    endBusParams += query.sort === 'price' ? `&best=true` : `&best=false`;
    endBusParams += query.sort === 'time' ? `&descending=false` : `&descending=true`;

    const endBusSuggest = await axios.post(`${BASE_URL}/buses/suggest?${endBusParams}`);


    ///hotels
    let hotelParams = `cityId=${dest.data.id}&rooms=${roomsParam}&rentFrom=${parseInt(query.startDate) * 1000}&rentTo=${parseInt(query.endDate) * 1000}`

    const hotelsSuggest = await axios.post(`${BASE_URL}/hotels/suggest?${hotelParams}`);

    loading = false;

    return {
        props: {
            dest: dest,
            origin: origin,
            startBusSuggest: startBusSuggest.data,
            endBusSuggest: endBusSuggest.data,
            hotelsSuggest: hotelsSuggest.data,
            roomsParam: roomsParam,
            loading: loading
        }
    }
}
