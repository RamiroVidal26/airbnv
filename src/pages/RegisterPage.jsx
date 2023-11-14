import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {
  const [formState, setFormState] = useState({
    userName: "Diego Forlán",
    email: "DF10@gmail.com",
    password: "12345",
  });

  const { userName, email, password } = formState;

  const onInputValue = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(event.target);
  };

  const registerUser = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post("/register", {
        userName,
        email,
        password,
      });
      alert("registration successful, now you can login");
    } catch (err) {
      alert("registration failed, please try again later");
    }
  };

  return (
    <div className=" pt-6 flex flex-col grow justify-around  ">
      <div className="mb-64">
        <h1 className=" text-4xl mb-4  text-center">login</h1>
        <form action="" className=" max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            name="userName"
            placeholder="Diego Forlán"
            value={userName}
            onChange={onInputValue}
          />
          <input
            type="email"
            name="email"
            placeholder="DF10@gmail.com.com"
            value={email}
            onChange={onInputValue}
          />
          <input
            type="password"
            name="password"
            placeholder="**********"
            value={password}
            onChange={onInputValue}
          />
          <button className="primary">Register</button>
          <div className="py-2 text-center">
            Already a member?{" "}
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
