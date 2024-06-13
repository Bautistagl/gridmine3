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
              Como funciona el hosting?{' '}
            </span>
            <div className={selected === 1 ? 'linea-selected' : 'linea'}> </div>

            {selected === 1 ? (
              <div className="parrafo-features-landing">
                Es simple. Compras las máquinas a través nuestro. Las
                configuramos y comienzas a minar Bitcoin. Cada mes pagarás el
                costo de electricidad más una tarifa del 10% por tus máquinas.
                ¡Eso es todo!
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
              Cuanto cuesta?{' '}
            </span>
            <div className={selected === 2 ? 'linea-selected' : 'linea'}> </div>
            {selected === 2 ? (
              <div className="parrafo-features-landing">
                Cobramos tan solo $0.058/kWh todo incluido. Por ejemplo, un S19k
                Pro cuesta aproximadamente $119 al mes.
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
              Hay alguna otra tarifa?{' '}
            </span>
            <div className={selected === 3 ? 'linea-selected' : 'linea'}> </div>

            {selected === 3 ? (
              <div className="parrafo-features-landing">
                Cargamos un 10% de la ganancia bruta.
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
              Cuál es la tarifa de configuración?{' '}
            </span>
            <div className={selected === 4 ? 'linea-selected' : 'linea'}> </div>
            {selected === 4 ? (
              <div className="parrafo-features-landing">
                La tarifa de configuración es un pago único que se realiza en el
                momento de la instalación.
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
              Que pasa cuando se termina mi contrato?{' '}
            </span>
            <div className={selected === 5 ? 'linea-selected' : 'linea'}> </div>
            {selected === 5 ? (
              <div className="parrafo-features-landing">
                Opción de renovar por otros 12 meses, de lo contrario, enviamos
                tus máquinas de vuelta a tu domicilio a tu costo.
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
              Que pasa si se rompe mi minero?{' '}
            </span>
            <div className={selected === 6 ? 'linea-selected' : 'linea'}> </div>
            {selected === 6 ? (
              <div className="parrafo-features-landing">
                Podemos dar servicio y reparar máquinas utilizando piezas
                originales, reduciendo significativamente el tiempo de
                inactividad típico de las reparaciones. Nuestros técnicos de
                reparación, certificados, capacitados y dedicados, pueden
                diagnosticar problemas rápidamente y realizar las reparaciones
                necesarias.
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
              Todavía tenes preguntas?{' '}
            </span>
            <div className={selected === 8 ? 'linea-selected' : 'linea'}> </div>
            {selected === 8 ? (
              <div className="parrafo-features-landing">
                Agendá una llamada!.
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
