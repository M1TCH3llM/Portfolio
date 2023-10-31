import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Loading from "../src/components/Loading";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Design from "./pages/Design";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Develop from "./pages/Develop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/develop" element={<Develop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
