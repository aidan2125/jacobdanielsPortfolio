import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css'; // Ensure this file exists

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    label: "GitHub",
    icon: <Github size={20} />,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
  },
  {
    href: "mailto:Jacobdaniels237@gmail.com",
    label: "Email",
    icon: <Mail size={20} />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-text">
          © {new Date().getFullYear()} Jacob Daniels. All rights reserved.
        </span>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-icon"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
