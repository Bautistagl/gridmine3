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
      <nav className={`navbar ${isSticky ? 'sticky' : ''}  `}>
        <div className="nav-items">
          <Link href="/">
            <img className="navbar-logo" src="/gridMineBlanco.svg" />
          </Link>
          <div className="un-contenedor">
            <div
              onClick={() => {
                setDropdown2(!dropdown2);
              }}
              className="nav-title">
              Productos
              <img className="downNavbar" src="/downNavbar.png" alt="" />
            </div>
            <Link href="/faqs">
              <div className="nav-title">Preguntas Frecuentes</div>
            </Link>
            <Link href="/hosting">
              <div className="nav-title">Hosting</div>
            </Link>
            <Link href="/contact">
              <div className="nav-title">Agendar llamada</div>
            </Link>
          </div>
          <div className="login-register">
            <Link href="/login">
              <button className="boton-landing1">Login</button>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`container-productos ${dropdown2 ? 'show' : ''} ${
          isSticky ? 'sticky' : ''
        }`}
        onMouseOver={() => {
          setDropdown2(true);
        }}
        onMouseLeave={() => setDropdown2(false)}>
        <div className="productos">
          <div className="descripcion-productos">
            <Link href="/antT21">
              <span className="titulo-productos">Antminer T21(190 TH)</span>
            </Link>
            <span className="subtitulo-productos">
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
        <div className="productos">
          <div className="descripcion-productos">
            <Link href="/antS19K">
              <span className="titulo-productos">Antminer S19K(120 TH)</span>
            </Link>
            <span className="subtitulo-productos">
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
        <div className="productos">
          <div className="descripcion-productos">
            <Link href="/antS21">
              <span className="titulo-productos">Antminer S21(195 TH)</span>
            </Link>
            <span className="subtitulo-productos">
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
