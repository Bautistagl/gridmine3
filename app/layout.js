import { Inter } from "next/font/google";
import "./globals.css";
import "./dashboard/dashboard.css"
import "./navbar.css"
import "./banner.css"
import "./faqs.css"
import "./cardsLanding.css"
import "./singleSupp.css"
import "./footer.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grid Mine",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
