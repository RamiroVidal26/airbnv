import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { LoginPage } from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" index element={<IndexPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}
