'use client';
import Navbar from '@/components/Navbar';
import styles from '.././page.module.css';
import HostingCards from '@/components/Hosting/HostingCards';
import Footer from '@/components/Footer';

export default function Hosting() {
  return (
    <div className={styles.main}>
      <Navbar />
      <h2 className="title-hosting">
        Check out our awesome hosting facilities.
      </h2>
      <div className="box-hosting">
        <span>1MW</span>
      </div>
      <span className="span-hosting">CHUBUT, ARGENTINA</span>
      <HostingCards />
      <Footer />
    </div>
  );
}
