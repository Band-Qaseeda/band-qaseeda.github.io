import { Helmet } from "react-helmet";

/** UI */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
 const l = useLocation();
 const [openMenu, setOpenMenu] = useState(false);
 useEffect(() => {
  window.scrollTo(0, 0);
 }, [l]);
 return (
  <>
   <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
     href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&DM+Serif+Text:ital@0;1&display=swap"
     rel="stylesheet"
    />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
   </Helmet>
   <main id="app">
    <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}></Navbar>
    <div className="min-h-[50vh]" onClick={() => setOpenMenu(false)}>
     {children}
    </div>
    <Footer></Footer>
   </main>
  </>
 );
}
