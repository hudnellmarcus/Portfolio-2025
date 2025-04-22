const Hero = () => {
  return (
    <section className="bg-primary-700 text-white py-20 md:py-32">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary-300">Marcus Hudnell</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Web Developer specializing in modern frontend technologies
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
