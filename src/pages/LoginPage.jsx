import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export const LoginPage = () => {
  const [formState, setformState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  const [redirect, setRedirect] = useState(false);
  const { setUser, setReady } = useContext(UserContext);

  const onInputValue = (event) => {
    const { name, value } = event.target;
    setformState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("target:", event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submitting with data:", { email, password });
      const response = await axios.post("/login", { email, password });
      setUser(response.data);
      setReady(true);
      console.log("userdata_:", response.data);
      alert("login successful");
      setRedirect(true);
    } catch (error) {
      alert("login failed");
      console.error("Error:", error);
    }
  };
  if (redirect) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <div className=" pt-6 flex flex-col grow justify-around  ">
      <div className="mb-64">
        <h1 className=" text-4xl mb-4  text-center">login</h1>
        <form action="" onSubmit={handleSubmit} className=" max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={onInputValue}
            name="email"
          />
          <input
            type="password"
            placeholder="you Password"
            value={password}
            onChange={onInputValue}
            name="password"
          />
          <button className="primary">Login</button>
          <div className="py-2 text-center">
            Don't have an account yet? <Link to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
