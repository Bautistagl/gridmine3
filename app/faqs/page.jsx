'use client';

import Preguntas from '@/components/Faqs/Preguntas';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import Head from 'next/head';
import React, { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Grid Mine FAQs</title>
        <meta
          name="description"
          content="Despeja todas tus dudas sobre nuestros servicios"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="faqs-container">
        <Navbar />
        <NavbarMobile />
        <div className="faqSection">
          <Preguntas />
        </div>
      </main>
    </>
  );
}
