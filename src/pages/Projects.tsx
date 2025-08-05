import { ExternalLink, Github, Monitor, Smartphone, Globe, Leaf } from 'lucide-react';

const Projects = () => {
  const techProjects = [
    {
      title: 'COVID-19 Global Tracker',
      description: 'Real-time COVID-19 statistics dashboard with interactive maps and data visualization. Built with React and external APIs.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop',
      tech: ['React', 'JavaScript', 'Chart.js', 'COVID API'],
      liveDemo: 'https://covid-tracker-fidel.netlify.app',
      github: 'https://github.com/fidelmwaro/covid-tracker',
      category: 'tech'
    },
    {
      title: 'MERN Stack Dashboard',
      description: 'Full-stack web application with user authentication, data management, and real-time updates. Complete CRUD operations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveDemo: 'https://mern-dashboard-fidel.herokuapp.com',
      github: 'https://github.com/fidelmwaro/mern-dashboard',
      category: 'tech'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with payment integration, inventory management, and responsive design.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'Stripe API', 'MongoDB'],
      liveDemo: 'https://ecommerce-fidel.vercel.app',
      github: 'https://github.com/fidelmwaro/ecommerce-platform',
      category: 'tech'
    }
  ];

  const agriProjects = [
    {
      title: 'Know Your Farmer Platform',
      description: 'Comprehensive farmer profiling system that connects consumers with local farmers. Features GPS mapping and farmer verification.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'GPS API'],
      liveDemo: 'https://know-your-farmer.netlify.app',
      github: 'https://github.com/fidelmwaro/farmer-profiling',
      category: 'agri'
    },
    {
      title: 'Agri-Market Connect',
      description: 'Digital marketplace connecting farmers directly with buyers. Includes price tracking, quality assurance, and logistics coordination.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
      tech: ['MERN Stack', 'Payment Gateway', 'Real-time Chat'],
      liveDemo: 'https://agri-market-connect.com',
      github: 'https://github.com/fidelmwaro/agri-market',
      category: 'agri'
    },
    {
      title: 'Weather & Pest Alert System',
      description: 'Smart alert system providing farmers with weather forecasts and pest outbreak warnings based on location and crop type.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      tech: ['Python', 'Weather API', 'SMS Gateway', 'Machine Learning'],
      liveDemo: 'https://weather-pest-alerts.herokuapp.com',
      github: 'https://github.com/fidelmwaro/weather-pest-alerts',
      category: 'agri'
    },
    {
      title: 'Farm Management System',
      description: 'Comprehensive farm management solution with crop planning, resource tracking, and yield prediction analytics.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      tech: ['React', 'MongoDB', 'Data Analytics', 'GPS Mapping'],
      liveDemo: 'https://farm-management-fidel.vercel.app',
      github: 'https://github.com/fidelmwaro/farm-management',
      category: 'agri'
    }
  ];

  const allProjects = [...techProjects, ...agriProjects];

  const ProjectCard = ({ project }: { project: any }) => {
    const categoryIcon = project.category === 'tech' ? Monitor : Leaf;
    const CategoryIcon = categoryIcon;

    return (
      <div className="card-elevated group overflow-hidden">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <div className={`p-2 rounded-lg ${project.category === 'tech' ? 'gradient-tech' : 'gradient-agri'}`}>
              <CategoryIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-outline text-center inline-flex items-center justify-center gap-2 text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-center inline-flex items-center justify-center gap-2 text-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A showcase of technology solutions spanning web development and agricultural innovation
          </p>
        </div>

        {/* Category Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center p-8 gradient-tech rounded-2xl text-white">
            <Monitor className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tech Projects</h3>
            <p className="text-blue-100">Full-stack web applications and software solutions</p>
            <div className="text-3xl font-bold mt-4">{techProjects.length}</div>
          </div>
          
          <div className="text-center p-8 gradient-agri rounded-2xl text-white">
            <Leaf className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Agri-Tech Projects</h3>
            <p className="text-green-100">Agricultural technology and farming solutions</p>
            <div className="text-3xl font-bold mt-4">{agriProjects.length}</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 gradient-subtle rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-hero"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/fidelmwaro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;