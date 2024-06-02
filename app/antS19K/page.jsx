'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import ProductCard from '@/components/ShopComponents/ProductCard';
import ContactProd from '@/components/ShopComponents/ContactProd';
import Schedule from '@/components/ShopComponents/Schedule';
import Footer from '@/components/Footer';
import Specifications from '@/components/ShopComponents/Specifications';
import WhatsAppButton from '@/components/BotonWpp';

export default function Ant200() {
  return (
    <div className={styles.main}>
      <Navbar />
      <ProductCard
        title="Antminer S19k Pro (120 TH)"
        description="El Antminer S19K Pro es fabricado por Bitmain y realiza minado con el algoritmo SHA-256 que ejecuta un hashrate máximo de 120Th/s para un consumo de energía de sólo 2760W."
        title2="SHA-256"
        description2="Algorithm"
        title3="120 TH/s"
        description3="Hashrate"
        title4="2760w"
        description4="Consumption"
      />
      <WhatsAppButton message="Hola, estoy interesado en el Antminer S19k Pro (120 Th/s)." />
      <Specifications />
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
