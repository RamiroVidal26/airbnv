import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { PlacesPage } from "./PlacesPage";

export const AccountPage = () => {
  const { ready, user, setUser, setReady } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  const [loggedOut, setLoggedOut] = useState(null);

  async function logout() {
    await axios.post("/logout");
    setLoggedOut("/");
    setUser(null);
  }

  if (ready && !user && !loggedOut) {
    return <Navigate to={"/login"} />;
  }
  if (!ready) {
    return "loading...";
  }

  function linlkClasses(type = null) {
    let classes = "py-2 px-6 flex gap-1 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white    ";
    } else {
      classes += "bg-grey-200";
    }
    return classes;
  }
  if (loggedOut) {
    return <Navigate to={loggedOut} />;
  }
  return (
    <div>
      <nav className=" w-full  flex justify-center gap-2 mt-8">
        <Link className={linlkClasses("profile")} to={"/account"}>
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
            </svg>{" "}
            My profile
          </div>
        </Link>
        <Link className={linlkClasses("bookings")} to={"/account/bookings"}>
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
            >
              <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
            </svg>
            My bookings
          </div>
        </Link>
        <Link className={linlkClasses("places")} to={"/account/places"}>
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
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
          My accoommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="max-w-lg mx-auto text-center mt-8">
          logged in as {user.userName} ({user.email})
          <button onClick={logout} className="primary max-w-md mt-3">
            logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};
