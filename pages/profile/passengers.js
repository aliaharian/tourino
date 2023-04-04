import axios from "axios";
import { useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import { getPassengers } from "../../redux/user";
import ProfileLayout from "../../src/components/Layout/ProfileLayout";
import ProfilePassengers from "../../src/components/profile/ProfilePassengers";
import { BASE_URL } from "../../src/constant";

export default function ProfilePage({ loading }) {
  const passengers = useSelector((state) => state.user.passengers);
  return (
    <ProfileLayout>
      <ProfilePassengers passengers={passengers.data} />
    </ProfileLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res }) => {
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

    const passengers = await axios.get(`${BASE_URL}/user/passengers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(getPassengers(true, passengers.data));

    loading = false;

    return {
      props: {
        loading: loading,
      },
    };
  }
);
