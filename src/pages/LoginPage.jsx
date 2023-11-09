import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className=" pt-6 flex flex-col grow justify-around  ">
      <div className="mb-64">
        <h1 className=" text-4xl mb-4  text-center">login</h1>
        <form action="" className=" max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="you Password" />
          <button className="primary">Login</button>
          <div className="py-2 text-center">
            Don't have an account yet? <Link to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
