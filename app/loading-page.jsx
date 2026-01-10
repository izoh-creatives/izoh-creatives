import React from "react";
import LoadingSpinner from "./components/loading-spinner";

const LoadingPage = () => {
  return (
    <div className="min-h-150 flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
};

export default LoadingPage;
