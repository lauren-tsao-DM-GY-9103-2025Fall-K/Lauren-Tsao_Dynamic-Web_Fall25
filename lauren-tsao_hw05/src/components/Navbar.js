import React from "react";
import { Link, NavLink } from "react-router-dom";
import Panel from "./Panel";
import Logo from "../assets/Me_circle_325px.png";

const Navbar = () => {
  const baseClass = "main-font border l-4 rounded-full text-white border-black  px-8 py-2";
  const activeClass =
    "main-font bg-white border l-4 rounded-full text-black border-blue-500 font-bold px-8 py-2";
  return (
    <Panel className="sticky top-0 flex bg-black items-center px-10 py-3">
        
        <img src={Logo} alt="Logo" className="mr-10 mx-3 h-10 w-auto"/>
  
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        About Me
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Projects
      </NavLink>
    </Panel>
  );
};

export default Navbar;
