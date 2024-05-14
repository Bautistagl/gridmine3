'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MenuMobile from './MenuMobile';
function Navbar({ scrollToContactForm }) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [selected, setSelected] = useState(false);

  const toggle = () => {
    if (selected === true) {
      return setSelected(false);
    }
    setSelected(true);
  };

  const toggleMenu = () => {
    setMenu(!menu);
    setSelected(false);
  };

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
            <img className="navbar-logo" src="/gridCorregido.png" />
          </Link>
          <div onClick={() => toggleMenu()} className="hamburguer-navbar">
            {menu === false ? (
              <img className="hamburger-logo" src={'/menu.png'} />
            ) : (
              <img className="hamburger-logoCerrado" src={'/menuCerrado.png'} />
            )}{' '}
          </div>
          <div className="un-contenedor">
            <div
              onClick={() => {
                setDropdown2(!dropdown2);
                setDropdown(false);
              }}
              className="nav-title">
              Shop
              <img className="downNavbar" src="/downNavbar.png" alt="" />
            </div>
            <Link href="/contact">
              <div className="nav-title">Book a demo</div>
            </Link>
            <Link href="/hosting">
              <div className="nav-title"> Hosting </div>
            </Link>
            <div
              onClick={() => {
                scrollToContactForm();
              }}
              className="nav-title">
              Contact{' '}
            </div>
          </div>
          <div className="login-register">
            <Link href="/login">
              <button className="boton-landing1">Login</button>
            </Link>
          </div>
        </div>
      </nav>
      {menu ? <MenuMobile /> : ''}

      <div
        className={`container-productos ${dropdown2 ? 'show' : ''} ${
          isSticky ? 'sticky' : ''
        }`}
        onMouseOver={() => {
          setDropdown2(true);
          setDropdown(false);
        }}
        onMouseLeave={() => setDropdown2(false)}>
        <div className="productos">
          <img alt="" className="logo-productos" src={'/solution.png'} />
          <div className="descripcion-productos">
            <Link href="/ant200">
              <span className="titulo-productos">Antminer S21(200 TH)</span>
            </Link>
            <span className="subtitulo-productos">
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
        <div className="productos">
          <img alt="" className="logo-productos" src={'/blog.png'} />
          <div className="descripcion-productos">
            <Link href="/ant195">
              <span className="titulo-productos">Antminer S21(195 TH)</span>
            </Link>
            <span className="subtitulo-productos">
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>

        <div className="productos">
          <img alt="" className="logo-productos" src={'/blog.png'} />
          <div className="descripcion-productos">
            <Link href="/ant188">
              <span className="titulo-productos">Antminer S21(188 TH)</span>
            </Link>
            <span className="subtitulo-productos">
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
        <div className="productos">
          <img alt="" className="logo-productos" src={'/blog.png'} />
          <div className="descripcion-productos">
            <Link href="/ant120">
              <span className="titulo-productos">
                Antminer S19k Pro (120 TH)
              </span>
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
