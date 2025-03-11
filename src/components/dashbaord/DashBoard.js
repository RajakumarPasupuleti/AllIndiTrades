import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; 
import AAPLImage from "../../assets/6242207.jpg"; 
import "./dashboard.css"; 
import WhatWeDo from "../../pageComponents/WhatWeDo"
import Blog from "../../pageComponents/blog";
import { ImportExport } from "@mui/icons-material";


const pageVariants = {
  initial: { opacity: 0, y: 50 }, // Start slightly below
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } }, // Slide up on exit
};

const StockMarketDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      to_email: "allindiatraderspvtltd@gmail.com",
      from_name: formData.name,
      phone_number: formData.phone,
      user_email: formData.email,
      message: `User Contact Info:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`,

    };

    try {
      await emailjs.send(
        "service_ld8l2he",
        "template_scrkrca",
        emailParams,
        "wUCQo_yBUhAMaee24" //public key
      );
      setMessage("✅ Email sent successfully!");
    } catch (error) {
      setMessage("❌ Error sending email. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 4000);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="container1"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Image Section */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={AAPLImage} alt="Stock Market" className="stock-image" />
        </motion.div>

        {/* Content Below */}
        <div className="content">
          <h1 className="title1">
            Elevate Your Trading <span className="highlight">with Confidence.</span>
          </h1>
          <p className="description">
            Whether you're a seasoned investor or just getting started, we provide cutting-edge tools and real-time insights to help you stay ahead of the market.
          </p>

          {/* Form */}
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Start Your Journey"}
            </button>
          </form>

          {message && <motion.p className="status-message">{message}</motion.p>}

          <p className="payment-info">
            Discover the secure and seamless ways to invest.{" "}
            <a href="#" className="link" onClick={() => setIsPopupOpen(true)}>
              Learn More
            </a>.
          </p>
         
        </div>
        <WhatWeDo/>
        <Blog/>

        {/* Popup Modal with Animation */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              className="popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="popup-content"
                initial={{ y: "-100vh" }}
                animate={{ y: "0vh" }}
                exit={{ y: "-100vh" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <h2>Secure Payment Methods</h2>
                <p>We accept all major Credit Cards, Debit Cards, UPI, and Net Banking for seamless transactions.</p>
                <button className="close-button" onClick={() => setIsPopupOpen(false)}>
                  Close
                </button>



              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default StockMarketDashboard;
