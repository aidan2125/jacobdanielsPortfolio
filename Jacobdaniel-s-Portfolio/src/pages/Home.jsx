import skills from "../data/skills.js";
import "../styles/global.css";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="section home-hero text-center">
        <div className="container">
          <h1 className="hero-title">Hi, I'm Jacob Daniels</h1>
          <p className="hero-subtitle">
            Aspiring IT Support Specialist | Skilled in Hardware, Troubleshooting,
            Customer Service & Data Analytics
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container text-center">
          <h2 className="section-title">Featured Skills</h2>
          <ul className="skills-list">
            {skills.slice(0, 6).map((skill, idx) => (
              <li key={idx} className="card skill-card">
                <span className="skill-text">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
