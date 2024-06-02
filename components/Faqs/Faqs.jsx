import Image from 'next/image';
import React, { useState } from 'react';

const Faqs = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="contenedor-mobile-button">
      <div className="titulo-asic"> FAQS</div>
      <div style={{ marginTop: '10px' }} className="contenedor-flex-only3">
        <div className="button-landing2">
          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(1)}
              className={
                selected === 1 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              How does this work?{' '}
            </span>
            <div className={selected === 1 ? 'linea-selected' : 'linea'}> </div>

            {selected === 1 ? (
              <div className="parrafo-features-landing">
                It&apos;s simple. Purchase machines through us. We set them up,
                and you start earning Bitcoin. Each month you will your
                electricity cost + 10% fee for your machines. That&apos;s it
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(2)}
              className={
                selected === 2 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              How much does this cost?{' '}
            </span>
            <div className={selected === 2 ? 'linea-selected' : 'linea'}> </div>
            {selected === 2 ? (
              <div className="parrafo-features-landing">
                We charge as low as $0.058/kWh all in. For example; an S19k Pro
                costs about $119 per month.
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(3)}
              className={
                selected === 3 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              Are there any other fees?{' '}
            </span>
            <div className={selected === 3 ? 'linea-selected' : 'linea'}> </div>

            {selected === 3 ? (
              <div className="parrafo-features-landing">
                Cargamos un 10% de la ganancia bruta
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(4)}
              className={
                selected === 4 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              What is the set up fee?{' '}
            </span>
            <div className={selected === 4 ? 'linea-selected' : 'linea'}> </div>
            {selected === 4 ? (
              <div className="parrafo-features-landing">
                The set up fee is a one-time payment payable at the time of
                installation.
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(5)}
              className={
                selected === 5 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              What happens when my contract is up?{' '}
            </span>
            <div className={selected === 5 ? 'linea-selected' : 'linea'}> </div>
            {selected === 5 ? (
              <div className="parrafo-features-landing">
                Option to renew for another 12 months, otherwise we ship your
                machines back to you at your cost.
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(6)}
              className={
                selected === 6 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              What happens if my miner breaks?{' '}
            </span>
            <div className={selected === 6 ? 'linea-selected' : 'linea'}> </div>
            {selected === 6 ? (
              <div className="parrafo-features-landing">
                We&apos;re able to service and repair machines, using original
                parts, materially reducing the downtime typically involved with
                repairs. Our certified, trained and dedicated repair technicians
                can promptly diagnose problems and make necessary repairs.
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="contenedor-features2">
            <span
              onClick={() => setSelected(8)}
              className={
                selected === 8 ? 'span-landing-selected2' : 'span-landing2'
              }>
              {' '}
              Still have questions?{' '}
            </span>
            <div className={selected === 8 ? 'linea-selected' : 'linea'}> </div>
            {selected === 8 ? (
              <div className="parrafo-features-landing">
                No worries! Book a discovery call here to learn more.
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
