import { Search } from '@material-ui/icons'
import Head from 'next/head'
import Faq from '../src/components/HomePage/Faq'
import HotelsSection from '../src/components/HomePage/HotelsSection'
import Intro from '../src/components/HomePage/intro'
import LandscapeToursSection from '../src/components/HomePage/LandscapeToursSection'
import OfferedToursSection from '../src/components/HomePage/OfferedToursSection'
import Customers from '../src/components/HomePage/Customers'
import HomepageLayout from '../src/components/Layout/HomepageLayout'
import { BASE_URL } from '../src/constant'
import { getHotelsList } from '../redux/hotel/Actions'
import { wrapper } from '../redux/store'
import axios from 'axios';
import Cookies from 'cookies'

export default function Home() {
  return (
    <div>
      <Head>
        <title>گردشگری</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageLayout >
        <Intro />
        <HotelsSection />
        <LandscapeToursSection />
        <OfferedToursSection />
        <Faq />
        <Customers />
      </HomepageLayout>
    </div>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, query }) => {
    const cookies = new Cookies(req, res)


    const hotels = await axios.post(`${BASE_URL}/hotels/public/page`, {
      "pageNumber": 0,
      "pageSize": 5,
    },
      // {
      //   headers: {
      //     Cookie: req.headers.cookie,
      //   },
      // }
    );

    store.dispatch(getHotelsList(true, hotels.data));

    return {
      props: {
        hotels: hotels.data
      }, // will be passed to the page component as props

    };
  }
);


