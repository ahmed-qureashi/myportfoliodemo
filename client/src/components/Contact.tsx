import ContactForm from "./ContactForm";
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, Dribbble } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-neutral-600 text-center max-w-3xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Feel free to contact me!
        </p>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="bg-primary text-white p-8 md:p-12 md:w-2/5">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="mb-8 text-neutral-100">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <ContactInfoItem icon={<MapPin className="w-5 h-5" />} title="Location" content="San Francisco, California" />
                <ContactInfoItem icon={<Mail className="w-5 h-5" />} title="Email" content="john.doe@example.com" />
                <ContactInfoItem icon={<Phone className="w-5 h-5" />} title="Phone" content="(123) 456-7890" />
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://pk.linkedin.com/" ariaLabel="LinkedIn" />
                  <SocialLink icon={<Github className="w-5 h-5" />} href="https://github.com/ahmed-qureashi" ariaLabel="GitHub" />
                  <SocialLink icon={<Twitter className="w-5 h-5" />} href="https://x.com/" ariaLabel="Twitter" />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12 md:w-3/5">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-neutral-100">{content}</p>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

function SocialLink({ icon, href, ariaLabel }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
}
