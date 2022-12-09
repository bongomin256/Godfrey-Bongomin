// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ToTopScroll from "./components/ToTopScroll";

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <ToTopScroll />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Godfrey-Bongomin" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
