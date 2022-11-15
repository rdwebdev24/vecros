import React, { useState } from "react";
import Autonomous from "./Components/Autonomous/Autonomous";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Support from "./Components/Support/Support";
import Vercos from "./Components/vercos/Vercos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQS from "./Components/Support/FAQS";
import Contact_support from "./Components/Support/Contact_support";
import Tranning_school from "./Components/Support/Tranning_school";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Team from "./Components/About/Team";
import Products from "./Components/Products/Products";
import Athera from "./Components/Products/Athera";
import Vecros_cloud from "./Components/Products/Vecros_cloud";
import Jeptix_autonomous from "./Components/Jeptix_autonomous/Jeptix_autonomous";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Vercos />} />
            <Route path="jeptix" element={<Jeptix_autonomous />}/>
            <Route path="products" element={<Products />}>
              <Route path="athera" element={<Athera />} />
              <Route path="vercos-cloud" element={<Vecros_cloud />} />
            </Route>
            <Route path="support" element={<Support />}>
              <Route path="faqs" element={<FAQS />} />
              <Route path="contact_support" element={<Contact_support />} />
              <Route path="training_school" element={<Tranning_school />} />
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
