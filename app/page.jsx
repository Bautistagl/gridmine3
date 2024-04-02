'use client'

import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import { useInView } from "react-intersection-observer";
import Banner from "@/components/Banner";
import CardsLanding from "@/components/CardsLanding";
import Faqs from "@/components/Faqs";

export default function Home() {
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
    <div className={styles.main}>
     <Navbar/>
     <div className="banner-container">
    <Banner
       
        title='Mineria de Bitcoin: Tu Solucion Aquia.'
        subtitle='Grid simplifies the deployment of your applications to a decentralized cloud, allowing you to get started with just a few clicks. As your projects expand, grid gives you the freedom to adapt your infrastructure to your exact needs, ensuring a scalable and customizable environment.'
      />
       <img 
         ref={ref}
         style={inView ? fadeInStylesLeft : {}}
       src="/iluAsic.svg" alt="" className="ilustracion-bannerGrande" />
       </div>
       <button> Get started now</button>
       <CardsLanding/>
       <Faqs/>
    </div>
  );
}
