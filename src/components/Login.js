import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 absolute my-36 p-12 right-0 left-0 mx-auto bg-black rounded-lg text-white bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-lg bg-slate-600"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full rounded-lg bg-slate-600"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-slate-600"
        />
        <button className="p-4 my-4 bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already an user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
