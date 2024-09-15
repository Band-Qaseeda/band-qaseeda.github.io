import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** UI */
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Performances from "./pages/Performances";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { PerformancesID } from "./pages/PerformancesID";

function App() {
 return (
  <>
   <Router>
    <Routes>
     <Route
      path="/"
      element={
       <Layout>
        <Home />
       </Layout>
      }
     ></Route>

     <Route
      path="/performances"
      element={
       <Layout>
        <Performances />
       </Layout>
      }
     ></Route>

     <Route
      path="/performances/:id"
      element={
       <Layout>
        <PerformancesID />
       </Layout>
      }
     ></Route>

     <Route
      path="/gallery"
      element={
       <Layout>
        <Gallery />
       </Layout>
      }
     ></Route>

     <Route
      path="/events"
      element={
       <Layout>
        <Events />
       </Layout>
      }
     ></Route>

     <Route
      path="/about-us"
      element={
       <Layout>
        <About />
       </Layout>
      }
     ></Route>

     <Route
      path="/contact-us"
      element={
       <Layout>
        <Contact />
       </Layout>
      }
     ></Route>
    </Routes>
   </Router>
  </>
 );
}

export default App;
