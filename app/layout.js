import { Inter } from 'next/font/google';
import './globals.css';

import './navbar.css';

import "../components/Banner/banner.css";
import "../components/Faqs/faqs.css";
import "../components/ContactLanding/cardsLanding.css";
import "../components/ContactLanding/singleSupp.css";
import "./footer.css";

import '../components/Facilities/facilities.css';
import '../components/ShopLanding/shop.css';
import '../components/ShopComponents/prodFeat.css';
import '../components/Dashboard/dashboard.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Grid Mine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
