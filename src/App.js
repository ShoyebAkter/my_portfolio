import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
import Home from "../src/components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import NavBar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/contact" element={<ContactForm />} /> */}
          {/* <Route path="*" element={<PageNotFound/>} /> */}
          
        </Routes>
        
        <Footer />
      
    </Router>
  );
}

export default App;
