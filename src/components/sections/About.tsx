import { useEffect, useState } from "react";
import AnimatedBackground from "../ui/AnimatedBackground";
import aboutContent from "../../data/aboutContent";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-section");
      if (element) {
        const position = element.getBoundingClientRect();
        const isVisible =
          position.top < window.innerHeight && position.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="py-20 relative min-h-[80vh]">
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-primary-100/40 z-5"></div>
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container relative z-10">
       {/*} <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-800">
          {aboutContent.headline}
        </h2> */}
        <div className="flex flex-col"> 
          {/* Left column text */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary-700">
                About Me
              </h3>

              <p className="text-lg mb-6 text-gray-700">{aboutContent.intro}</p>

              <p className="text-lg mb-6 text-gray-700">
                {aboutContent.philosophy}
              </p>

              <p className="text-lg text-gray-700">{aboutContent.background}</p>
            </div>
          </div>
          {/* Bottom Half tehnical skills */}

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Left column text */}

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-100">
              <h3 className="text-2xl font-bold mb-6 text-primary-700">
                {aboutContent.expertise.title}
              </h3>

              <div className="space-y-6">
                {aboutContent.expertise.areas.map((area, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-300 pl-4"
                  >
                    <h4 className="font-bold mb-1 text-gray-800">
                      {area.category}
                    </h4>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-100">
              <h3 className="text-xl font-bold mb-6 text-primary-700">
                {aboutContent.skills.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {aboutContent.skills.groups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h4 className="font-bold mb-2 text-gray-800">
                      {group.name}
                    </h4>
                    <ul className="space-y-1">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-500 mr-2 flex-shrink-0"
                          >
                            <path
                              d="M2 12C4 9 6 8 10 8C14 8 16 10 20 10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
