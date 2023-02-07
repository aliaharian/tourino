import ProfileLayout from "../../src/components/Layout/ProfileLayout";

export default function ProfilePage({ loading }) {
  return (
    <ProfileLayout>
      <div className="container">okkkk</div>
    </ProfileLayout>
  );
}

export async function getServerSideProps({ query }) {
  let loading = true;

  //   const hotelsSuggest = await axios.post(
  //     `${BASE_URL}/tours/suggest/hotel`,
  //     params
  //   );

  loading = false;

  return {
    props: {
      loading: loading,
    },
  };
}
