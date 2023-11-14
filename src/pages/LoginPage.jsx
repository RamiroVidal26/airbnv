import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const [formState, setformState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;

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
      await axios.post("/login", { email, password });
      alert("login successful");
    } catch (error) {
      alert("login failed");
    }
  };
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
