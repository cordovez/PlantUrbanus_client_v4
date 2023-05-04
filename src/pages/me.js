import { useEffect, useState, useContext } from "react";

import MyPlants from "@/components/my_plants";
import UserCard from "@/components/user_card";
import { UserContext } from "@/context/user_context";

import { get_me } from "@/axios/get_me";

export default function Me() {
  const contextData = useContext(UserContext);
  const token = contextData[0];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const findUser = async () => {
      const response = await get_me(token);
      if (response) {
        setData(response.data);
      }

      setLoading(false);
    };
    findUser();
  }, [token]);
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <UserCard data={data} />
      <MyPlants />
    </>
  );
}

// export async function getStaticProps(token) {
//   console.log(token);
//   const response = await get_me(token);

//   return {
//     props: { response },
//   };
// }
