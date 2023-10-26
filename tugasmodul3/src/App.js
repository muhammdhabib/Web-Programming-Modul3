import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Halaman/Home';
import About from './Halaman/About';
import Contact from './Halaman/Contact';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
