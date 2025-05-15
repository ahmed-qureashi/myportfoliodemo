import { MailIcon, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
              alt="About Me" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Hi, I'm John Doe</h3>
            <p className="text-neutral-700 mb-4 text-lg">
              I'm a full stack developer specializing in building exceptional digital experiences. With 5+ years of experience in web development, I enjoy creating robust and scalable applications using modern technologies.
            </p>
            <p className="text-neutral-700 mb-6 text-lg">
              My expertise spans across frontend development with HTML, CSS, and JavaScript frameworks, backend systems with Node.js, and database design with MongoDB and SQL databases. I'm passionate about clean code, performance optimization, and staying updated with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MailIcon className="text-primary mr-2" />
                <span className="text-neutral-600">john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" />
                <span className="text-neutral-600">San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <Github className="text-primary mr-2" />
                <span className="text-neutral-600">github.com/johndoe</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-primary mr-2" />
                <span className="text-neutral-600">linkedin.com/in/johndoe</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
