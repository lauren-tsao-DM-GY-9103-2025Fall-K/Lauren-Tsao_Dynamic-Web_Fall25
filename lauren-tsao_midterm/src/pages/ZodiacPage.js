import React from "react";
import ZodiacCard from "../components/ZodiacCard";
import WEBSITE_BG from "../assets/Website_BG.mp4";

const ZodiacPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <ZodiacCard />
      <video
        className="z-0 pointer-events-none"
        width="100%"
        autoPlay
        muted
        loop
      >
        <source src={WEBSITE_BG} type="video/mp4" />
      </video>
    </div>
  );
};

export default ZodiacPage;
