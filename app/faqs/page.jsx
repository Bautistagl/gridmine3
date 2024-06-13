'use client';

import Preguntas from '@/components/Faqs/Preguntas';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import React, { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <Navbar />
      <NavbarMobile />
      <div className="faqSection">
        <Preguntas />
      </div>
    </div>
  );
}
