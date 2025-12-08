import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import Contribute from "./pages/Contribute.jsx";
import Contact from "./pages/Contact.jsx";
import Help from './pages/Help.jsx';
import HandWrittenNotes from './pages/HandWrittenNotes.jsx';
import PYQS from './pages/PYQS.jsx';

function Layout({ children }) {
  const location = useLocation();
  const showNavAndFooter = ['/', '/contact', '/study-material'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {showNavAndFooter && <Navbar />}
      <main className={`flex-1 ${showNavAndFooter ? 'pt-16' : ''}`}>
        {children}
      </main>
      {showNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-material" element={<StudyMaterial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/help" element={<Help />} />
          <Route path="/notes" element={<HandWrittenNotes />} />
          <Route path="/pyqs" element={<PYQS />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
