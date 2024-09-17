import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** UI */
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Showcase from "./pages/Showcase";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { ShowcaseID } from "./pages/ShowcaseID";

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
            path="/showcase"
            element={
              <Layout>
                <Showcase />
              </Layout>
            }
          ></Route>

          <Route
            path="/showcase/:id"
            element={
              <Layout>
                <ShowcaseID />
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
            path="/about-us/team"
            element={<Layout>Our Team</Layout>}
          ></Route>

          <Route
            path="/about-us/team/:name"
            element={<Layout>Our Team</Layout>}
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
