import  placeholder  from "../../assets/wp8199073-software-engineering-wallpapers.jpg";

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
                            {/* Placeholder for the image */}
                            <img 
                                src={placeholder}
                                alt="Profile" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg mb-4">
                            Hello! I'm a web developer with a passion for creating 
                            responsive, user-friendly web applications. I specialize in 
                            frontend technologies like React, TypeScript, and modern CSS 
                            frameworks.
                        </p>
                        <p className="text-lg mb-4">
                            With experience in building everything from simple landing pages 
                            to complex web applications, I bring a blend of technical skills 
                            and creative problem-solving to every project.
                        </p>
                        <p className="text-lg">
                            When I'm not coding, you can find me [your interests/hobbies]. 
                            I'm always open to new opportunities and challenges!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;