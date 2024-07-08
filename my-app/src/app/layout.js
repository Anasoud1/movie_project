'use client';
import "./globals.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import useAuth from "./hooks/useAuth";
import UserAuth from "./hooks/useContext";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight:['500', '700','900'] });


export default function RootLayout({ children }) {
  const isAutentified = useAuth();
 

  const values = {isAutentified}

  return (
    <html lang="en">
      <body className={montserrat.className}>
      <div className="overlay"></div>
      <section className="container">
      <UserAuth.Provider value={values}>
          <Header/>
          {children}
          <Footer/>
      </UserAuth.Provider>
         
      </section>
      
    
      </body>
    </html>
  );
}
