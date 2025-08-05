import { 
  Code, 
  Database, 
  Globe, 
  Leaf, 
  MapPin, 
  Users, 
  Zap, 
  GitBranch,
  Cpu,
  Sprout
} from 'lucide-react';
import profileImage from '@/assets/profile-photo.jpg';

const About = () => {
  const techSkills = [
    { icon: Code, name: 'JavaScript', description: 'ES6+, Modern JS Development' },
    { icon: Code, name: 'React.js', description: 'Component-based UI Development' },
    { icon: Database, name: 'Node.js', description: 'Server-side JavaScript Runtime' },
    { icon: Database, name: 'MongoDB', description: 'NoSQL Database Management' },
    { icon: Globe, name: 'Express.js', description: 'Web Application Framework' },
    { icon: GitBranch, name: 'Git & GitHub', description: 'Version Control & Collaboration' },
    { icon: Cpu, name: 'Python', description: 'Data Analysis & Automation' },
    { icon: Code, name: 'HTML & CSS', description: 'Modern Web Standards' }
  ];

  const agriSkills = [
    { icon: Sprout, name: 'Agri-tech Solutions', description: 'Technology integration in agriculture' },
    { icon: MapPin, name: 'GPS Mapping', description: 'Precision agriculture & field mapping' },
    { icon: Users, name: 'Farmer Profiling', description: 'Data collection & farmer insights' },
    { icon: Leaf, name: 'Sustainable Farming', description: 'Modern agricultural practices' }
  ];

  const experiences = [
    {
      company: 'Power Learn Project',
      role: 'Software Engineering Student',
      description: 'Intensive training in MERN stack development and modern software engineering practices.'
    },
    {
      company: 'Enable Youth Kenya',
      role: 'Tech & Agriculture Consultant',
      description: 'Bridging technology and agriculture to empower youth in rural communities.'
    },
    {
      company: 'Good Times Farm',
      role: 'Agricultural Technology Specialist',
      description: 'Implementing data-driven solutions for sustainable farming practices.'
    },
    {
      company: 'SifaSkills',
      role: 'Technical Mentor',
      description: 'Training and mentoring youth in technology and agricultural innovations.'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Passionate about creating innovative solutions that bridge technology and agriculture
          </p>
        </div>

        {/* Profile & Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Bridging Two Worlds
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Fidel Mwaro Ngoka, a passionate Fullstack MERN Developer and Agricultural Expert 
                with a unique perspective on how technology can revolutionize agriculture. My journey 
                combines years of hands-on agricultural experience with cutting-edge software development skills.
              </p>
              <p>
                Through my work with organizations like Power Learn Project, Enable Youth Kenya, 
                Good Times Farm, and SifaSkills, I've developed expertise in creating technology 
                solutions that address real-world agricultural challenges. I specialize in farmer 
                profiling, GPS mapping, data collection, and developing web applications that 
                empower farming communities.
              </p>
              <p>
                My mission is to leverage the power of the MERN stack (MongoDB, Express.js, React, Node.js) 
                to create sustainable, scalable solutions that improve agricultural productivity and 
                connect farmers with modern technology.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Fidel Mwaro Ngoka"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-hero rounded-xl opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground">
              Full-stack development skills with modern technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="card-elevated text-center group">
                  <div className="gradient-tech w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agricultural Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Agricultural Expertise
            </h2>
            <p className="text-muted-foreground">
              Modern agricultural practices and technology integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agriSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="card-elevated text-center group">
                  <div className="gradient-agri w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-muted-foreground">
              Working with leading organizations in tech and agriculture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="card-elevated">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{exp.company[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{exp.company}</h3>
                    <p className="text-primary font-medium mb-2">{exp.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;