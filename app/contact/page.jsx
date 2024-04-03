'use client'
import Navbar from "@/components/Navbar";
import styles from ".././page.module.css";
import ContactBanner from "@/components/ContactBanner";

export default function Contact  (){
  return (
    <div className={styles.main}>
      <Navbar/>
        <ContactBanner/>

    </div>
  )
}

