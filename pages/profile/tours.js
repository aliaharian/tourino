import axios from "axios";
import { wrapper } from "../../redux/store";
import ProfileLayout from "../../src/components/Layout/ProfileLayout";
import ProfileTours from "../../src/components/profile/ProfileTours";
import { BASE_URL } from "../../src/constant";

export default function ProfilePage({ loading, userTours }) {
  return (
    <ProfileLayout>
      <ProfileTours tours={userTours.tours} />
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

    const userTours = await axios.get(`${BASE_URL}/tours/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loading = false;

    return {
      props: {
        loading: loading,
        userTours: userTours.data,
      },
    };
  }
);
