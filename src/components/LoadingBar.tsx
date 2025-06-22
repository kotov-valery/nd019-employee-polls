import React from "react";

function LoadingBar({ isLoading }: { isLoading: boolean }) {
  return isLoading ? <div className="loading-bar"></div> : null;
}

export default LoadingBar;
