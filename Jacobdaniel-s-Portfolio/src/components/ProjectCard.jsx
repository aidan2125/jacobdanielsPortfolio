import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col project-card">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full object-cover project-img"
          style={{
            height: "140px",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies && technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full badge"
            >
              {tech}
            </span>
          ))}
        </div>
        {(liveUrl || githubUrl) && (
          <div className="flex gap-3 mt-auto project-links">
            {liveUrl && (
              <a
                href={liveUrl}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}