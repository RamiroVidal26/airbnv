import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BookingCard } from "../BookingCard";

export const Article = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
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
                        className="  aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[0]
                        }
                      />
                    )}
                  </div>
                  <div className="grid overflow-hidden">
                    {place.photos?.[1] && (
                      <img
                        className="  aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[1]
                        }
                      />
                    )}

                    {place.photos?.[2] && (
                      <img
                        className="  aspect-square object-cover relative top-2 "
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
                        onClick={() => setShowAllPhotos(true)}
                        className=" cursor-pointer aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[0]
                        }
                      />
                    )}
                  </div>
                  <div className="grid overflow-hidden">
                    {place.photos?.[1] && (
                      <img
                        onClick={() => setShowAllPhotos(true)}
                        className=" cursor-pointer aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[1]
                        }
                      />
                    )}

                    {place.photos?.[2] && (
                      <img
                        onClick={() => setShowAllPhotos(true)}
                        className=" cursor-pointer aspect-square object-cover relative top-2 "
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[2]
                        }
                      />
                    )}
                  </div>
                  <div className="grid overflow-hidden">
                    {place.photos?.[3] && (
                      <img
                        onClick={() => setShowAllPhotos(true)}
                        className=" cursor-pointer aspect-square object-cover"
                        src={
                          "http://localhost:4000/uploads/" + place.photos?.[3]
                        }
                      />
                    )}

                    {place.photos?.[3] && (
                      <img
                        onClick={() => setShowAllPhotos(true)}
                        className=" cursor-pointer aspect-square object-cover relative top-2 "
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
                  <div className="grid  gap-y-5 grid-cols-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                        />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("wifi") ? "line-through" : ""
                        }
                      >
                        Wifi
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.2em"
                        viewBox="0 0 384 512"
                      >
                        <path d="M96 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24V48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H88C74.7 96 64 85.3 64 72s10.7-24 24-24h8V24zM0 256c0-70.7 57.3-128 128-128H256c70.7 0 128 57.3 128 128V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256zm256 0v96c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("lavarropa")
                            ? "line-through"
                            : ""
                        }
                      >
                        Lavarropa
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                      </svg>{" "}
                      <h5
                        className={
                          !place.perks.includes("paisajes")
                            ? "line-through"
                            : ""
                        }
                      >
                        Paisajes
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
                      </svg>{" "}
                      <h5
                        className={
                          !place.perks.includes("a/c") ? "line-through" : ""
                        }
                      >
                        A/C
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("cocina") ? "line-through" : ""
                        }
                      >
                        Cocina
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("televisor")
                            ? "line-through"
                            : ""
                        }
                      >
                        Televisor
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="20"
                        viewBox="0 0 640 512"
                      >
                        <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("gimnasio")
                            ? "line-through"
                            : ""
                        }
                      >
                        Gimnasio
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        viewBox="0 0 576 512"
                      >
                        <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("mascotas")
                            ? "line-through"
                            : ""
                        }
                      >
                        Mascotas
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="20"
                        viewBox="0 0 640 512"
                      >
                        <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                      </svg>{" "}
                      <h5
                        className={
                          !place.perks.includes("visitas") ? "line-through" : ""
                        }
                      >
                        Visitas
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        viewBox="0 0 576 512"
                      >
                        <path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("piscina") ? "line-through" : ""
                        }
                      >
                        Piscina
                      </h5>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 512 512"
                      >
                        <path d="M99.5 144.8L178.7 224l96 96 92.5 92.5C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32H384v32H333.3zm32 32H400c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H269.3L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48H304c-8.8 0-16-7.2-16-16s-7.2-16-16-16zM229.5 320l-96-96H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H229.5z" />
                      </svg>
                      <h5
                        className={
                          !place.perks.includes("nofumar") ? "line-through" : ""
                        }
                      >
                        No Fumar
                      </h5>
                    </div>
                  </div>
                  <h3 className=" text-2xl mt-5 mb-4">Más Información:</h3>
                  <p className=" font-sans font-normal">{place.extraInfo}</p>
                  <h3 className=" text-2xl mt-5 mb-4">Más Información:</h3>
                  <p className=" font-sans font-normal">{place.extraInfo}</p>
                  <h3 className=" text-2xl mt-5 mb-4">Más Información:</h3>
                  <p className=" font-sans font-normal">{place.extraInfo}</p>
                  <h3 className=" text-2xl mt-5 mb-4">Más Información:</h3>
                  <p className=" font-sans font-normal">{place.extraInfo}</p>
                  <h3 className=" text-2xl mt-5 mb-4">Más Información:</h3>
                  <p className=" font-sans font-normal">{place.extraInfo}</p>
                  <h3 className=" text-2xl mt-5 mb-4">Más Información:</h3>
                  <p className=" font-sans font-normal">{place.extraInfo}</p>
                </div>
                <div>
                  <BookingCard place={place} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
