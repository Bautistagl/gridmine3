'use client';

import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import { useInView } from 'react-intersection-observer';
import Banner from "@/components/Banner/Banner";
import Support from "@/components/ContactLanding/Support";
import Footer from "@/components/Footer";
import React, { useRef } from "react";

import Link from "next/link";
import FloatingWhatsAppButton from "@/components/WppFijo";
import Schedule from "@/components/ShopComponents/Schedule";
import NavbarMobile from "@/components/NavbarMobile";
import Head from "next/head";
import Image from "next/image";
import FeaturesSection from "@/components/ShopLanding/Shop";
import BusinessModelSection from "@/components/SegundaSeccion/CardsLanding";
import EnvironmentalSection from "@/components/Facilities/Facilities";
import AboutUsSection from "@/components/Faqs/Faqs";
import Contact from "./contact/page";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Banner/Banner";

export default function Home() {
  const contactFormRef = useRef(null);
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const fadeInStylesLeft = {
    opacity: 1,
    transform: "translateX(-50px)",
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
  };

  return (
    <>
      <Head>
        <title>Grid Mine</title>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          />
        </noscript>
        <style>{`
           
           body { font-family: 'Montserrat', sans-serif; }
           `}</style>
        <meta
          name="description"
          content="Compra tu minero y hostealo en nuestras instalaciones con la mejor rentabilidad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Grid Mine" />
        <meta
          name="keywords"
          content="Mineros, Mineria, Hosting, Hosting Mineros, Bitcoin, Ethereum, Dogecoin, Asics, btc"
        />
      </Head>
      <main className={styles.main}>
        <Navbar scrollToContactForm={scrollToContactForm} />

        <HeroSection />
        <FeaturesSection />

        <BusinessModelSection />
        <EnvironmentalSection />
        <AboutUsSection />
        <Support />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
