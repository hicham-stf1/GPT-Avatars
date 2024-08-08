import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../../../public/logo.png';
import SideBarOption from "./SideBarItem";
import { SiBrandfolder } from "react-icons/si";
import { FaArrowCircleLeft } from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.toggle("sidebar-expanded", hovered || sidebarOpen);
  }, [hovered, sidebarOpen]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto 
          lg:translate-x-0 h-screen overflow-y-clip lg:overflow-y-clip  overflow-x-clip
          no-scrollbar bg-blue-900 transition-all duration-200 
          ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-72"}
           ${hovered || sidebarOpen ? "w-60" : "w-20"}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between p-4">
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <FaArrowCircleLeft color="white" size={20} />
          </button>

          <NavLink end to="/" >
  <div className={`flex w-full  h-16 items-center justify-center transition-all duration-200 ${hovered || sidebarOpen ? 'p-0' : 'ml-[3px]'}`}>
    <img className="w-[3rem] h-[3rem] object-contain" src={logo} alt="logo" />
  </div>
</NavLink>

        </div>

        {/* Links */}
        {/* Add overflow scroll here */}
        <div className="space-y-8 mt-4">
          <ul>
            <SideBarOption
              path="/brands"
              label="Marques"
              icon={SiBrandfolder}
              sidebarExpanded={hovered || sidebarOpen}
              pathname={pathname}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
