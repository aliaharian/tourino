import axios from "axios";
import { wrapper } from "../../redux/store";
import ProfileLayout from "../../src/components/Layout/ProfileLayout";
import ProfileTransactions from "../../src/components/profile/ProfileTransactions";
import { BASE_URL } from "../../src/constant";

export default function ProfilePage({ loading  ,transactions}) {
  return (
    <ProfileLayout>
      <ProfileTransactions transactions={transactions.data}/>
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
        token = cookies
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
    const transactions = await axios.get(`${BASE_URL}/user/transactions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    loading = false;

    return {
      props: {
        loading: loading,
        transactions: transactions.data,
      },
    };
  }
);
