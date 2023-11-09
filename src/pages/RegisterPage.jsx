import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className=" pt-6 flex flex-col grow justify-around  ">
      <div className="mb-64">
        <h1 className=" text-4xl mb-4  text-center">login</h1>
        <form action="" className=" max-w-md mx-auto">
          <input type="name" placeholder="Diego Forlán" />
          <input type="email" placeholder="DF10@gmail.com.com" />
          <input type="password" placeholder="**********" />
          <button className="primary">Login</button>
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
