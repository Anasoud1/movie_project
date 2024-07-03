import "./globals.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight:['500', '700','900'] });



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
      <div className="overlay"></div>
        <section className="container">
            <Header/>
            {children}
            <Footer/>
        </section>
      </body>
    </html>
  );
}
