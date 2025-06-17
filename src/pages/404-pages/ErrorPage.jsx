import React from "react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import errorIcon from "./errorAnimation.json";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full bg-[#f8f9fa] flex flex-col items-center justify-center p-4 absolute">
      <div className="max-w-1/4">
        <Lottie animationData={errorIcon} loop={true}></Lottie>
      </div>
      <h1 className="text-[120px] font-extrabold text-[#FF204E] drop-shadow-md">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <button className="flex items-center gap-2 bg-[#FF204E] text-white hover:bg-[#e01e42] hover:cursor-pointer p-4">
          <MoveLeft size={18} />
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
