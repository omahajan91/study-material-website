import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import Help from "./pages/Help.jsx";
import Contribute from "./pages/Contribute.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-material" element={<StudyMaterial />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
