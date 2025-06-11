import { Code, Palette, Rocket } from 'lucide-react';
import "../styles/about.css"; 

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, user-centered digital experiences.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
           Hi, I’m Jacob — a passionate and driven data analytics trainee with a strong foundation in IT support and a growing expertise in database management and cloud technologies. Currently part of the CAPACITI Demand program, I’m focused on Data Fundamentals for Business and Enterprise, where I’ve been developing my skills through hands-on projects like building and managing cloud-based PostgreSQL databases in the IBM Skills Network Lab and creating AI-driven chatbot solutions with IBM Watsonx. My background includes practical IT experience from my time at False Bay College’s Westlake campus, where I built workstations and provided technical support, as well as customer-focused work at The Woodshack. I thrive on problem-solving, continuous learning, and applying data-driven insights to real-world challenges.
            </p>    
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                alt="Jacob Daniels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a full-stack developer with a keen eye for design and a love for creating seamless user experiences. My journey in tech has taken me through a variety of projects, from e-commerce platforms to interactive portfolios.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy combining technical expertise with creative problem-solving, ensuring every project is both functional and visually engaging.
            </p>

            {/* Highlights */}
            <div className="grid gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-blue-500 dark:border-blue-400">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}