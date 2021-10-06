import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { SidebarData } from "../components/SidebarData";

export default function Menu() {
  const [sidebar, setSidbar] = useState(false);
  const showSidebar = () => setSidbar(!sidebar);
  return (
    <>
      <div>
        <HiMenu onClick={showSidebar} />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <RiCloseFill className="close-icon" />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
