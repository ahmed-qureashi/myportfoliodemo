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
            <h3 className="text-2xl font-semibold mb-4 text-primary">Hi, I'm Ahmed Hassan</h3>
            <p className="text-neutral-700 mb-4 text-lg">
             A final-year Computer Science student with a growing interestin cloud computing, eager to learn and
apply cloud technologies. Familiar with basic cloud concepts, virtualization, and distributed systems, with
a willingness to develop hands-on experience. Interested in optimizing system performance and exploring
cloud security best practices. Looking for opportunities to gain practical knowledge and contribute to
cloud-based projects.
            </p>
            <p className="text-neutral-700 mb-6 text-lg">
              My expertise lies in leveraging cloud and DevOps technologies to build scalable and automated solutions. I utilize <b>Amazon Web Services (AWS)</b> for cloud infrastructure, ensuring high availability and security across deployments. For containerization and consistent environment setups, I rely on <b>Docker</b>, which integrates seamlessly into my CI/CD pipelines built with <b>GitHub Actions</b>. My development and automation workflows are streamlined using <b>Visual Studio Code</b>and the <b>Linux Cli</b>, where I also write efficient <b>Bash scripts</b> to automate routine tasks and system configurations. These tools collectively enable me to deliver robust, efficient, and maintainable solutions in cloud-native environments.
</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MailIcon className="text-primary mr-2" />
                www.ahmedqureashi2882001@gmail.com
                <span className="text-neutral-600"></span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" />
                <span className="text-neutral-600">Karachi, Sindh</span>
              </div>
              <div className="flex items-center">
                <Github className="text-primary mr-2" />
                <a
                  href="https://github.com/ahmed-qureashi"
                  className="text-neutral-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ahmed-qureashi
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-primary mr-2" />
                <span className="text-neutral-600"></span>
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
