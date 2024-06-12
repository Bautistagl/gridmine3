import React from 'react';

const Specifications = ({
  fabricante,
  modelo,
  lanzamiento,
  tamañoSin,
  tamañoCon,
  pesoNeto,
  pesoBruto,
  nivelDeSonido,
  ventiladores,
  modoDeConexionDeRed,
  potencia,
  eficienciaEnergetica,
  voltaje,
  interfaz,
  temperaturaDeAlmacenamiento,
  temperatura,
  humedad,
}) => {
  return (
    <div className="bitmain-info-container">
      <h2>Bitmain</h2>
      <table className="bitmain-info-table">
        <tbody>
          <tr>
            <th>Fabricante</th>
            <td>{fabricante}</td>
          </tr>
          <tr>
            <th>Modelo</th>
            <td>{modelo}</td>
          </tr>
          <tr>
            <th>Lanzamiento</th>
            <td>{lanzamiento}</td>
          </tr>
          <tr>
            <th>Tamaño sin</th>
            <td>{tamañoSin}</td>
          </tr>
          <tr>
            <th>Tamaño con</th>
            <td>{tamañoCon}</td>
          </tr>
          <tr>
            <th>Peso neto</th>
            <td>{pesoNeto}</td>
          </tr>
          <tr>
            <th>Peso bruto</th>
            <td>{pesoBruto}</td>
          </tr>
          <tr>
            <th>Nivel de sonido</th>
            <td>{nivelDeSonido}</td>
          </tr>
          <tr>
            <th>Ventilador(es)</th>
            <td>{ventiladores}</td>
          </tr>
          <tr>
            <th>Modo de conexión de red</th>
            <td>{modoDeConexionDeRed}</td>
          </tr>
          <tr>
            <th>Potencia</th>
            <td>{potencia}</td>
          </tr>
          <tr>
            <th>Eficiencia energética</th>
            <td>{eficienciaEnergetica}</td>
          </tr>
          <tr>
            <th>Voltaje</th>
            <td>{voltaje}</td>
          </tr>
          <tr>
            <th>Interfaz</th>
            <td>{interfaz}</td>
          </tr>
          <tr>
            <th>Temperatura de almacenamiento</th>
            <td>{temperaturaDeAlmacenamiento}</td>
          </tr>
          <tr>
            <th>Temperatura</th>
            <td>{temperatura}</td>
          </tr>
          <tr>
            <th>Humedad</th>
            <td>{humedad}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
