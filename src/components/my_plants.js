/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/user_context";

import { get_me_plants } from "@/axios/get_me_plants";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function MyPlants() {
  const contextData = useContext(UserContext);
  const token = contextData[0];
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const findPlants = async () => {
      const response = await get_me_plants(token);
      if (response) {
        setPlantData(response.data);
      }
      setLoading(false);
    };
    findPlants();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (!plantData) return <p>No plant data</p>;
  console.log(plantData);
  return (
    <>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {plantData.map((item) => (
          <ImageListItem key={item._id}>
            <img
              src={`${item.images[0].uri}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.images[0].uri}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
export default MyPlants;

// export async function getStaticProps(user) {
//   const response = await get_me_plants(user);
//   const plants = await response.data;

//   return {
//     props: { plants },
//   };
// }
