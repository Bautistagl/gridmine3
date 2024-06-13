'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import NavbarMobile from '@/components/NavbarMobile';

export default function Contact() {
  return (
    <div className={styles.main}>
      <Navbar />
      <NavbarMobile />
      <ContactBanner />
      <Footer />
    </div>
  );
}
