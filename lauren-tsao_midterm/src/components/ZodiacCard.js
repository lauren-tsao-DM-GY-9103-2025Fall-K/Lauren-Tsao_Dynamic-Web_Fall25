import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CONSTELLATION } from "./Constellation-data";
import getAPI from "../api";
import Button from "./Button";
import WEBSITE_BG from "../assets/Website_BG.mp4";

const ZodiacCard = () => {
  const { zodiacSign } = useParams(); // <-- dynamic URL parameter (see App.js -> /:zodiacSign)
  const [zodiacData, setZodiacData] = useState(null);

  // function to get data from api.js (zodiacInfo)
  const handleFetchZodiac = async (zodiacInfo) => {
    const result = await getAPI(zodiacInfo); // result = the zodiacInfo variable assigned to 'zodiac' API parameter (see api.js)
    setZodiacData(result);
  };

  useEffect(() => {
    if (!zodiacSign) return; // if no zodiacSign picked (!zodiacSign), nothing happens (return)
    handleFetchZodiac(zodiacSign); // if zodiacSign picked --> run handleFetchZodiac function for that zodiacSign
  }, [zodiacSign]); // <-- only run useEffect when zodiacSign changes

  // loading message
  if (!zodiacData) // <-- if zodiacData doesn't exist (basically not ready yet)
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          width="100%"
          autoPlay
          muted
          loop
        >
          <source src={WEBSITE_BG} type="video/mp4" />
        </video>

        <div className="flex items-center justify-center w-full h-full text-white relative z-10">
          Accessing zodiac reading, please wait...
        </div>
      </div>
    );

  // otherwise
  return (
    <div className="absolute w-screen h-screen overflow-clip flex items-center justify-center">
      <div className=" w-1/2 h-2/3">
        <div className="flex justify-between items-baseline">
          <h1>{zodiacData.sign}</h1>
          <span>{zodiacData.date}</span>
        </div>
        <hr />

        <div className="h-3/4 flex items-center justify-between">
          <span>{zodiacData.horoscope}</span>
          <img
            className="ml-10 h-5/6"
            src={CONSTELLATION[zodiacData.sign.toLowerCase()]}
            alt={`${zodiacData.sign} constellation`}
          />
        </div>
        <NavLink to="/">
          <Button secondary>Back</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ZodiacCard;
