import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone,
  Code2, ChevronLeft, ChevronRight, Menu, X,
  ArrowUpRight, Download, User, Award, Briefcase, Smile, Star,
  Send
} from 'lucide-react';

/* ─── Inline social brand icons ─── */
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ─────────────────────────── SKILL BAR ─────────────────────────── */
const SkillBar = ({ name, pct, icon }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-gray-200">{name}</span>
        </div>
        <span className="text-xs font-semibold text-violet-400">{pct}%</span>
      </div>
      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

/* ─────────────────────────── STAT CARD ─────────────────────────── */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="card-glass card-hover rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
    <div className={`p-2.5 sm:p-3 rounded-xl bg-white/5 shrink-0 ${color}`}>
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <div>
      <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
      <div className="text-[11px] sm:text-xs text-gray-400 font-medium">{label}</div>
    </div>
  </div>
);

/* ─────────────────────────── TECH ICON ─────────────────────────── */
const TechIcon = ({ label, bg, textColor, short }) => (
  <div className="group relative">
    <div
      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all duration-300 group-hover:scale-110 cursor-default ${bg} ${textColor}`}
    >
      {short}
    </div>
    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border border-border hidden sm:block">
      {label}
    </div>
  </div>
);

/* ─────────────────────────── NAVBAR ─────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d0d1a]/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[65px] sm:h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg gradient-btn flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-base sm:text-lg font-bold text-white">NK<span className="gradient-text">Dev</span></span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l.toLowerCase())}
              className={`nav-link ${active === l.toLowerCase() ? 'active text-white' : ''}`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA — desktop */}
        <a
          href="#contact"
          className="hidden lg:flex gradient-btn items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
        >
          Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d0d1a]/98 backdrop-blur-xl border-b border-border px-4 sm:px-6 py-4">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => { setIsOpen(false); setActive(l.toLowerCase()); }}
              className="flex items-center py-3 text-gray-400 hover:text-white border-b border-border/50 text-sm font-medium last:border-0 transition-colors"
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="gradient-btn flex items-center justify-center gap-1.5 text-white text-sm font-semibold px-5 py-3 rounded-xl mt-4">
            Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
};

/* ─────────────────────────── HERO ─────────────────────────── */
const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[65px] sm:pt-[70px]">
    {/* Background glows */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 sm:top-20 left-[5%] sm:left-[10%] w-48 h-48 sm:w-96 sm:h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-[5%] sm:right-[10%] w-40 h-40 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-10 pb-20 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

      {/* ── LEFT TEXT ── */}
      <div className="order-2 lg:order-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-400 animate-pulse2" />
          <span className="text-[10px] sm:text-xs font-semibold text-violet-300 tracking-widest uppercase">I'm a Backend Developer</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 leading-tight">
          Hi, I'm <span className="gradient-text text-glow">Nakul</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-4 sm:mb-5 leading-snug">
          I build things for the web.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
          I'm a passionate backend developer specializing in building exceptional digital experiences with Python, FastAPI & modern technologies.
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-3 mb-8 sm:mb-10">
          <a href="#projects" className="gradient-btn flex-1 flex items-center justify-center gap-1.5 text-white font-semibold px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm whitespace-nowrap">
            View My Work <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a href="#" className="flex-1 flex items-center justify-center gap-1.5 border border-border hover:border-violet-500/50 bg-white/5 hover:bg-white/10 text-gray-200 font-semibold px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm transition-all whitespace-nowrap">
            Download CV <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Tech icons */}
        <div>
          <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-widest mb-3 sm:mb-4">Technologies I work with</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <TechIcon label="Python"     bg="bg-[#3776AB]/20" textColor="text-[#4fa8e8]" short="Py"  />
            <TechIcon label="FastAPI"    bg="bg-[#009688]/20" textColor="text-[#26a69a]" short="FA"  />
            <TechIcon label="MongoDB"    bg="bg-[#47A248]/20" textColor="text-[#5cbb5a]" short="MG"  />
            <TechIcon label="PostgreSQL" bg="bg-[#336791]/20" textColor="text-[#5b95c2]" short="PG"  />
            <TechIcon label="REST API"   bg="bg-violet-500/20" textColor="text-violet-400" short="API"/>
            <TechIcon label="Git"        bg="bg-[#F05032]/20" textColor="text-[#f06e55]" short="Git" />
            <TechIcon label="RAG/AI"     bg="bg-pink-500/20"  textColor="text-pink-400"  short="AI"  />
          </div>
        </div>
      </div>

      {/* ── RIGHT PHOTO ── */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96">
          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 blur-2xl opacity-25 animate-pulse2" />

          {/* Circle photo frame */}
          <div className="relative w-full h-full rounded-full border-4 border-violet-500/40 glow-ring overflow-hidden bg-gradient-to-br from-violet-900/60 to-blue-900/60">
            <img
              src="/avatar.png"
              alt="Nakul Kumar – Backend Developer"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>

          {/* Floating code card — visible on ALL screen sizes */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-bottom-3 sm:-left-8 md:-left-14 bg-[#12122a] border border-border rounded-2xl p-2.5 sm:p-4 shadow-2xl w-40 sm:w-52 animate-float z-10">
            <div className="flex items-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
              <span className="text-[8px] sm:text-[10px] text-gray-500 ml-1 fira">code.py</span>
            </div>
            <pre className="fira text-[8px] sm:text-[10px] leading-relaxed text-violet-300">{`developer = {
  name: "Nakul",
  skills: ["Python",
    "FastAPI","AI"],
  passion: "backend"
}`}</pre>
          </div>

          {/* Dot grid decoration */}
          <div className="hidden sm:block absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 dot-grid rounded-lg opacity-50" />
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────── ABOUT ─────────────────────────── */
const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
      {/* Left */}
      <div>
        <p className="section-label mb-3">ABOUT ME</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          I'm passionate about<br />creating digital solutions
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base max-w-lg">
          With hands-on experience in backend development, I help businesses and individuals bring their ideas to life through clean, efficient, and scalable code. I specialize in Python, FastAPI, and AI integrations.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 border border-border hover:border-violet-500/50 bg-white/5 hover:bg-white/10 text-gray-200 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm transition-all">
          <User className="w-4 h-4" /> Learn More About Me
        </a>
      </div>

      {/* Right — Stats grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <StatCard icon={Briefcase} value="4+"   label="Years Experience"   color="text-violet-400" />
        <StatCard icon={Code2}     value="50+"  label="Projects Completed" color="text-blue-400"   />
        <StatCard icon={Smile}     value="30+"  label="Happy Clients"      color="text-emerald-400"/>
        <StatCard icon={Star}      value="100%" label="Client Satisfaction"color="text-amber-400"  />
      </div>
    </div>
  </section>
);

/* ─────────────────────────── SKILLS ─────────────────────────── */
const SkillsSection = () => {
  const col1 = [
    { name: 'Python',         pct: 90, icon: '🐍' },
    { name: 'Backend Dev',    pct: 90, icon: '⚙️' },
    { name: 'AI Integration', pct: 80, icon: '🤖' },
  ];
  const col2 = [
    { name: 'FastAPI',   pct: 85, icon: '⚡' },
    { name: 'MongoDB',   pct: 80, icon: '🍃' },
    { name: 'REST APIs', pct: 85, icon: '🔗' },
  ];
  const col3 = [
    { name: 'PostgreSQL',  pct: 75, icon: '🐘' },
    { name: 'RAG / LLMs',  pct: 78, icon: '🧠' },
    { name: 'Git & GitHub', pct: 88, icon: '🔀' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="section-label mb-3">MY SKILLS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Technologies I Master</h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* 3-col on lg+, 2-col on md, 1-col on sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col gap-5 sm:gap-6">
            {col1.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="flex flex-col gap-5 sm:gap-6">
            {col2.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="flex flex-col gap-5 sm:gap-6 md:col-span-2 lg:col-span-1">
            {col3.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── PROJECT CARD ─────────────────────────── */
const ProjectCard = ({ num, title, desc, tags, github, live, gradient }) => (
  <div className="card-glass card-hover rounded-2xl overflow-hidden group flex flex-col">
    {/* Thumbnail */}
    <div className={`h-36 sm:h-44 ${gradient} relative flex items-center justify-center`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Code2 className="w-20 h-20 sm:w-24 sm:h-24 text-white" />
      </div>
      <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-3 text-left w-4/5">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 sm:h-2 bg-white/20 rounded w-3/4" />
          <div className="h-1.5 sm:h-2 bg-white/15 rounded w-1/2" />
          <div className="h-1.5 sm:h-2 bg-white/10 rounded w-2/3" />
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg fira">
        {num}
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 flex flex-col flex-1">
      <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 line-clamp-1">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{desc}</p>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
        {tags.map(t => (
          <span key={t} className="text-[9px] sm:text-[10px] text-violet-400 border border-violet-500/20 bg-violet-500/5 px-1.5 sm:px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>

      <div className="flex gap-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-border hover:border-gray-600 px-3 py-1.5 rounded-lg transition-all">
            <GithubIcon className="w-3 h-3" /> Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white gradient-btn px-3 py-1.5 rounded-lg">
            View Project <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  </div>
);

/* ─────────────────────────── PROJECTS ─────────────────────────── */
const ProjectsSection = () => {
  const projects = [
    {
      num: '01', title: 'AI-Powered Chatbot Platform',
      desc: 'Intelligent chatbot using Python & FastAPI integrated with GPT models. Context-aware conversations with real-time responses.',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI API', 'MongoDB'],
      github: 'https://github.com/dc-singh', live: null,
      gradient: 'bg-gradient-to-br from-violet-900/80 to-purple-800/50',
    },
    {
      num: '02', title: 'Expense Tracker API',
      desc: 'RESTful API for expense tracking with budgeting features. JWT authentication and financial report generation.',
      tags: ['Python', 'FastAPI', 'MongoDB', 'PostgreSQL'],
      github: 'https://github.com/dc-singh/Expense_tracker_with_budget_API', live: null,
      gradient: 'bg-gradient-to-br from-blue-900/80 to-cyan-800/50',
    },
    {
      num: '03', title: 'Task Management API',
      desc: 'Task management system with JWT auth, full CRUD operations, and PostgreSQL data storage on Render.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'JWT Auth'],
      github: 'https://github.com/dc-singh/Task_management',
      live: 'https://task-management-8owj.onrender.com/',
      gradient: 'bg-gradient-to-br from-emerald-900/80 to-teal-800/50',
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="section-label mb-3">FEATURED PROJECTS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Some of My Recent Work</h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Grid — 3-col on lg, 2-col on md, 1-col on sm/xs */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>

        {/* Mobile single card + nav */}
        <div className="md:hidden max-w-sm mx-auto">
          <ProjectCard {...projects[current]} />
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setCurrent(c => (c === 0 ? projects.length - 1 : c - 1))}
              className="p-2 rounded-full border border-border text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {projects.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${current === i ? 'w-6 bg-violet-500' : 'w-2 bg-gray-600'}`} />
            ))}
            <button
              onClick={() => setCurrent(c => (c === projects.length - 1 ? 0 : c + 1))}
              className="p-2 rounded-full border border-border text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-6 sm:mt-8">
          {projects.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-6 bg-violet-500' : 'w-1.5 bg-gray-600'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── CERTIFICATES ─────────────────────────── */
const CertificatesSection = () => {
  const certs = [
    { title: 'Ethical Hacking Certificate', year: '2023', desc: 'Comprehensive certification covering penetration testing, network security, vulnerability assessment, and cybersecurity best practices.', issuer: 'One Byte Lab' },
    { title: 'Tally Operator Certificate',  year: '2025', desc: 'Professional certification in Tally ERP software for accounting, inventory management, and financial reporting.', issuer: 'ACTC' }
  ];

  return (
    <section id="certificates" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="section-label mb-3">CERTIFICATES & ACHIEVEMENTS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">My Credentials</h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <div key={i} className="card-glass card-hover rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="gradient-btn p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-1">{cert.title}</h3>
                  <p className="text-xs text-gray-500 mb-2 sm:mb-3">{cert.year} · {cert.issuer}</p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── CTA + TESTIMONIAL + SOCIAL ─────────────────────────── */
const CTASection = () => (
  <section className="py-12 sm:py-16 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">

        {/* Left – CTA */}
        <div>
          <p className="section-label mb-3">LET'S WORK TOGETHER</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Have a project in mind?</h2>
          <p className="text-gray-400 text-sm mb-5 sm:mb-6 leading-relaxed">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <a href="#contact" className="gradient-btn inline-flex items-center gap-2 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm">
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Center – Testimonial */}
        <div className="card-glass rounded-2xl p-5 sm:p-6">
          <div className="text-3xl sm:text-4xl text-violet-400 font-serif mb-3 leading-none">"</div>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 italic">
            Nakul is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gradient-btn flex items-center justify-center text-white font-bold text-sm shrink-0">S</div>
            <div>
              <p className="text-white text-xs sm:text-sm font-semibold">Sarah Johnson</p>
              <p className="text-gray-500 text-xs">CEO, TechStart</p>
            </div>
          </div>
        </div>

        {/* Right – Contact info */}
        <div className="md:col-span-2 lg:col-span-1">
          <p className="section-label mb-3 sm:mb-4">FOLLOW ME</p>
          <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6">
            {[
              { href: 'https://github.com/dc-singh', Icon: GithubIcon },
              { href: 'https://www.linkedin.com/in/nakul-python-developer', Icon: LinkedinIcon },
              { href: 'https://twitter.com', Icon: TwitterIcon },
              { href: 'https://instagram.com', Icon: InstagramIcon },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-border hover:border-violet-500/40 hover:bg-violet-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400 break-all">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
              <span>nakulkumar740953485@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400 shrink-0" />
              <span>+91 74095 3485</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────── CONTACT ─────────────────────────── */
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append('access_key', '09fa51ca-a286-4a97-a199-d7f2c6ffdc3e');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) { alert('Message sent successfully!'); e.target.reset(); }
      else alert('Error: ' + data.message);
    } catch { alert('Something went wrong. Please try again.'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="section-label mb-3">GET IN TOUCH</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Send Me a Message</h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto card-glass rounded-2xl p-5 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 sm:mb-2 ml-1">Name</label>
                <input name="name" required placeholder="Your name"
                  className="w-full bg-white/5 border border-border hover:border-violet-500/30 focus:border-violet-500 rounded-xl p-3 sm:p-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 sm:mb-2 ml-1">Email</label>
                <input type="email" name="email" required placeholder="your@email.com"
                  className="w-full bg-white/5 border border-border hover:border-violet-500/30 focus:border-violet-500 rounded-xl p-3 sm:p-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5 sm:mb-2 ml-1">Message</label>
              <textarea name="message" rows="4" required placeholder="Your message..."
                className="w-full bg-white/5 border border-border hover:border-violet-500/30 focus:border-violet-500 rounded-xl p-3 sm:p-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none" />
            </div>
            <button type="submit" disabled={isSubmitting}
              className="w-full gradient-btn disabled:opacity-60 disabled:cursor-not-allowed py-3 sm:py-3.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-white text-sm">
              {isSubmitting ? 'Sending…' : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── FOOTER ─────────────────────────── */
const Footer = () => (
  <footer className="border-t border-border py-6 sm:py-8 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg gradient-btn flex items-center justify-center">
          <Code2 className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-sm font-bold text-white">NK<span className="gradient-text">Dev</span></span>
      </div>
      <p className="text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Nakul Kumar. All rights reserved. Made with ❤️ by Nakul
      </p>
    </div>
  </footer>
);

/* ─────────────────────────── APP ─────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-gray-100 selection:bg-violet-500/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
