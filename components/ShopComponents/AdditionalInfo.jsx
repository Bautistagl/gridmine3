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
              Wire transfer Via Bank, Western Union Via Online Or Crypto
              Currency (Pay with Bitcoin | Ethereum | Bitcoin Cash | Litecoin )
              Pago aceptable. Todos los productos que aparecen en nuestro sitio
              web tienen un precio en dólares estadounidenses. Ya que Bitcoin
              tiene un precio volátil se mostrará la cantidad total de BTC a
              pagar en el momento de pago *Todos los precios de las máquinas son
              fluctuantes y dependen del comportamiento del mercado.
            </span>
          </>
        );
      case 'taxes':
        return (
          <>
            <h2>Impuestos y derechos aduaneros</h2>
            <span>
              Primero: Realizamos envíos principalmente por medio de (DHL
              Express/ UPS/ ARAMEX/ TNT). Second : Some Country We have DDP
              (Delivery Duty Paid) Shipping. We handle customs and door-to-door
              delivery, and taxes and duties are included in the website price.
              Clients do not need to pay any duties or customs charges for DDP
              shipping countries. DDP Shipping Country List : United States,
              Germany, Russia, Dubai, United Kingdom, France, Belgium,
              Luxembourg, Netherlands, Denmark, Czech Republic, Poland, Austria,
              Ireland, Portugal, Sweden, Spain, Vietnam, Thailand, Malaysia
              (Note : Some Country can send Only More than 30Kg). Debe solicitar
              manualmente el envío DDP: Info@cryptominerbros.com. En países sin
              envío DDP o con envío normal, le ayudamos a reducir su impuesto al
              hacer la factura más baja. Our product are Excluded of all value
              added taxes and customs duties sold by CRYPTO MINER BROS. You will
              be solely responsible for paying any outstanding taxes and duties
              as per your country’s law and customs. If any miner needs to be
              returned to Hong Kong, the client will be responsible for paying
              the additional shipping costs
            </span>
          </>
        );

      default:
        return (
          <>
            <h2>Impuestos y derechos aduaneros</h2>
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
        <button onClick={() => setActiveSection('taxes')}>
          Impuestos y derechos aduaneros
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AdditionalInfo;
