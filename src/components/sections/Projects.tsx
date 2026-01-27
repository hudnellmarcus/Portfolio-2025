import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, Project } from "../../data/projects";
import bgImage from "../../assets/hero-bg.jpg";
import { useAnalyticsTracking } from "../../hooks/useAnalyticsTracking";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { trackLiveSiteClick, trackGithubClick } = useAnalyticsTracking();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  const isEven = index % 2 === 0;

  // Get all tech from stack
  const allTech = [
    ...(project.stack.frontend || []),
    ...(project.stack.backend || []),
    ...(project.stack.cms || []),
    ...(project.stack.analytics || []),
  ].slice(0, 6); // Limit to 6 for cleaner display

  const liveLink = project.links.find((l) => l.label === "Live");
  const githubLink = project.links.find((l) => l.label === "GitHub");

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="py-12 md:py-20 px-4 md:px-8"
    >
      <div
        className={`w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center`}
      >
        {/* Image Section */}
        <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src={project.media.hero}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent" />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-primary-700 font-bold text-sm shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Status badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-100 border border-green-400/30"
                  : "bg-yellow-500/20 text-yellow-100 border border-yellow-400/30"
              }`}>
                {project.status}
              </span>
            </div>

            {/* Title overlay for mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:hidden">
              <span className="text-primary-200 text-sm font-medium">
                {project.roleTitle}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {project.client}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Desktop header */}
            <div className="hidden lg:flex flex-wrap items-center gap-3 mb-2">
              <span className="text-primary-600 text-sm font-semibold uppercase tracking-wide">
                {project.roleTitle}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-300" />
              <span className="text-gray-500 text-sm">{project.timeframe.year}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-300" />
              <span className="text-gray-500 text-sm">{project.category}</span>
            </div>

            <h3 className="hidden lg:block text-2xl md:text-3xl font-bold text-primary-800 mb-2">
              {project.client}
            </h3>

            {/* Mobile metadata */}
            <div className="lg:hidden mb-3 flex flex-wrap gap-2 text-sm text-gray-500">
              <span>{project.timeframe.year}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>

            {/* Summary */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* Metrics if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-6">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="bg-primary-50 rounded-lg px-4 py-3">
                    <div className="text-2xl font-bold text-primary-700">{metric.value}</div>
                    <div className="text-xs text-primary-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Case Study: Problem & Solution */}
            {project.caseStudy && (
              <div className="space-y-4 mb-6">
                <div className="border-l-2 border-primary-200 pl-4">
                  <h4 className="text-sm font-semibold text-primary-700 uppercase tracking-wide mb-1">
                    Challenge
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>
                <div className="border-l-2 border-secondary-400 pl-4">
                  <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-1">
                    Solution
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.caseStudy.solution[0]}
                  </p>
                </div>
              </div>
            )}

            {/* Tech stack */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {allTech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-sm bg-primary-100 text-primary-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {liveLink && (
                <a
                  href={liveLink.href}
                  onClick={() => trackLiveSiteClick(project.title, liveLink.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-primary-600/25"
                >
                  View Live Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackGithubClick(project.title, githubLink.href)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for the background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 h-[130%] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </motion.div>

      {/* Gradient Overlay - lighter to show more background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-100/60 via-white/50 to-primary-50/70" />

      {/* Section Header */}
      <div className="pt-20 pb-8 md:pt-28 md:pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block text-primary-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              A curated selection of projects showcasing frontend engineering,
              state architecture, and production-quality implementation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <div className="relative pb-16 md:pb-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
