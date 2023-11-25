import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const PlacesPage = () => {
  const { action } = useParams();
  const textAreaRef = useRef(null);
  const [val, setVal] = useState("");

  const handleTextareaChange = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [val]);

  function handleFileUpload(e) {
    const files = e.target.files;
    console.log(files);
  }

  return (
    <div>
      {action !== "new" && (
        <div
          className="mt-4 w-full flex justify-center
       "
        >
          <Link
            className="flex primary max-w-md justify-center "
            to={"/account/places/new"}
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
      {action === "new" && (
        <div className="flex justify-center ">
          <form className="w-1/2">
            <h2 className="text-xl font-medium mb-1 mt-3">
              Título para la publicación
            </h2>

            <input
              type="text"
              placeholder=" 'Apartamento a metros de la playa' "
            />
            <h2 className="text-xl font-medium mb-1 mt-3">Dirección</h2>
            <input type="text" placeholder=" 'Calle siempreviva 742' " />

            <h2 className="text-xl font-medium mb-1 mt-3">Fotos</h2>
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-pink-100  inline-flex items-center  border px-6 py-3 shadow-md shadow-gray-300 rounded-2xl "
            >
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.0"
                stroke="currentColor"
                className="w-16 h-16 cursor-pointer inline-block    "
                onClick={() => document.getElementById("fileInput").click()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <h4>upload</h4>
            </label>
            <h2 className="text-xl font-medium mb-1 mt-3">Descripción</h2>
            <div className="relative w-full min-w-[200px] mb-1 mt-3">
              <textarea
                className="peer h-auto overflow-hidden w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 "
                value={val}
                onChange={handleTextareaChange}
                ref={textAreaRef}
                rows={5}
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Muestranos tu Lugar!
              </label>
            </div>
            <h2 className="text-xl font-medium mb-1 mt-3">Servicios</h2>
            <div className="grid gap-2 items-center  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                    />
                  </svg>
                  Wifi
                </span>
              </label>
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M96 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24V48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H88C74.7 96 64 85.3 64 72s10.7-24 24-24h8V24zM0 256c0-70.7 57.3-128 128-128H256c70.7 0 128 57.3 128 128V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256zm256 0v96c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
                  </svg>
                  Lavadora
                </span>
              </label>
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
                  </svg>{" "}
                  A/C
                </span>
              </label>
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                  </svg>
                  Cocina
                </span>
              </label>
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center ">Secadora</span>
              </label>
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center ">Calefacción</span>
              </label>
              <label className="border p-4 shadow-md  gap-2 flex">
                <input type="checkbox" />
                <span className="flex gap-1 items-center "></span>
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
