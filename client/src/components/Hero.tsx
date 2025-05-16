import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ImgHTMLAttributes } from "react";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100">
              Building modern web applications with a focus on clean code and user experience.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="bg-white text-primary font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-neutral-100 transition-colors duration-300 text-center">
                View Projects
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-colors duration-300 text-center">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/4 flex justify-center flex">
            <img
              src="/ahmed.jpeg"
              alt="Developer Portrait" 
              className="rounded-full border-4 border-white shadow-xl w-64 h-64 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
