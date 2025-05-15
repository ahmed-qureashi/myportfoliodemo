import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with secure payment processing, user authentication, and product management.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time updates, user management, and customizable widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Vue.js", "Express", "D3.js", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app with task scheduling, reminders, and collaboration features for teams and individuals.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React Native", "Firebase", "Redux", "Cloud Functions"],
    demoLink: "#",
    codeLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-neutral-600 text-center max-w-3xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="inline-flex items-center bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-secondary transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-neutral-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-neutral-200 text-neutral-700 px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={project.demoLink} className="text-primary hover:text-secondary transition-colors font-medium flex items-center">
            Demo <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <a href={project.codeLink} className="text-primary hover:text-secondary transition-colors font-medium flex items-center">
            Code <Github className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
