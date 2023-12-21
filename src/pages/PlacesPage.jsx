import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { Servicios } from "../Servicios";
import { ImageUpload } from "../ImageUpload";
import { ExtraInfo } from "../ExtraInfo";
import { CheckInOut } from "../CheckInOut";

export const PlacesPage = () => {
  const { subpage, action, id } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [selectedCheckIn, setSelectedCheckin] = useState("");
  const [selectedCheckOut, setSelectedCheckOut] = useState("");
  const [guestsNumber, setGuestsNumber] = useState("");
  const [servicios, setServicios] = useState([]);
  const [photosList, setPhotosList] = useState([]);
  const [places, setPlaces] = useState([]);
  const [price, setPrice] = useState("100");
  const [redirect, setRedirect] = useState(false);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleExtraInfo = (e) => {
    setExtraInfo(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAdress = (e) => {
    setAddress(e.target.value);
  };
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      console.log("Fetched places:", data);
      setPlaces(data);
    });
  }, []);
  useEffect(() => {
    if (!id) {
      console.log("ID is not defined");
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      console.log("data", data);
      console.log(servicios);
      setAddress(data.addres);
      setDescription(data.description);
      setExtraInfo(data.extraInfo);
      setGuestsNumber(data.maxGuest);
      setTitle(data.title);
      setServicios(data.perks);
      setPhotosList(data.photos);
      setSelectedCheckOut(data.checkOut);
      setSelectedCheckin(data.checkIn);
      setPrice(data.price);
    });
  }, [id]);

  async function handleFileUpload(ev) {
    try {
      const files = ev.target.files;
      const data = new FormData();

      for (let i = 0; i < files.length; i++) {
        data.append("photos", files[i]);
      }

      const response = await axios.post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      });

      const photos = response.data.files;

      setPhotosList((prev) => {
        return [...prev, ...photos];
      });
    } catch (error) {
      console.error("Error en la carga de archivos:", error);
    }
  }
  console.log("id:", id);

  console.log("subpage", subpage);
  console.log("action", action);

  async function addEditPlace(ev) {
    ev.preventDefault();
    const placeData = {
      guestsNumber,
      selectedCheckIn,
      selectedCheckOut,
      title,
      address,
      extraInfo,
      description,
      servicios,
      photosList,
      price,
    };
    //update
    if (id) {
      try {
        await axios.put("/places", { ...placeData, id });
      } catch (error) {
        console.error("Error in editPlace:", error);
      }
      setRedirect(true);
    } else {
      //new place
      try {
        const placeData = {
          guestsNumber,
          selectedCheckIn,
          selectedCheckOut,
          title,
          address,
          extraInfo,
          description,
          servicios,
          photosList,
          price,
        };
        await axios.post("/places", placeData);
      } catch (error) {
        console.error("Error in addPlace:", error);
      }
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      {!action && (
        <div
          className="mt-4 w-full flex justify-center
       "
        >
          <Link
            className="flex primary max-w-md justify-center "
            to={"/account/places/newPost"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Pon tu espacio
          </Link>
        </div>
      )}
      {(action === "newPost" || action === "edit") && (
        <div className="flex justify-center ">
          <form className="w-1/2" onSubmit={addEditPlace}>
            <h2 className="text-xl font-medium mb-1 mt-3">
              Título para la publicación
            </h2>
            <input
              name="title"
              onChange={handleTitle}
              value={title}
              type="text"
              placeholder=" 'Apartamento a metros de la playa' "
            />
            <h2 className="text-xl font-medium mb-1 mt-3">Dirección</h2>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleAdress}
              placeholder=" 'Calle siempreviva 742' "
            />
            <h2 className="text-xl font-medium mb-1 mt-3">Fotos</h2>
            <ImageUpload
              photosList={photosList}
              handleFileUpload={handleFileUpload}
              onChange={setPhotosList}
            />

            <h2 className="text-xl font-medium mb-1 mt-3">Descripción</h2>
            <div className="relative w-full min-w-[200px] mb-1 mt-3">
              <textarea
                className="peer h-auto overflow-hidden w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 "
                value={description}
                onChange={handleDescription}
                rows={5}
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Muestranos tu Lugar!
              </label>
            </div>

            <Servicios selected={servicios} onChange={setServicios} />

            <ExtraInfo
              extraInfo={extraInfo}
              handleExtraInfo={handleExtraInfo}
            />

            <CheckInOut
              selectedCheckIn={selectedCheckIn}
              onChangeCheckIn={setSelectedCheckin}
              selectedCheckOut={selectedCheckOut}
              onChangeCheckOut={setSelectedCheckOut}
              guestsNumber={guestsNumber}
              onChangeGuests={setGuestsNumber}
              setPrice={setPrice}
              price={price}
            />
          </form>
        </div>
      )}
      {!action && (
        <div className="mt-4  rounded-xl  p-4">
          {places.length > 0 &&
            places.map((place) => (
              <Link
                to={`/account/places/edit/${place._id}`}
                key={place.id}
                className="bg-gray-100 p-4 gap-4 cursor-pointer  rounded-2xl mb-3 flex"
              >
                <div className="w-32 h-32 flex rounded-full  flex-shrink-0">
                  {place.photos.length > 0 && (
                    <img
                      src={`http://localhost:4000/uploads/` + place.photos[0]}
                      alt=""
                      className=" object-cover aspect-square rounded-lg "
                    />
                  )}
                </div>
                <div className="overflow-x-hidden mr-4 flex flex-col justify-center  ">
                  <h3 className="text-2xl ">{place.title}</h3>
                  <p className="text-sm   mt-2">{place.description}</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
