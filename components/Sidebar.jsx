'use client'

import Link from 'next/link'
import React from "react";

import { useRouter } from "next/navigation";

const Sidebar = ({}) => {
  const router = useRouter();

  return (
    <>
      <nav className="sideNavbar">
        <ul className="sideNavbar-ul">
          <Link href="/dashboard">
            <img className="icono-sideBar-grid" src="/gridCorregido.png" />
          </Link>
          <Link href="/dashboard">
            <li style={{ marginBottom: "3vh" }} className="sideNavbar-li">
              <img className="icon-sideNavbar2" src="/logoHome.png" /> Informes{" "}
            </li>
          </Link>
          <li className="titulo-servicios-sidenavbar"> SERVICIOS </li>
          <Link href="/mining">
            <li className="sideNavbar-li">
              <img className="icon-sideNavbar" src="/miningLogo.png" /> Minería
            </li>
          </Link>

          <Link href="/billing">
            <li style={{ marginBottom: "3vh" }} className="sideNavbar-li">
              <img className="icon-sideNavbar" src="/logoBilling.png" />{" "}
              Facturación
            </li>
          </Link>

          <button style={{ marginTop: "7vh" }} className="logout-sidebar">
            {" "}
            Logout{" "}
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar