import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="fondo-footer">
      <section className="container-footer">
        <Image alt="" src="/gridMineBlanco.svg" height={80} width={180} />
        <div className="redes-footer">
          <a href="https://www.linkedin.com/company/grid-mine/">
            <img
              style={{ marginLeft: '0px' }}
              className="icon-redes"
              src={'/linkedin.png'}
            />
          </a>

          <a href="//www.discord.com">
            <img className="icon-redes" src={'/discord (1).png'} />
          </a>

          <a href="//www.twitter.com">
            <img className="icon-redes" src={'/twitter.png'} />
          </a>
          <a href="https://www.instagram.com/gridmine_io/">
            <img className="icon-redes" src={'/instagram.png'} />
          </a>
        </div>

        <div className="licencias-footer">
          <span>
            {' '}
            <a href="#"> © 2024 Grid Cloud </a>{' '}
          </span>
          <span>
            {' '}
            <a href="#"> Políticas de Privacidad </a>{' '}
          </span>
          <span>
            {' '}
            <a href="#"> Términos y condiciones </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
