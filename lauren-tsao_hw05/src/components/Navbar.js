import React from "react";
import { NavLink } from "react-router-dom";
import Panel from "./Panel";
import Logo from "../assets/Me_circle_325px.png";

const Navbar = () => {
  const baseClass = "main-font rounded-t-lg l-4  text-white border border-white px-8 py-2 mx-2";
  const activeClass =
    "main-font bg-white rounded-t-lg l-4  text-black border border-white font-bold px-8 py-2 mx-2";
  return (
    <Panel className="sticky top-0 flex bg-black border border-white items-center px-10 pb-0">
        
        <img src={Logo} alt="Logo" className="mr-10 mx-3 h-10 w-auto -mt-5"/>
  
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Home
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
