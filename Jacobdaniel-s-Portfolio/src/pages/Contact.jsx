import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import "../styles/Contact.css";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Jacobdaniels237@gmail.com",
    href: "mailto:Jacobdaniels237@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 79 853 0323",
    href: "tel:+27798530323",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town, South Africa",
    href: "https://maps.google.com", // You can update this to a real location link
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/JacobDaniels30",
    href: "https://github.com/JacobDaniels30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jacob-daniels30",
    href: "https://www.linkedin.com/in/jacob-daniels30/",
  },
];

const Contact = () => (
  <section className="contact-section contact-wrapper min-h-screen flex items-center justify-center px-4 py-16">
    <div className="contact-container w-full max-w-2xl mx-auto">
      <div className="contact-header">
        <h1 className="section-title text-3xl md:text-4xl font-bold mb-2 text-indigo-700">
          Let's Work Together
        </h1>
        <p className="section-subtitle text-base text-gray-600 mb-8">
          Have a project in mind? I'd love to hear about it.
        </p>
      </div>
      <div className="contact-content flex flex-col gap-8">
        {/* Contact Info */}
        <div className="contact-details flex flex-col gap-6">
          {[...contactInfo, ...socialLinks].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="contact-item flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                <item.icon className="w-6 h-6" />
              </span>
              <span>
                <h2>{item.label}</h2>
                <span className="block">{item.value}</span>
              </span>
            </a>
          ))}
        </div>
        {/* Contact Form */}
        <form
          className="contact-form mt-6"
          action="https://formspree.io/f/mnnvdvzy"
          method="POST"
          autoComplete="off"
        >
          <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn-primary contact-form-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
