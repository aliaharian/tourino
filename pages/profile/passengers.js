import { wrapper } from "../../redux/store";
import ProfileLayout from "../../src/components/Layout/ProfileLayout";

export default function ProfilePage({ loading }) {
  return (
    <ProfileLayout>
      <div className="container">okkkk</div>
    </ProfileLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res }) => {
    const { user } = store.getState();
    let loading = true;

    if (req) {
      if (req.headers) {
        const cookies = req.headers.cookie;
        let token = cookies
          ?.split(";")
          .find((c) => c.trim().startsWith("token="));
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

    loading = false;

    return {
      props: {
        loading: loading,
      },
    };
  }
);
