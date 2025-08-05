import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  Car,
  Code,
  Database,
  Globe
} from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Power Learn Academy',
      degree: 'Software Essentials Program',
      duration: '2025',
      status: 'Current',
      description: 'Comprehensive training in modern software development practices, focusing on MERN stack development, version control, and software engineering principles.',
      skills: ['MERN Stack', 'Git & GitHub', 'Software Engineering', 'Agile Development'],
      icon: Code,
      color: 'gradient-tech'
    },
    {
      institution: 'Pwani University',
      degree: 'Diploma in Agriculture and Marketing',
      duration: '2016 – 2018',
      status: 'Completed',
      description: 'Specialized in modern agricultural practices, marketing strategies, and sustainable farming techniques. Gained comprehensive knowledge in crop production, livestock management, and agricultural economics.',
      skills: ['Agricultural Sciences', 'Marketing', 'Crop Production', 'Livestock Management'],
      icon: GraduationCap,
      color: 'gradient-agri'
    }
  ];

  const certifications = [
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2024',
      description: 'Advanced database design and development with MongoDB',
      icon: Database
    },
    {
      title: 'React.js Certification',
      issuer: 'Meta (Facebook)',
      year: '2024',
      description: 'Modern React development and component architecture',
      icon: Code
    },
    {
      title: 'Node.js Application Development',
      issuer: 'Node.js Foundation',
      year: '2024',
      description: 'Server-side JavaScript and API development',
      icon: Globe
    },
    {
      title: 'Driving License Class B',
      issuer: 'AA Kenya',
      year: '2023 – 2024',
      description: 'Professional driving license for personal and commercial vehicles',
      icon: Car
    }
  ];

  const additionalTraining = [
    'Enable Youth Kenya - Agricultural Technology Integration',
    'Good Times Farm - Sustainable Farming Practices',
    'SifaSkills - Technical Mentorship & Training',
    'Git Version Control - Advanced Collaboration',
    'Express.js Framework - RESTful API Development',
    'JavaScript ES6+ - Modern Development Practices'
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">Education & Qualifications</h1>
          <p className="section-subtitle">
            Continuous learning journey combining formal education with professional development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Formal Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Icon */}
                    <div className={`${edu.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="card-elevated flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Professional Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="card-elevated">
                  <div className="flex items-start gap-4">
                    <div className="gradient-hero w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{cert.title}</h3>
                        <span className="text-sm text-muted-foreground">{cert.year}</span>
                      </div>
                      <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Training */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Additional Training & Workshops
          </h2>
          
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-hero w-10 h-10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Continuous Professional Development
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {additionalTraining.map((training, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{training}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 gradient-subtle rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss how my education and experience can contribute to your project's success.
          </p>
          <a
            href="/contact"
            className="btn-hero"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;