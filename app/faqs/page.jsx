'use client';

import Preguntas from '@/components/Faqs/Preguntas';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <Navbar />
      <div className="faqSection">
        <Preguntas />
      </div>
    </div>
  );
}
