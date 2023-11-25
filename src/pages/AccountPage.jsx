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
          My profile
        </Link>
        <Link className={linlkClasses("bookings")} to={"/account/bookings"}>
          My bookings
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
