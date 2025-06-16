import { ExternalLink, Github } from "lucide-react";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "IBM Watsonx Chatbot",
      description:
        "Developed a chatbot with my team using IBM Watsonx as a project to present to CAPACITI, showcasing AI-driven automation and user interaction capabilities.",
      image: "../assets/ibm watson.jpg",
      technologies: ["IBM Watsonx", "AI", "Team Project"],
      liveUrl:
        "https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Feu-gb.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-424822f6-6997-4538-8a00-8cb936132e9d%3A%3Adff0742f-6331-4519-a5ca-8b6bda197b1e&integrationID=87952e83-d5ce-4252-af3d-087c31a4ba20&region=eu-gb&serviceInstanceID=424822f6-6997-4538-8a00-8cb936132e9d",
    },
    {
      title: "Comprehensive Analysis of South African Public University Data",
      description:
        "I applied my skills in Excel, SQL, and Power BI by analyzing real-world university data from South Africa.",
      image:
        "../assets/Big Data Analysis concept Flat Poster 472916 Vector Art at Vecteezy.png",
      technologies: ["Excel", "SQL", "Power BI", "Data Analysis"],
    },
    {
      title: "Hyper-V Windows Server",
      description:
        "Worked with my class to set up a network using Windows Server and Hyper-V, configuring virtual machines and managing network services.",
      image: "../assets/hyper v.jpg",
      technologies: ["Windows Server", "Hyper-V", "Networking"],
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        A showcase of my recent work and personal projects
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
