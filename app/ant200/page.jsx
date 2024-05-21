'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import ProductCard from '@/components/ShopComponents/ProductCard';
import ContactProd from '@/components/ShopComponents/ContactProd';
import Schedule from '@/components/ShopComponents/Schedule';
import Footer from '@/components/Footer';

export default function Ant200() {
  return (
    <div className={styles.main}>
      <Navbar />
      <ProductCard
        title="Antminer S21 (200 TH)"
        description="The Antminer S21 is an SHA-256 algorithm mining equipment manufactured by Bitmain. It is able to mine Bitcoin with a maximum hashrate of 200TH/s with a power consumption of 3500W."
        title2="SHA-256"
        description2="Algorithm"
        title3="200 TH/s"
        description3="Hashrate"
        title4="3500w"
        description4="Consumption"
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
