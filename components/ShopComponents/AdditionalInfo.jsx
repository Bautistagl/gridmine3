import React, { useState } from 'react';

const AdditionalInfo = () => {
  const [activeSection, setActiveSection] = useState('shipping');

  const renderContent = () => {
    switch (activeSection) {
      case 'shipping':
        return (
          <>
            <h2>Procesamiento y tiempo de envío</h2>
            <span>
              Todos los pedidos serán enviados según el lote de entrega en el
              pedido. La máquina se enviará en 3-7 días desde el almacén, en el
              caso de pedidos al por mayor, nos podría tomar uno o dos días
              extra. Siempre tratamos de hacer los envíos a nuestros clientes LO
              MÁS RÁPIDO POSIBLE. Enviamos el producto por medio de (DHL
              Express/UPS/ARAMEX/TNT) después de que el pago completo del pedido
              ha sido verificado (el pago a través de transferencia bancaria
              (T/T tarda 3- 7 días hábiles) a través de la pasarela de pago de
              criptomonedas tomaría un par de horas o un máximo de 1 día hábil
              para verificar la transacción). La entrega internacional
              generalmente toma alrededor de 5-8 días hábiles. El envío DDP
              puede tomar de 8 a 10 días. *Todas las ventas son definitivas y no
              reembolsables. En cualquier término.
            </span>
          </>
        );
      case 'payment':
        return (
          <>
            <h2>Políticas de pago</h2>
            <span>
              Paga con cryptomonedas (Paga con Bitcoin | Usdt | Ethereum |
              Litecoin | Dogecoin ) Pago aceptable. Todos los productos que
              aparecen en nuestro sitio web tienen un precio en dólares
              estadounidenses.
            </span>
          </>
        );

      default:
        return (
          <>
            <h2>Procesamiento y tiempo de envío</h2>
            <span>
              La máquina se enviará en 5-10 días hábiles, en el caso de pedidos
              al por mayor, nos podría tomar uno o dos días extra. Siempre
              tratamos de hacer los envíos a nuestros clientes LO MÁS RÁPIDO
              POSIBLE. Enviamos el producto por medio de (DHL Express) después
              de que el pago completo del pedido ha sido verificado, a través de
              la pasarela de pago de criptomonedas tomaría un par de horas o un
              máximo de 1 día hábil para verificar la transacción. *Todas las
              ventas son definitivas y no reembolsables. En cualquier término.
            </span>
          </>
        );
    }
  };

  return (
    <div className="additionalInfo">
      <div className="tabs">
        <button onClick={() => setActiveSection('shipping')}>
          Procesamiento y tiempo de envío
        </button>
        <button onClick={() => setActiveSection('payment')}>
          Políticas de pago
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AdditionalInfo;
