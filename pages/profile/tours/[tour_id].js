import axios from "axios";
import { wrapper } from "../../../redux/store";
import Layout from "../../../src/components/Layout/Layout";
import Watcher from "../../../src/components/watcher/Watcher";
import { BASE_URL } from "../../../src/constant";

export default function WatcherPage({ loading, tour }) {
  return (
    <Layout>
      <Watcher tour={tour} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res ,query}) => {
    const { user } = store.getState();
    let loading = true;
    let token = "";
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

    const tour = await axios.get(`${BASE_URL}/tours/${query.tour_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    loading = false;

    return {
      props: {
        loading: loading,
        tour: tour.data,
      },
    };
  }
);
