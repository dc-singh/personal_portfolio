import React, { useState } from 'react';
import { Mail, MessageCircle, Globe, ExternalLink, Code2, Award, Database, Cpu, Terminal, Send, Calendar, Menu, X } from 'lucide-react';

const Section = ({ id, prefix, highlight, children }) => (
  <section id={id} className="py-24 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      {prefix} <span className="text-accent relative inline-block">
        {highlight}
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent"></span>
      </span>
    </h2>
    {children}
  </section>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-800 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="text-4xl font-bold">NK<span className="text-accent">.</span></div>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
          </div>
          <a href="#contact" className="bg-accent hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background/95 border-b border-zinc-800 px-6 py-6 absolute w-full backdrop-blur-md">
          <div className="flex flex-col gap-5 text-sm font-medium text-zinc-400">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors flex items-center py-2 border-b border-zinc-800/50">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors flex items-center py-2 border-b border-zinc-800/50">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors flex items-center py-2 border-b border-zinc-800/50">Projects</a>
            <a href="#certificates" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors flex items-center py-2 border-b border-zinc-800/50">Certificates</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors text-center mt-2 flex justify-center">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => (
  <section id="about" className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
      Hi, I'm <span className="text-accent">Nakul Kumar</span>
    </h1>
    <h2 className="text-2xl md:text-3xl text-zinc-300 font-medium mb-6">
      BCA Student & Full Stack Developer
    </h2>
    <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
      Building innovative solutions with modern technologies.<br className="hidden md:block" />
      Specialized in web development, Python, and AI integration.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <a href="#projects" className="bg-accent hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
        View My Work <span>&rarr;</span>
      </a>
      <a href="#contact" className="bg-transparent border border-zinc-700/80 hover:border-zinc-500 text-accent hover:text-blue-400 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center">
        Get In Touch
      </a>
    </div>
  </section>
);

const SkillsSection = () => {
  const skills = [
    { name: 'Web Development', level: '90%', icon: <Globe className="w-5 h-5 text-blue-500" /> },
    { name: 'Python', level: '85%', icon: <Terminal className="w-5 h-5 text-purple-500" /> },
    { name: 'Backend Development', level: '80%', icon: <Database className="w-5 h-5 text-green-500" /> },
    { name: 'AI Integration', level: '80%', icon: <Cpu className="w-5 h-5 text-pink-500" /> },
    { name: 'React.js', level: '85%', icon: <Globe className="w-5 h-5 text-blue-400" /> },
    { name: 'Node.js', level: '82%', icon: <Globe className="w-5 h-5 text-green-400" /> },
    { name: 'FastAPI', level: '80%', icon: <Terminal className="w-5 h-5 text-emerald-500" /> },
    { name: 'MongoDB', level: '78%', icon: <Database className="w-5 h-5 text-green-600" /> },
    { name: 'REST APIs', level: '85%', icon: <Code2 className="w-5 h-5 text-blue-500" /> },
    { name: 'Git & GitHub', level: '88%', icon: <Terminal className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <Section id="skills" prefix="Technical" highlight="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-card p-6 rounded-xl border border-zinc-800 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800/80 p-2.5 rounded-lg">
                  {skill.icon}
                </div>
                <span className="font-semibold text-[15px]">{skill.name}</span>
              </div>
              <span className="text-xs text-accent font-medium">{skill.level}</span>
            </div>
            <div className="w-full bg-zinc-800/60 rounded-full h-1.5 isolate overflow-hidden">
              <div className="bg-accent h-1.5 rounded-full" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot Platform',
      desc: 'Built an intelligent chatbot system using Python and FastAPI, integrated with OpenAI\'s GPT models. Features include context-aware conversations, multi-user support, and real-time responses.',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI API', 'MongoDB'],
    },
    {
      title: 'E-Commerce Web Application',
      desc: 'Full-stack e-commerce platform with product management, shopping cart, payment integration, and user authentication. Built with modern web technologies and responsive design.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    },
    {
      title: 'Task Management System',
      desc: 'Collaborative task management tool with real-time updates, team collaboration features, drag-and-drop interface, and priority-based task organization.',
      tags: ['React', 'FastAPI', 'PostgreSQL', 'WebSockets'],
    },
    {
      title: 'Portfolio Analytics Dashboard',
      desc: 'Data visualization dashboard for tracking website analytics, user behavior, and performance metrics. Features interactive charts and real-time data updates.',
      tags: ['Python', 'Flask', 'Chart.js', 'MySQL'],
    }
  ];

  return (
    <Section id="projects" prefix="Featured" highlight="Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-card p-8 rounded-xl border border-zinc-800 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded">Featured</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs text-accent text-[11px] font-medium border border-accent/20 bg-accent/5 px-2.5 py-1 rounded">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-colors px-4 py-2 rounded-lg text-sm font-semibold">
                <Code2 className="w-4 h-4" /> Code
              </button>
              <button className="flex items-center gap-2 bg-accent hover:bg-blue-600 transition-colors px-4 py-2 rounded-lg text-sm font-semibold">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CertificatesSection = () => {
  const certs = [
    { title: 'Ethical Hacking Certificate', year: '2023', desc: 'Comprehensive certification covering penetration testing, network security, vulnerability assessment, and cybersecurity best practices.', issuer: 'One Byte Lab' },
    { title: 'Tally Operator Certificate', year: '2025', desc: 'Professional certification in Tally ERP software for accounting, inventory management, and financial reporting.', issuer: 'ACTC' }
  ];

  return (
    <Section id="certificates" prefix="Certificates &" highlight="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div key={index} className="bg-card p-8 rounded-xl border border-zinc-800">
            <div className="flex items-start gap-5">
              <div className="bg-zinc-800/80 p-3.5 rounded-xl text-accent shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                <div className="text-sm text-zinc-500 mb-5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {cert.year}
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{cert.desc}</p>
                <p className="text-zinc-600 text-xs">Issued by: {cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    // TODO: Paste your Web3Forms Access Key below!
    formData.append("access_key", "09fa51ca-a286-4a97-a199-d7f2c6ffdc3e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        event.target.reset(); // clear the form automatically
      } else {
        alert("Error sending message: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" prefix="Get In" highlight="Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="bg-card p-8 rounded-xl border border-zinc-800 mb-6">
            <div className="flex items-center gap-5 mb-8">
              <div className="bg-zinc-800/80 p-3.5 rounded-xl text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-1">Email</p>
                <p className="font-medium text-sm">nakulkumar740953485@gmail.com</p>
              </div>
            </div>

            <div>
              <p className="text-zinc-500 text-xs font-semibold mb-4">Connect on social media</p>
              <div className="flex gap-3">
                <button className="bg-zinc-800/80 p-3 text-zinc-400 hover:text-white rounded-xl transition-colors"><MessageCircle className="w-5 h-5" /></button>
                <button className="bg-zinc-800/80 p-3 text-zinc-400 hover:text-white rounded-xl transition-colors"><Globe className="w-5 h-5" /></button>
                <button className="bg-zinc-800/80 p-3 text-zinc-400 hover:text-white rounded-xl transition-colors"><Code2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-xl border border-zinc-800">
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-2 ml-1">Name</label>
              <input type="text" name="name" required placeholder="Your name" className="w-full bg-background border border-zinc-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-2 ml-1">Email</label>
              <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-background border border-zinc-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-zinc-400 text-xs font-semibold mb-2 ml-1">Message</label>
              <textarea rows="5" name="message" required placeholder="Your message..." className="w-full bg-background border border-zinc-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors py-3.5 rounded-xl flex items-center justify-center gap-2 font-semibold">
              {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t border-zinc-800 bg-background pt-16 pb-8 mt-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
      <div className="text-3xl font-bold mb-8">NK<span className="text-accent">.</span></div>

      <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-400 mb-8">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="bg-zinc-800/80 p-3 text-zinc-400 hover:text-white hover:bg-zinc-700/80 rounded-xl transition-colors"><MessageCircle className="w-5 h-5" /></button>
        <button className="bg-zinc-800/80 p-3 text-zinc-400 hover:text-white hover:bg-zinc-700/80 rounded-xl transition-colors"><Globe className="w-5 h-5" /></button>
        <button className="bg-zinc-800/80 p-3 text-zinc-400 hover:text-white hover:bg-zinc-700/80 rounded-xl transition-colors"><Code2 className="w-5 h-5" /></button>
      </div>

      <div className="text-zinc-600 text-sm text-center">
        &copy; {new Date().getFullYear()} Nakul Kumar. All rights reserved.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 selection:bg-accent/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
