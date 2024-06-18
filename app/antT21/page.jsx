'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import HostingCards from '@/components/Hosting/HostingCards';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ShopComponents/ProductCard';
import ContactProd from '@/components/ShopComponents/ContactProd';
import Schedule from '@/components/ShopComponents/Schedule';
import Specifications from '@/components/ShopComponents/Specifications';
import WhatsAppButton from '@/components/BotonWpp';
import AdditionalInfo from '@/components/ShopComponents/AdditionalInfo';
import HostingButton from '@/components/HostingButton';
import NavbarMobile from '@/components/NavbarMobile';
import Head from 'next/head';

export default function Ant120() {
  return (
    <>
      <Head>
        <title>Antminer T21 BTC Miner Grid Mine</title>
        <meta
          name="description"
          content="Producto Antminer T21 BTC Miner Grid Mine"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <NavbarMobile />
        <ProductCard
          title="Antminer T21 BTC Miner (190 TH)"
          description="El Antminer T21 es fabricado por Bitmain y realiza minado con el algoritmo SHA-256 que ejecuta un hashrate máximo de 190Th/s para un consumo de energía de sólo 3610W."
          title2="SHA-256"
          description2="Algorithm"
          title3="190 TH/s"
          description3="Hashrate"
          title4="3610W"
          description4="Consumption"
          price1="US$1000"
          version1="Lote Junio"
          version2="Lote Julio"
          image="/antminer21.png"
          heigth={350}
          width={400}
        />
        {/* <div style={{ marginTop: '40px' }}>
          <WhatsAppButton message="Hola, estoy interesado en comprar el Antminer T21. Me gustaría recibir más información al respecto. Gracias!" />
          <HostingButton message="Hola, estoy interesado en el hosting del Antminer T21. Me gustaría recibir más información al respecto. Gracias!" />
        </div> */}
        <Specifications
          fabricante="Bitmain"
          modelo="Antminer T21 190Th/s"
          lanzamiento="Marzo 2024"
          tamañoSin="400 X 195 X 290mm"
          tamañoCon="570 X 316 X 430mm"
          pesoNeto="16400g"
          pesoBruto="18100g"
          nivelDeSonido="75db"
          ventiladores="2"
          modoDeConexionDeRed="RJ45 Ethernet 10/100m"
          potencia="3610W"
          eficienciaEnergetica="-"
          voltaje="380-415V"
          interfaz="Ethernet"
          temperaturaDeAlmacenamiento="-40-85"
          temperatura="0 - 45 °C"
          humedad="10 - 90 %"
        />
        <h1 className="title-contactProd">Request Price</h1>
        <span className="span-contactProd">
          Reach out to us with this contact form and we will get back to you as
          fast as possible.
        </span>
        <ContactProd />
        <AdditionalInfo />
        <Schedule />
        <Footer />
      </main>
    </>
  );
}
