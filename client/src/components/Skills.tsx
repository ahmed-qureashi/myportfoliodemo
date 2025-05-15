import { useEffect, useRef } from "react";
import { Github, Terminal, Database, TestTube, Server, Code } from "lucide-react";

type SkillLevel = {
  name: string;
  percentage: number;
};

const frontendSkills: SkillLevel[] = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "UI/UX Design", percentage: 80 },
  { name: "Responsive Design", percentage: 90 },
];

const backendSkills: SkillLevel[] = [
  { name: "Node.js", percentage: 90 },
  { name: "Express.js", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "API Development", percentage: 85 },
  { name: "AWS", percentage: 75 },
];

export default function Skills() {
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressBars = progressBarsRef.current?.querySelectorAll('.progress-bar');
    
    if (progressBars) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const percentage = target.getAttribute('data-percentage') || '0';
            target.style.width = `${percentage}%`;
          }
        });
      }, { threshold: 0.1 });
      
      progressBars.forEach(bar => observer.observe(bar));
      
      return () => {
        progressBars.forEach(bar => observer.unobserve(bar));
      };
    }
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-neutral-600 text-center max-w-3xl mx-auto mb-12">
          I specialize in full stack development with a strong foundation in both frontend and backend technologies.
        </p>
        
        <div ref={progressBarsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Frontend Development</h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Backend Development</h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Tool & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge icon={<Github className="h-6 w-6" />} name="Git & GitHub" />
            <TechBadge icon={<Terminal className="h-6 w-6" />} name="Command Line" />
            <TechBadge icon={<Database className="h-6 w-6" />} name="Databases" />
            <TechBadge icon={<TestTube className="h-6 w-6" />} name="Testing" />
            <TechBadge icon={<Server className="h-6 w-6" />} name="Cloud Services" />
            <TechBadge icon={<Code className="h-6 w-6" />} name="VS Code" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: SkillLevel;
}

function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="bg-neutral-200 rounded-full h-2">
        <div 
          className="progress-bar bg-primary rounded-full h-full transition-all duration-1500 ease-in-out" 
          data-percentage={skill.percentage} 
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

interface TechBadgeProps {
  icon: React.ReactNode;
  name: string;
}

function TechBadge({ icon, name }: TechBadgeProps) {
  return (
    <div className="bg-neutral-100 border border-neutral-200 rounded-lg px-6 py-3 flex items-center">
      <span className="text-2xl mr-2 text-neutral-700">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
}
