import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ozhc9sg", // Replace with your Email.js Service ID
        "template_08m3grz", // Replace with your Email.js Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "ODOIWFdV5flJzCclN" // Replace with your Email.js Public Key
      )
      .then(
        (response) => {
          console.log("Email sent!", response.status, response.text);
          alert("Message Sent! I will get back to you soon.");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.error("Error sending email:", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Connect with Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="What are you looking for?"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
