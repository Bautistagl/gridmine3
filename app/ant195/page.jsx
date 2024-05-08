'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import HostingCards from '@/components/Hosting/HostingCards';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ShopComponents/ProductCard';
import ContactProd from '@/components/ShopComponents/ContactProd';
import Schedule from '@/components/ShopComponents/Schedule';

export default function Ant195() {
  return (
    <div className={styles.main}>
      <Navbar />
      <ProductCard
        title="Antminer S21 (195 TH)"
        description="The Antminer S21 is an SHA-256 algorithm mining equipment manufactured by Bitmain. It is able to mine Bitcoin with a maximum hashrate of 195TH/s with a power consumption of 3413W."
        title2="SHA-256"
        description2="Algorithm"
        title3="195 TH/s"
        description3="Hashrate"
        title4="3413w"
        description4="Consumption"
      />
      <h1 className="title-contactProd">Request Price</h1>
      <span className="span-contactProd">
        Reach out to us with this contact form and we will get back to you as
        fast as possible.
      </span>
      <ContactProd />
      <Schedule />
    </div>
  );
}
