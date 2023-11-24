import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export const AccountPage = () => {
  const { ready, user } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  function linlkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
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
          My accoommodations
        </Link>
      </nav>
      {subpage === "profile" && <div>hola hola</div>}
    </div>
  );
};
