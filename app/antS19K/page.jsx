'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import ProductCard from '@/components/ShopComponents/ProductCard';
import ContactProd from '@/components/ShopComponents/ContactProd';
import Schedule from '@/components/ShopComponents/Schedule';
import Footer from '@/components/Footer';
import Specifications from '@/components/ShopComponents/Specifications';
import WhatsAppButton from '@/components/BotonWpp';
import HostingButton from '@/components/HostingButton';
import NavbarMobile from '@/components/NavbarMobile';

export default function Ant200() {
  return (
    <div className={styles.main}>
      <Navbar />
      <NavbarMobile />
      <ProductCard
        title="Antminer S19k Pro (120 TH)"
        description="El Antminer S19K Pro es fabricado por Bitmain y realiza minado con el algoritmo SHA-256 que ejecuta un hashrate máximo de 120Th/s para un consumo de energía de sólo 2760W."
        title2="SHA-256"
        description2="Algorithm"
        title3="120 TH/s"
        description3="Hashrate"
        title4="2760w"
        description4="Consumption"
        price1="US$1000"
        price2="US$3000"
        version1="195 Th/s - In Stock"
        version2="188 Th/s - In Stock"
        image="/antminer.webp"
        heigth={350}
        width={450}
      />

      <div style={{ marginTop: '40px' }}>
        <WhatsAppButton message="Hola, estoy interesado en el Antminer S19k Pro (120 Th/s)." />
        <HostingButton message="Hola, estoy interesado en el hosting del Antminer S19k Pro (120 Th/s)." />
      </div>
      <Specifications
        fabricante="Bitmain"
        modelo="Antminer S19K Pro 120Th/s"
        lanzamiento="Septiembre 2023"
        tamañoSin="400 X 195 X 290mm"
        tamañoCon="570 X 316 X 430mm"
        pesoNeto="12850g"
        pesoBruto="14500g"
        nivelDeSonido="75db"
        ventiladores="4"
        modoDeConexionDeRed="RJ45 Ethernet 10/100m"
        potencia="2760W"
        eficienciaEnergetica="23 ±5%"
        voltaje="200-240V"
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
    </div>
  );
}
