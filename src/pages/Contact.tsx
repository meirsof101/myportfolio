import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube,
  Clock,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled by Netlify Forms or formsubmit.io
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fidel.ngoka@email.com',
      link: 'mailto:fidel.ngoka@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 7XX XXX XXX',
      link: 'tel:+2547XXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM EAT',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@fidelmwaro',
      link: 'https://github.com/fidelmwaro'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Fidel Mwaro Ngoka',
      link: 'https://linkedin.com/in/fidelmwaro'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@fidelmwaro',
      link: 'https://twitter.com/fidelmwaro'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'Fidel Ngoka',
      link: 'https://youtube.com/@fidelmwaro'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elevated">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Send Me a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              action="https://formsubmit.co/fidel.ngoka@email.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden inputs for formsubmit.io */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://your-domain.com/thank-you" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background resize-vertical"
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                />
              </div>

              <button
                type="submit"
                className="btn-hero w-full flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="gradient-hero w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link === '#' ? (
                          <p className="font-medium text-foreground">{info.value}</p>
                        ) : (
                          <a
                            href={info.link}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="gradient-hero w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="font-medium text-foreground">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-4">Let's Build Something Great</h3>
              <p className="text-muted-foreground mb-4">
                Whether you need a fullstack web application, agricultural technology solution, 
                or want to discuss innovative ideas that bridge technology and agriculture, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">Available for remote and on-site projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16">
          <div className="card-elevated">
            <h3 className="text-xl font-semibold text-foreground mb-4">Location</h3>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Interactive map would be embedded here</p>
                <p className="text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;