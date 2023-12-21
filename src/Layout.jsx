import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div
      className="p-8 flex flex-col  min-h-screen"
      style={{ maxWidth: "1280px", margin: "0 auto" }}
    >
      <Header />
      <Outlet />
    </div>
  );
};
