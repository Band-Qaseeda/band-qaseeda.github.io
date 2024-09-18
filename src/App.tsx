import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/** UI */
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Showcase from "./pages/Showcase";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { ShowcaseID } from "./pages/ShowcaseID";
import { Team } from "./pages/Team";
import { TeamID } from "./pages/TeamID";

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
          />

          <Route
            path="/showcase"
            element={
              <Layout>
                <Showcase />
              </Layout>
            }
          />

          <Route
            path="/showcase/:id"
            element={
              <Layout>
                <ShowcaseID />
              </Layout>
            }
          />

          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />

          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />

          <Route
            path="/about-us"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/about-team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />

          <Route
            path="/biography/:prefix"
            element={
              <Layout>
                <TeamID />
              </Layout>
            }
          />

          <Route
            path="/contact-us"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          <Route path="/about" element={<Navigate to="/about-us" />} />
          <Route
            path="/about/team"
            element={<Navigate to="/about-us/team" />}
          />
          <Route path="/contact" element={<Navigate to="/contact-us" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
