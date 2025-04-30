import { useState, useEffect, useRef, useCallback } from "react";
import projects from "../../data/projects";
import bgImage from "../../assets/hero-bg.jpg";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // visibility detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveProject((prev) => Math.max(prev - 1, 0));
      } else if (event.key === "ArrowRight") {
        setActiveProject((prev) => Math.min(prev + 1, projects.length - 1));
      }
    },
    [projects.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // manually change active project
  const handleDotClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <section
      className="relative min-h-screen bg-gradient-to-b from-primary-100 to-white/10"
      ref={containerRef}
    >
      <div
        className="sticky top-0 w-full h-screen bg-cover bg-center -z-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      {/* animated background 
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 pointer-events-none animate-wave"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(6, 182, 212, 0.5) 0%, rgba(14, 165, 233, 0.3) 50%, rgba(0, 0, 0, 0) 80%)`,
            backgroundSize: "150% 150%",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      */}

      <div
        id="projects" 
        className="relative z-10 bg-gradient-to-b min-h-screen from-primary-100/80 via-white/90 to-white/30">
        <div className="container py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-800">
            Featured Projects
          </h2>
        </div>

        {/* Individual Projects */}
        <div
          className={`relative h-[80vh] overflow-hidden transition-opacity duration-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${activeProject * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-full h-full flex flex-col md:flex-row items-center p-4 md:p-8"
              >
                {/* image */}
                <div className="w-full md:w-1/2 h-[40vh] md:h-full p-4 md:p-8 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105">
                    <div className="w-full h-full bg-primary-700/20 flex flex-col items-center justify-center p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                      <span className="text-primary-100 mb-2 text-lg font-medium">
                        {project.role}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white text-center p-4 md:p-6 backdrop-blur-sm bg-primary-900/30 rounded-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="w-full md:w-1/2 p-4 md:p-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-primary-700 mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-primary-700 mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-primary-500 mr-2 mt-1 flex-shrink-0"
                              >
                                <path
                                  d="M2 12C4 9 6 8 10 8C14 8 16 10 20 10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 text-center"
                          >
                            View Live Site
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition duration-300 text-center"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Project navigation dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                activeProject === index
                  ? "bg-primary-600 scale-110"
                  : "bg-primary-200 hover:bg-primary-300"
              }`}
              aria-label={`View ${project.title}`}
            />
          ))}
        </div>

        {/* Arrow navigation */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4 md:px-8">
          <button
            onClick={() => setActiveProject((prev) => Math.max(prev - 1, 0))}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg pointer-events-auto transition-opacity ${
              activeProject === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-80 hover:opacity-100"
            }`}
            disabled={activeProject === 0}
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setActiveProject((prev) =>
                Math.min(prev + 1, projects.length - 1)
              )
            }
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg pointer-events-auto transition-opacity ${
              activeProject === projects.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-80 hover:opacity-100"
            }`}
            disabled={activeProject === projects.length - 1}
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
