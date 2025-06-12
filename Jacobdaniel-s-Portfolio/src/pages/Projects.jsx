import { ExternalLink, Github } from 'lucide-react';
import "../styles/Projects.css"; 

export default function Projects() {
  const projects = [
    {
      title: 'IBM Watsonx Chatbot',
      description: "Developed a chatbot with my team using IBM Watsonx as a project to present to CAPACITI, showcasing AI-driven automation and user interaction capabilities.",
      image: '../assets/ibm watson.jpg',
      technologies: ['IBM Watsonx', 'AI', 'Team Project'],
       liveUrl: 'https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Feu-gb.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-424822f6-6997-4538-8a00-8cb936132e9d%3A%3Adff0742f-6331-4519-a5ca-8b6bda197b1e&integrationID=87952e83-d5ce-4252-af3d-087c31a4ba20&region=eu-gb&serviceInstanceID=424822f6-6997-4538-8a00-8cb936132e9d',
      // githubUrl: '#',
    },
    {
      title: 'Comprehensive Analysis of South African Public University Data',
      description: "I applied my skills in Excel, SQL, and Power BI by analyzing real-world university data from South Africa.",
      image: '../assets/Big Data Analysis concept Flat Poster 472916 Vector Art at Vecteezy.png',
      technologies: ['Excel', 'SQL', 'Power BI', 'Data Analysis'],
       //liveUrl: '',
      // githubUrl: '#',
    },
    {
      title: 'Hyper-V Windows Server',
      description: "Worked with my class to set up a network using Windows Server and Hyper-V, configuring virtual machines and managing network services.",
      image: '../assets/hyper v.jpg',
      technologies: ['Windows Server', 'Hyper-V', 'Networking'],
      // liveUrl: '#',
      // githubUrl: '#',
    }
  ];

  return (
    <section id="projects" className="projects-section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            style={{
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              letterSpacing: "-0.03em",
              fontVariationSettings: "'wght' 700, 'slnt' 0"
            }}
          >
            Featured Projects
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              fontVariationSettings: "'wght' 400, 'slnt' 0"
            }}
          >
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden project-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}