import { ArrowDown } from 'lucide-react';
import "../styles/resume.css";

export default function Resume() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-background" />
      <div className="resume-content">
        <div className="resume-card">
          {/* Heading */}
          <h1 className="cv-heading">
            CV <span className="highlight"></span>
          </h1>

          {/* Subheading */}
          <p className="resume-subheading">
            View or Download My CV
          </p>

          {/* CV Thumbnail Preview */}
          <div
            className="cv-thumbnail-wrapper"
            style={{
              margin: "2.5rem auto 2rem",
              maxWidth: 260,
              background: "rgba(255,255,255,0.95)",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
              padding: "1.2rem 1.2rem 0.7rem",
              border: "1.5px solid #cbd5e1",
              transition: "box-shadow 0.2s"
            }}
          >
            <a href="/assets/Jacob Daniels 2025 Candidate CV.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/Jacob Daniels 2025 Candidate CV (1)1749667716.jpg"
                alt="CV Preview"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 6px 20px rgba(30,41,59,0.13)",
                  border: "1.5px solid #94a3b8",
                  background: "#f1f5f9",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "scale(1.06)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(30,41,59,0.18)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(30,41,59,0.13)";
                }}
              />
            </a>
            <div style={{ fontSize: "1.05rem", color: "#334155", marginTop: "0.7rem", fontWeight: 500 }}>
              Preview CV
            </div>
          </div>

          {/* Download Button */}
          <div className="resume-buttons" style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="/assets/Jacob Daniels 2025 Candidate CV.pdf"
              download
              className="btn btn-outline"
              style={{
                border: "2px solid #3b82f6",
                color: "#3b82f6",
                background: "transparent",
                fontWeight: 600,
                fontSize: "1.1rem",
                position: "relative"
              }}
            >
              Download CV
            </a>
          </div>

          {/* Scroll Indicator */}
          {/*
          <button
            onClick={scrollToAbout}
            className="scroll-indicator"
            aria-label="Scroll to About"
          >
            <ArrowDown size={28} />
          </button>
          */}
        </div>
      </div>
    </section>
  );
}

/* Add this to your Resume.css: */
//
// .blinking-cursor .blinking-bar {
//   animation: blink 1s steps(2, start) infinite;
// }
//
// @keyframes blink {
//   to {
//     visibility: hidden;
//   }
// }
//
