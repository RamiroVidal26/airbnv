import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      console.log("dalbo", response.data);
      setPlace(response.data);
    });
  }, [id]);

  if (showAllPhotos) {
    return (
      <div className=" inset-0 absolute  min-h-screen  bg-gray-100  ">
        <div className="fixed top-9 left-20">
          <button
            className=" cursor-pointer "
            onClick={() => setShowAllPhotos(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "24px",
                width: "24px",
                stroke: "currentcolor",
                strokeWidth: "2.5",
                overflow: "visible",
              }}
            >
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </button>
        </div>
        <div className="p-10 bg-gray-100  grid gap-4">
          {place.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div className="flex justify-center rounded overflow-hidden">
                <img
                  src={"http://localhost:4000/uploads/" + photo}
                  className="  aspect-square object-cover rounded-2xl w-3/5 "
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8   bg-white  py-8 -mx-8 ">
      {place && (
        <>
          <div className=" p-10 flex flex-col ">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl ">{place.title}</h1>
              <a
                target="blank"
                href={"http://www.google.com/maps?q=" + place.addres}
                className="font-semibold underline"
              >
                {place.addres}
              </a>

              {place.photos && place.photos.length < 5 && (
                <div className="grid  relative gap-2 grid-cols-[2fr_1fr]  rounded-2xl overflow-hidden">
                  <div>
                    {place.photos?.[0] && (
                      <img
                        className=" aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[0]
                        }
                      />
                    )}
                  </div>
                  <div className="grid overflow-hidden">
                    {place.photos?.[1] && (
                      <img
                        className=" aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[1]
                        }
                      />
                    )}

                    {place.photos?.[2] && (
                      <img
                        className=" aspect-square object-cover relative top-2 "
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[2]
                        }
                      />
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setShowAllPhotos(true);
                    }}
                    className="absolute rounded-lg bg-white flex items-center gap-2 right-3 px-2 py-1 bottom-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "16px",
                        width: "16px",
                        fill: "currentcolor",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                      ></path>
                    </svg>{" "}
                    Mostrar todas las fotos
                  </button>
                </div>
              )}
              {place.photos && place.photos.length > 4 && (
                <div className="grid  relative gap-2 grid-cols-[2fr_1fr_1fr] rounded-2xl overflow-hidden">
                  <div>
                    {place.photos?.[0] && (
                      <img
                        className=" aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[0]
                        }
                      />
                    )}
                  </div>
                  <div className="grid overflow-hidden">
                    {place.photos?.[1] && (
                      <img
                        className=" aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[1]
                        }
                      />
                    )}

                    {place.photos?.[2] && (
                      <img
                        className=" aspect-square object-cover relative top-2 "
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[2]
                        }
                      />
                    )}
                  </div>
                  <div className="grid overflow-hidden">
                    {place.photos?.[3] && (
                      <img
                        className=" aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[3]
                        }
                      />
                    )}

                    {place.photos?.[3] && (
                      <img
                        className=" aspect-square object-cover relative top-2 "
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[4]
                        }
                      />
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setShowAllPhotos(true);
                    }}
                    className="absolute rounded-lg bg-white flex items-center gap-2 right-3 px-2 py-1 bottom-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "16px",
                        width: "16px",
                        fill: "currentcolor",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                      ></path>
                    </svg>{" "}
                    Mostrar todas las fotos
                  </button>
                </div>
              )}
              <div className=" my-4 py-5 grid grid-cols-[2fr_1fr] border-slate-800 ">
                <div id="parrafos" className=" w-3/4">
                  <h3 className=" text-2xl mb-4">Descripción del lugar:</h3>
                  <p className=" font-sans font-normal">{place.description}</p>
                  <h3 className=" text-2xl mt-5 mb-4">
                    Lo que este lugar ofrece:
                  </h3>
                  <ul></ul>
                </div>
                <div>
                  <div
                    id="tarjeta"
                    className=" border shadow-2xl  p-7 sticky top-0  rounded-2xl"
                  >
                    <div className="flex items-center mb-5 gap-2">
                      <h3 className=" font-medium text-2xl">
                        $USD {place.price}
                      </h3>
                      <h4 className=" text-gray-500 text-xl">noche</h4>
                    </div>
                    <div className="border border-gray-400 rounded-2xl ">
                      <div className="text-xs font-semibold  grid grid-cols-2">
                        <button className=" px-3 text-start border-r border-b">
                          <p className="text-xs text-stone-600  font-bold">
                            LLEGADA
                          </p>{" "}
                          <p className=" text-lg font-light"> 12/12/96 </p>
                        </button>
                        <button className="text-start px-3 py-3  border-b">
                          <p className="text-xs text-stone-600 font-bold">
                            SALIDA
                          </p>{" "}
                          <p className=" text-lg font-light"> 12/12/96 </p>
                        </button>
                      </div>

                      <button className="px-2 py-3 pr-9 flex w-full justify-between">
                        <div>
                          <p className="text-xs text-stone-600 font-bold">
                            HUÉSPEDES
                          </p>{" "}
                          <p className=" text-lg  font-light"> 1 huésped </p>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "16px",
                              width: "16px",
                              stroke: "currentcolor",
                              "stroke-width": 4, // Encerramos 'stroke-width' entre comillas
                              overflow: "visible",
                            }}
                          >
                            <path
                              fill="none"
                              d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="border mt-3 text-center text-lg font-bold bg-primary text-white border-gray-400 rounded-2xl py-3.5">
                      Reservar
                    </div>
                    <div className="text-center">
                      No se hará ningún cargo por el momento
                    </div>
                    <div className="p-3 font-light text-stone-600 flex flex-col gap-3">
                      <div className="flex justify-between">
                        <h4 className=" underline">
                          $USD{place.price} x x dias{" "}
                        </h4>
                        <h4>$USD {place.price * 5} </h4>
                      </div>
                      <div className="flex justify-between">
                        <h4 className=" underline">
                          $USD{place.price} x x dias{" "}
                        </h4>
                        <h4>$USD {place.price * 5} </h4>
                      </div>{" "}
                      <div className="flex justify-between">
                        <h4 className=" underline">
                          Tarifa por servicio de Airbnv
                        </h4>
                        <h4>$USD {place.price * 5} </h4>
                      </div>
                    </div>
                    <div className="px-3 py-4 flex text-lg font-semibold justify-between border-t border-t-gray-300 mt-4">
                      <h3>Total sin incluir impuestos</h3>
                      <h3>$USD{place.price + 30 + 50}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
