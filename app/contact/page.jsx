'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import NavbarMobile from '@/components/NavbarMobile';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto Grid Mine</title>
        <meta
          name="description"
          content="Consultanos o agendá una llamada para despejar todas tus dudas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <NavbarMobile />
        <ContactBanner />
        <Footer />
      </main>
    </>
  );
}
