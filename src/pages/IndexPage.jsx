import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className=" w-6/8 self-center gap-x-6 mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id} key={place._id}>
            <div className="bg-gray-500  rounded-2xl flex " key={place._id}>
              {place.photos?.[0] && (
                <img
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt=""
                  className="rounded-2xl  object-cover aspect-square"
                />
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
};
