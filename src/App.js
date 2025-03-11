import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveNavBar from "./components/navbar/Navbar";
import About from "./pageComponents/about";
// // import ComplaintBoard from "./pageComponents/complaint";
import Services from "./pageComponents/service";
import Pricing from "./pageComponents/pricing";
import Footer from "./components/footer/Footer";
// import ThemeProviderWrapper from './components/ThemeContext/ThemeContext';
// import "./App.css"; // Import CSS
// import WhatWeDo from "../../src/pageComponents/WhatWeDo";
import DashboardPage from "./components/dashbaord/DashBoard";
import TermsAndConditions from "./pageComponents/TermsAndConditions";
import RefundPolicy from "./pageComponents/RefoundPolicy";
import PrivacyPolicy from "./pageComponents/PrivacyPolicy";
import RegulatoryCompliance from "./pageComponents/RegulatoryCompliance";

const App = () => {
  return (
    <Router>
      <ResponsiveNavBar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/terms-conditionsions" element={<TermsAndConditions />} /> 
        <Route path="/cancellation-refund-policy" element={<RefundPolicy />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} /> 
      </Routes>
      <Footer /> {/* Footer is now always visible */}
    </Router>
  );
};

export default App;
