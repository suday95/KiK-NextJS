"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "../../data/articles/new-anima.json";

const LottieWrapper = () => {
  return <Lottie animationData={animationData} />;
};

export default LottieWrapper;
