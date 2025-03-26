import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Prepare the email data
    const emailParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_azpvi4z", // Your Service ID
        "template_6y5idmn", // Your Template ID
        emailParams,
        "NYG0onyGjBjZho1KN" // Your Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert(
            `Failed to send message: ${error.text}. Please check your form fields and try again.`
          );
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="form-container" id="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="textarea1"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSending} className="button1">
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
