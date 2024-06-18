'use client';

import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import { useInView } from 'react-intersection-observer';
import Banner from '@/components/Banner/Banner';
import CardsLanding from '@/components/SegundaSeccion/CardsLanding';
import Faqs from '@/components/Faqs/Faqs';
import Support from '@/components/ContactLanding/Support';
import Footer from '@/components/Footer';
import React, { useRef } from 'react';
import Facilities from '@/components/Facilities/Facilities';
import Shop from '@/components/ShopLanding/Shop';
import Link from 'next/link';
import FloatingWhatsAppButton from '@/components/WppFijo';
import Schedule from '@/components/ShopComponents/Schedule';
import Powered from '@/components/PoweredLanding';
import NavbarMobile from '@/components/NavbarMobile';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const contactFormRef = useRef(null);
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const ContactForm1 = React.forwardRef((props, ref) => (
    // Renderiza el componente ContactForm y asigna la referencia al elemento principal.
    <div ref={ref}>
      <Support />
    </div>
  ));
  ContactForm1.displayName = 'ContactForm1';
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.7, // Percentage of element visibility to trigger the animation
  });
  const fadeInStylesLeft = {
    opacity: 1,
    transform: 'translateX(-50px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };

  return (
    <>
      <Head>
        <title>Grid Mine</title>
        <meta
          name="description"
          content="Compra tu minero y hostealo en nuestras instalaciones con la mejor rentabilidad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Grid Mine" />
        <meta
          name="keywords"
          content="Mineros, Mineria, Hosting, Hosting Mineros, Bitcoin, Ethereum, Dogecoin"
        />
      </Head>
      <main className={styles.main}>
        <Navbar scrollToContactForm={scrollToContactForm} />
        <NavbarMobile />
        <div className="banner-container">
          <Banner
            title="Mineria de Bitcoin: Tu Solucion Aqui."
            subtitle="Grid Mine simplifica la adquisición y alojamiento de dispositivos ASIC. Nos encargamos de todo el proceso, desde la compra hasta la gestión en nuestros centros de datos seguros. Además, utilizamos gas de venteo para obtener energía sostenible, asegurando un funcionamiento eficiente."
          />
          <Image
            height={450}
            width={750}
            ref={ref}
            style={inView ? fadeInStylesLeft : {}}
            src="/iluAsic.svg"
            alt="ilustracion-banner"
            priority={true}
            className="ilustracion-bannerGrande"
          />
        </div>
        <div className="button learn-more">
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <Link href="/contact">
            <span className="button-text">Comenza</span>
          </Link>
        </div>
        <Shop />
        <Powered />
        <CardsLanding />
        <Facilities />
        <Faqs />
        <Schedule />
        <ContactForm1 ref={contactFormRef} />
        <Footer />
        <FloatingWhatsAppButton message="Hola, estoy interesado en su servicio. Me gustaría recibir más información al respecto. ¡Gracias!" />
      </main>
    </>
  );
}
