import React, { useState } from 'react';
import Image from 'next/image';

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbarMobile">
        <div className="logoMobile">
          <img
            alt="logo-navbar"
            className="navbar-logo2"
            src="/gridMineBlanco.svg"
          />
        </div>
        <div className="hamburgerMobile" onClick={toggleMenu}>
          <Image src="/menu.png" alt="Menu" width={30} height={30} />
        </div>
      </nav>

      {menuOpen && (
        <div className="menuNavMobile">
          <div className="items-menu">
            <div className="close-icon" onClick={toggleMenu}>
              <Image src="/close.png" alt="Close Menu" width={30} height={30} />
            </div>
            <ul>
              <span>Productos</span>
              <li>
                <a href="/antT21">Antiminert21</a>
              </li>
              <li>
                <a href="/antS21">AntminerS21</a>
              </li>
              <li>
                <a href="/antS19K">AntminerS19K</a>
              </li>
              <li>
                <a href="/hosting">Hosting</a>
              </li>
              <span>Consultas</span>
              <li>
                <a href="/faqs">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="/contact">Agenda una llamada</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
