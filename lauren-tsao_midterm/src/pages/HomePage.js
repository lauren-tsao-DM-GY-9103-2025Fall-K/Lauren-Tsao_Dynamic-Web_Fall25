import React, { useState } from "react";
import HoverImage from "../components/ImageHover";
import { NavLink } from "react-router-dom";
import {
  CONSTELLATION,
  CONSTELLATION_TEXT,
  CONSTELLATION_UNHOVERED,
} from "../components/Constellation-data";
import WEBSITE_BG from "../assets/Website_BG.mp4";

const HomePage = () => {
  const [hoveredConstellation, setHoveredConstellation] = useState(null);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <NavLink to="/aries" className="absolute top-1/3 left-1/5 w-60 block">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.ariesUnhovered}
          hoverSrc={CONSTELLATION.aries}
          alt="aries"
          onMouseEnter={() => setHoveredConstellation("ariesText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>
      <NavLink to="/taurus" className="absolute top-1/4 right-0">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.taurusUnhovered}
          hoverSrc={CONSTELLATION.taurus}
          alt="taurus"
          onMouseEnter={() => setHoveredConstellation("taurusText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/gemini" className="absolute top-1/3 left-2/3">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.geminiUnhovered}
          hoverSrc={CONSTELLATION.gemini}
          alt="gemini"
          onMouseEnter={() => setHoveredConstellation("geminiText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/cancer" className="absolute bottom-0 right-0">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.cancerUnhovered}
          hoverSrc={CONSTELLATION.cancer}
          alt="cancer"
          onMouseEnter={() => setHoveredConstellation("cancerText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/leo" className="absolute bottom-1/3 right-1/2">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.leoUnhovered}
          hoverSrc={CONSTELLATION.leo}
          alt="leo"
          onMouseEnter={() => setHoveredConstellation("leoText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/virgo" className="absolute top-2/3 left-1/3">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.virgoUnhovered}
          hoverSrc={CONSTELLATION.virgo}
          alt="virgo"
          onMouseEnter={() => setHoveredConstellation("virgoText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/libra" className="absolute top-1/5 left-1/2">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.libraUnhovered}
          hoverSrc={CONSTELLATION.libra}
          alt="libra"
          onMouseEnter={() => setHoveredConstellation("libraText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/scorpio" className="absolute top-3/5 left-2/5">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.scorpioUnhovered}
          hoverSrc={CONSTELLATION.scorpio}
          alt="scorpio"
          onMouseEnter={() => setHoveredConstellation("scorpioText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/sagittarius" className="absolute top-1/6 left-2/3">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.sagittariusUnhovered}
          hoverSrc={CONSTELLATION.sagittarius}
          alt="sagittarius"
          onMouseEnter={() => setHoveredConstellation("sagittariusText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/capricorn" className="absolute bottom-0 left-1/6">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.capricornUnhovered}
          hoverSrc={CONSTELLATION.capricorn}
          alt="capricorn"
          onMouseEnter={() => setHoveredConstellation("capricornText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/aquarius" className="absolute top-1/2 right-2/3">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.aquariusUnhovered}
          hoverSrc={CONSTELLATION.aquarius}
          alt="aquarius"
          onMouseEnter={() => setHoveredConstellation("aquariusText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <NavLink to="/pisces" className="absolute top-2/5 left-1/4">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.piscesUnhovered}
          hoverSrc={CONSTELLATION.pisces}
          alt="pisces"
          onMouseEnter={() => setHoveredConstellation("piscesText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>

      <img
        className="w-80 absolute bottom-10 right-1/4"
        src={
          hoveredConstellation
            ? CONSTELLATION_TEXT[hoveredConstellation]
            : CONSTELLATION_TEXT.mainText
        }
        alt="Find a Constellation"
      />
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

export default HomePage;
