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
import HostingButton from '@/components/HostingButton';
import NavbarMobile from '@/components/NavbarMobile';
import Head from 'next/head';

export default function Ant195() {
  return (
    <>
      <Head>
        <title>Antminer T21 BTC Miner Grid Mine</title>
        <meta name="description" content="Producto Antminer S21 Grid Mine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <NavbarMobile />
        <ProductCard
          title="Antminer S21 (195 Th/s)"
          description="El Antminer S21 es fabricado por Bitmain y realiza minado con el algoritmo SHA-256 que ejecuta un hashrate máximo de 195Th/s - 188Th/s para un consumo de energía de sólo 3412-3290W."
          title2="SHA-256"
          description2="Algorithm"
          title3="195 TH/s"
          description3="Hashrate"
          title4="3412-3290W"
          description4="Consumption"
          price1="US$1000"
          price2="US$3000"
          version1="Lote Junio"
          version2="Lote Julio"
          image="/antminer.webp"
          heigth={450}
          width={550}
        />

        <Specifications
          fabricante="Bitmain"
          modelo="Antminer S21 195-188Th/s"
          lanzamiento="Marzo 2024"
          tamañoSin="400 X 195 X 290mm"
          tamañoCon="570 X 316 X 430mm"
          pesoNeto="15400g"
          pesoBruto="17100g"
          nivelDeSonido="75db"
          ventiladores="4"
          modoDeConexionDeRed="-"
          potencia="3412-3290W"
          eficienciaEnergetica="-"
          voltaje="	220-277"
          interfaz="Ethernet"
          temperaturaDeAlmacenamiento="-20-70"
          temperatura="0 - 45 °C"
          humedad="10 - 90 %"
        />
        <h1 className="title-contactProd">Request Price</h1>
        <span className="span-contactProd">
          Reach out to us with this contact form and we will get back to you as
          fast as possible.
        </span>
        <ContactProd />
        <Schedule />
        <Footer />
      </main>
    </>
  );
}
