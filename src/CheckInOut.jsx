export const CheckInOut = ({
  onChangeCheckOut,
  onChangeGuests,
  onChangeCheckIn,
  selectedCheckIn,
  selectedCheckOut,
  guestsNumber,
}) => {
  const guests = [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, "Indefinido"];
  const hours = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];
  const handleCheckInChange = (e) => {
    onChangeCheckIn(e.target.value);
  };
  const handleCheckOutChange = (e) => {
    onChangeCheckOut(e.target.value);
  };
  const handleGuestsNumber = (e) => {
    onChangeGuests(e.target.value);
  };
  return (
    <>
      <h2 className="text-xl font-medium mb-1 mt-3">Check-in y Check-out</h2>
      <div className="mt-4  items-center ">
        <select
          id="horarios"
          value={selectedCheckIn}
          onChange={handleCheckInChange}
          className="mr-3 border p-4 shadow-md rounded-2xl "
        >
          <option value="" disabled>
            Selecciona un horario
          </option>
          {hours.map((hours) => (
            <option key={hours} value={hours}>
              {hours}
            </option>
          ))}
        </select>

        <select
          id="horarios"
          value={selectedCheckOut}
          onChange={handleCheckOutChange}
          className=" mr-3 border p-4 shadow-md rounded-2xl"
        >
          <option value="" disabled>
            Selecciona un horario
          </option>
          {hours.map((hours) => (
            <option key={hours} value={hours}>
              {hours}
            </option>
          ))}
        </select>
        <select
          id="guests"
          value={guestsNumber}
          onChange={handleGuestsNumber}
          className=" border p-4 shadow-md rounded-2xl"
        >
          <option value="" disabled>
            Número máximo de Personas
          </option>
          {guests.map((guest) => (
            <option key={guest} value={guest}>
              {guest}
            </option>
          ))}
        </select>

        <div>
          <button className="  mt-3 primary !w-1/5">Guardar</button>
        </div>
      </div>
    </>
  );
};
