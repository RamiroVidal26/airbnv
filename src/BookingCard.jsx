import axios from "axios";
import { differenceInCalendarDays, differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

export const BookingCard = ({ place }) => {
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split("T")[0];

  const [numGuest, setNumGuest] = useState(1);
  const [reservedDays, setReservedDays] = useState(0);
  const [checkIn, setCheckIn] = useState(currentDateString);
  const [checkOut, setCheckOut] = useState(currentDateString);
  const [showOptions, setShowOptions] = useState(false);
  const [reserve, setReserve] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientSurname, setClientSurname] = useState("");

  const TotalPrice = Math.round(
    place.price * reservedDays + place.price / 12 + 20
  );

  const submitBooking = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post("/booking", {
        phone,
        clientName,
        clientSurname,
        email,
        numGuest,
        place,
        checkIn,
        checkOut,
        TotalPrice,
        reservedDays,
      });
    } catch (err) {
      console.log("error en el registro de reserva", err.response.data);
    }
  };

  const handleNumHuespedesChange = (newNum) => {
    setNumGuest(newNum);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      const differenceInMilliseconds = new Date(checkOut) - new Date(checkIn);
      setReservedDays(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    }
  }, [checkIn, checkOut]);

  return (
    <>
      <div
        id="tarjeta"
        className=" border shadow-2xl  p-7 sticky top-0  rounded-2xl"
      >
        <div className="flex items-center mb-5 gap-2">
          <h3 className=" font-medium text-2xl">$USD {place.price}</h3>
          <h4 className=" text-gray-500 text-xl">noche</h4>
        </div>
        {!reserve && (
          <>
            <div className="border border-gray-400 rounded-2xl ">
              <div className="text-xs font-semibold grid  grid-cols-2">
                <label className="px-3 text-start py-3 border-r border-b">
                  <p className="text-xs text-stone-600 font-bold">LLEGADA</p>
                  <input
                    type="date"
                    className="text-lg font-light"
                    value={checkIn}
                    onChange={(ev) => setCheckIn(ev.target.value)}
                  />
                </label>
                <label className="text-start px-3 py-3 border-b">
                  <p className="text-xs text-stone-600 font-bold">SALIDA</p>
                  <input
                    type="date"
                    className="text-lg font-light"
                    value={checkOut}
                    onChange={(ev) => setCheckOut(ev.target.value)}
                  />
                </label>
              </div>

              <div
                className="px-2 py-3 pr-9 flex w-full justify-between"
                onClick={toggleOptions}
              >
                <label>
                  <p className="text-xs text-stone-600 font-bold">
                    NÚMERO DE HUÉSPEDES
                  </p>
                  <p className="text-lg ms-1 font-light"> {numGuest}</p>
                </label>
                {!showOptions && (
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
                        strokeWidth: 4,
                        overflow: "visible",
                      }}
                    >
                      <path
                        fill="none"
                        d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"
                      ></path>
                    </svg>
                  </div>
                )}
                {showOptions && (
                  <div className=" opciones-container ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "indefinido"].map(
                      (opcion) => (
                        <div
                          className=" cursor-pointer"
                          key={opcion}
                          onClick={() => handleNumHuespedesChange(opcion)}
                        >
                          {opcion}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setReserve(true)}
              className="border w-full mt-3 text-center text-lg font-bold bg-primary text-white border-gray-400 rounded-2xl py-3.5"
            >
              Reservar
              {reservedDays > 0 && <span> x {reservedDays} Noches</span>}
            </button>
            <div className="text-center">
              No se hará ningún cargo por el momento
            </div>
          </>
        )}
        {reserve && (
          <>
            <form onSubmit={submitBooking}>
              <div className="border border-gray-400 px-4 py-1 rounded-2xl">
                <label className="m-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={clientName}
                  onChange={(ev) => setClientName(ev.target.value)}
                  placeholder="Roberto"
                />
                <label className="m-2" htmlFor="surname">
                  Apellido
                </label>
                <input
                  type="text"
                  value={clientSurname}
                  onChange={(ev) => setClientSurname(ev.target.value)}
                  name="surname"
                  placeholder="Galati"
                />
                <label className="m-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="roberGalati0@gmail.com.com"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />

                <label className="m-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="099 111 111"
                  pattern="^[0-9]{3,45}$"
                  name="phone"
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                />
              </div>
              <button className="border w-full mt-3 text-center text-lg font-bold bg-primary text-white border-gray-400 rounded-2xl py-3.5">
                Confirmar Reserva
                {reservedDays > 0 && <span> x {reservedDays} Noches</span>}
              </button>
            </form>
          </>
        )}

        <div className="p-3 font-light text-stone-600 flex flex-col gap-3">
          <div className="flex justify-between">
            <h4 className=" underline">
              $USD{place.price} x {reservedDays} noches{" "}
            </h4>
            <h4>$USD {place.price * reservedDays} </h4>
          </div>
          <div className="flex justify-between">
            <h4 className=" underline">Tarifa por servicio de limpieza</h4>
            <h4>$USD 20</h4>
          </div>{" "}
          <div className="flex justify-between">
            <h4 className=" underline">Tarifa por servicio de Airbnv</h4>
            <h4>$USD {Math.round((place.price * reservedDays) / 25)} </h4>
          </div>
        </div>
        <div className="px-3 py-4 flex text-lg font-semibold justify-between border-t border-t-gray-300 mt-4">
          <h3>Total sin incluir impuestos</h3>
          <h3>
            $USD
            {TotalPrice}
          </h3>
        </div>
      </div>
    </>
  );
};
