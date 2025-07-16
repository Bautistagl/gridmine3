'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar({ scrollToContactForm }) {
  const [dropdown2, setDropdown2] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? "sticky" : ""}  `}>
        <div className="nav-items">
          <Link href="/">
            <img
              alt="logo-gridMine"
              className="navbar-logo"
              src="/logoNuevo3.svg"
            />
          </Link>
        </div>
      </nav>

      <div
        className={`container-productos ${dropdown2 ? "show" : ""} ${
          isSticky ? "sticky" : ""
        }`}
        onMouseOver={() => {
          setDropdown2(true);
        }}
        onMouseLeave={() => setDropdown2(false)}
      >
        <div className="productos">
          <div className="descripcion-productos">
            <Link href="/antT21">
              <span className="titulo-productos">Antminer T21(190 TH)</span>
            </Link>
          </div>
        </div>
        <div className="productos">
          <div className="descripcion-productos">
            <Link href="/antS19K">
              <span className="titulo-productos">Antminer S19K(120 TH)</span>
            </Link>
          </div>
        </div>
        <div className="productos">
          <div className="descripcion-productos">
            <Link href="/antS21">
              <span className="titulo-productos">Antminer S21(195 TH)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
