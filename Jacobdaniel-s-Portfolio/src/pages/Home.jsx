import React from "react";
import { Link } from "react-router-dom";
import skills from "../data/skills.js";
import "../styles/global.css";
import "../styles/home.css"; // Import the new CSS file

export default function Home() {
  return (
    <main className="main">
      <section className="section text-center home-hero">
        <h1>Hi, I'm Jacob Daniels</h1>
        <p>
          I'm a full-stack developer passionate about building modern, accessible,
          and performant web applications.
        </p>
        <div className="button-group">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </section>
      <section className="section skills-section">
        <h2>Featured Skills</h2>
        <ul className="skills-list">
          {skills.slice(0, 6).map((skill, idx) => (
            <li key={idx} className="card">
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}