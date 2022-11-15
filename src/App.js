import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Support from "./Components/Support/Support";
import Vercos from "./Components/vercos/Vercos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQS from "./Components/Support/FAQS";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Team from "./Components/About/Team";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Vercos />} />
            <Route path="support" element={<Support />}>
              <Route path="faqs" element={<FAQS />} />
            </Route>
            <Route path="contact-us" element={<Contact />} />
            <Route path="about" element={<About />}>
              <Route path="team" element={<Team />} />
            </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
