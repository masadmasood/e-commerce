import React, { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section>
      <form
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="!font-prata text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === "Sign Up" && (
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-400 rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-400 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border border-gray-400 rounded"
          required
        />
        {currentState === "Sign Up" && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border border-gray-400 rounded"
            required
          />
        )}

        {currentState === "Log In" && (
          <div className="w-full flex justify-start">
            <p className="text-sm">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => alert("Redirect to Forgot Password page")}
              >
                Forgot Password?
              </span>
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-3 py-2 mt-4 bg-black text-white rounded hover:bg-gray-800 transition-all duration-300"
        >
          {currentState}
        </button>

        {currentState === "Log In" ? (
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setCurrentState("Log In")}
            >
              Log In
            </span>
          </p>
        )}
      </form>
    </section>
  );
}

export default Login;
