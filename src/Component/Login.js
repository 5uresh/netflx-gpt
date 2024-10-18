import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const handleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-8 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">
        {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSigninForm}>
        {isSigninForm
            ? "New to Netflx? Sign Up"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
