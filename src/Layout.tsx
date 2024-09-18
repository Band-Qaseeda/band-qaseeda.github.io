import { Helmet } from "react-helmet";

/** UI */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Gotop from "./components/Gotop";

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
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&DM+Serif+Text:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main id="app">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="min-h-[50vh]" onClick={() => setOpenMenu(false)}>
          {children}
        </div>
        <Footer />
        <Gotop />
      </main>
    </>
  );
}
