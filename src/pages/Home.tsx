import { Download, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/fidelmwaro', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/fidelmwaro', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/fidelmwaro', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@fidelmwaro', label: 'YouTube' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Fidel Mwaro Ngoka
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-4 text-blue-100">
          Fullstack MERN Developer | Agricultural Expert
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-2xl mx-auto leading-relaxed">
          Merging Technology & Agriculture for a Better Tomorrow
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/cv-fidel-ngoka.pdf"
            download
            className="btn-hero flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
          
          <Link
            to="/projects"
            className="btn-outline border-white text-white hover:bg-white hover:text-primary"
          >
            View Projects
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="h-6 w-6 text-white" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;