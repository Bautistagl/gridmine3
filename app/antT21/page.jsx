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

export default function Ant120() {
  return (
    <div className={styles.main}>
      <Navbar />
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
        price2="US$3000"
        version1="195 Th/s - In Stock"
        version2="188 Th/s - In Stock"
      />
      <WhatsAppButton message="Hola, estoy interesado en el Antminer T21." />
      <Specifications />
      <h1 className="title-contactProd">Request Price</h1>
      <span className="span-contactProd">
        Reach out to us with this contact form and we will get back to you as
        fast as possible.
      </span>
      <ContactProd />
      <AdditionalInfo />
      <Schedule />
      <Footer />
    </div>
  );
}
