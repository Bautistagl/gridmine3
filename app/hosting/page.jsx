'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import HostingCards from '@/components/Hosting/HostingCards';
import Footer from '@/components/Footer';
import Schedule from '@/components/ShopComponents/Schedule';
import Shop from '@/components/ShopLanding/Shop';
import NavbarMobile from '@/components/NavbarMobile';
import Head from 'next/head';

export default function Hosting() {
  return (
    <>
      <Head>
        <title>Hosting Grid Mine</title>
        <meta
          name="description"
          content="Tu mejor opción para hosting de mineros"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <NavbarMobile />
        <h2 className="title-hosting">
          Chequea nuestras facilidades para el hosting de mineros.
        </h2>
        <div className="box-hosting">
          <span>1MW</span>
        </div>
        <span style={{ marginTop: '10px' }} className="span-hosting">
          CHUBUT, ARGENTINA
        </span>
        <HostingCards />
        <Schedule />
        <Shop />
        <Footer />
      </main>
    </>
  );
}
