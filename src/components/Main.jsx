import React from "react";
import "../index.css";

export const Main = () => {
  return (
    <div className="static">
      <div className="banner absolute top-0 left-0 w-full h-1/4 z-0 bg-yellow">
        <div className="px-10 pt-14 text-left">
          <p className="font-normal">Welcome onboard TR252,</p>
          <p className="font-bold text-2xl">Florentiana Yuwono</p>
        </div>
      </div>
      <div className="rounded-[16px] absolute top-25 z-10 bg-white">
        <div className="px-10 pt-14 text-center">
          <p className="font-bold text-2xl">SIN -- PKU</p>
        </div>
      </div>
    </div>
  );
};
