import React from "react";
// Import Link from 'react-router-dom' if you're using React Router for navigation
import { Link } from "react-router-dom";

function Login() {
  // Example form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-full max-w-md">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        <form>
          <button
            type="submit"
            className=" w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors"
          >
            Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
