"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Sun,
  Youtube,
  Github,
  Linkedin,
  FileText,
  Sparkles,
  Check,
  Copy,
  Mic,
  Terminal,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function PortfolioHome() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const {
    personal,
    metrics,
    experience,
    research,
    talks,
    projects,
    education,
    leadership,
    contentCreation,
    skills,
    certifications,
    reference,
  } = portfolioData;

  const categories = ["All", "Full-Stack Web", "Web Application", "Systems & Algorithms", "Core Programming"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0D0F12] text-stone-900 dark:text-stone-100 transition-colors duration-300">
      {/* Subtle Top Ambient Accent */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-stone-200/40 via-transparent to-transparent dark:from-emerald-950/15 dark:via-transparent" />

      {/* Minimalist Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF9F6]/85 dark:bg-[#0D0F12]/85 border-b border-stone-200/70 dark:border-stone-800/70">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-serif text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100"
          >
            S. A. Sayka<span className="text-emerald-700 dark:text-emerald-400">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-stone-600 dark:text-stone-400">
            <a href="#projects" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Research
            </a>
            <a href="#experience" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#community" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Leadership & Media
            </a>
            <a href="#contact" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle color theme"
              className="p-2 rounded-full border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-5xl mx-auto px-6 pt-14 pb-24 space-y-28">
        {/* 1. HERO SECTION */}
        <section className="pt-4">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 dark:bg-stone-800/70 border border-stone-300/60 dark:border-stone-700/60 text-[11px] font-medium text-stone-700 dark:text-stone-300">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                {personal.availability}
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.12] text-stone-900 dark:text-stone-50">
                  {personal.name}
                </h1>
                <p className="text-base sm:text-lg font-medium text-emerald-800 dark:text-emerald-400">
                  {personal.role}
                </p>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-400 max-w-2xl">
                {personal.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  Explore Selected Work
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-medium text-stone-800 dark:text-stone-200 hover:border-stone-900 dark:hover:border-stone-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Printable CV
                </Link>
              </div>

              {/* Social & Location Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-stone-500 dark:text-stone-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {personal.location}
                </span>
                <span className="text-stone-300 dark:text-stone-700">•</span>
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href={personal.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  YouTube
                </a>
              </div>
            </div>

            {/* Portrait Card */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-3xl bg-stone-200/70 dark:bg-stone-800/40 -z-10 transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="w-60 sm:w-64 aspect-[4/5] overflow-hidden rounded-2xl border border-stone-300/80 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-sm">
                  <img
                    src="/profile.png"
                    alt={personal.name}
                    className="w-full h-full object-cover object-center grayscale-[10%] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 text-[11px] font-mono text-stone-500 dark:text-stone-400">
                  <span>BSc in CSE Graduate · ULAB</span>
                  <span>IEEE Member</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-200/80 dark:border-stone-800/80">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#13161B] border border-stone-200/70 dark:border-stone-800/80"
              >
                <p className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 dark:text-stone-100">
                  {m.value}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SELECTED PROJECTS */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/80 dark:border-stone-800/80 pb-5">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">
                01 / Engineering Portfolio
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 text-stone-900 dark:text-stone-50">
                Selected Projects & Architecture
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900"
                      : "bg-stone-200/60 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={index}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                      {project.category}
                    </span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/70 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/80 text-[11px] font-mono text-stone-700 dark:text-stone-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-between items-center p-5 rounded-2xl bg-stone-100/80 dark:bg-[#13161B]/60 border border-stone-200/70 dark:border-stone-800/70">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-emerald-800 dark:text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                Explore additional academic repositories, C/C++ data structures, and coursework on GitHub.
              </p>
            </div>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:underline"
            >
              <span>my-academic-works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* 3. RESEARCH & INVITED TALKS */}
        <section id="research" className="scroll-mt-24 space-y-8">
          <div className="border-b border-stone-200/80 dark:border-stone-800/80 pb-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">
              02 / Scholarly Contributions
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 text-stone-900 dark:text-stone-50">
              Publications & Research Workshops
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Accepted IEEE Paper */}
            {research.map((paper, idx) => (
              <div
                key={idx}
                className="md:col-span-7 p-7 rounded-2xl bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/5 dark:bg-emerald-400/10 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                      <BookOpen className="w-3.5 h-3.5" />
                      {paper.status} · IEEE {paper.year}
                    </span>
                    <span className="text-xs font-mono text-stone-400">NLP / NMT</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-stone-900 dark:text-stone-50">
                    &ldquo;{paper.title}&rdquo;
                  </h3>

                  <p className="text-xs font-medium text-stone-700 dark:text-stone-300">
                    {paper.authors} — <span className="italic text-stone-500 dark:text-stone-400">{paper.venue}</span>
                  </p>

                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {paper.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/70 flex flex-wrap gap-2">
                  {paper.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-[11px] font-mono text-stone-700 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Invited Talk Card */}
            {talks.map((talk, idx) => (
              <div
                key={idx}
                className="md:col-span-5 p-7 rounded-2xl bg-stone-100/90 dark:bg-[#151920] border border-stone-200/80 dark:border-stone-800/80 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400">
                    <Mic className="w-3.5 h-3.5 text-emerald-800 dark:text-emerald-400" />
                    <span>{talk.role} · {talk.year}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
                    {talk.event}
                  </h3>

                  <p className="text-xs font-medium text-stone-500 dark:text-stone-400">
                    {talk.organization} · {talk.location}
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {talk.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-emerald-700 dark:text-emerald-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800 text-[11px] font-mono text-stone-500 dark:text-stone-400">
                  Focus: Indigenous Language Preservation via LLMs
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROFESSIONAL EXPERIENCE & EDUCATION */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="border-b border-stone-200/80 dark:border-stone-800/80 pb-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">
              03 / Career & Academics
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 text-stone-900 dark:text-stone-50">
              Experience & Education
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Industry Experience */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" /> Professional Experience
              </h3>

              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 space-y-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400 mt-0.5">
                        {exp.company} · <span className="text-stone-500 font-normal">{exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-stone-500">{exp.period}</span>
                  </div>

                  <ul className="space-y-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-stone-400 mt-1">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[11px] font-mono text-stone-600 dark:text-stone-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Column */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" /> Academic Background
              </h3>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                      <span>{edu.period}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 font-semibold text-stone-800 dark:text-stone-200">
                        {edu.score}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNICAL SKILLS & CERTIFICATIONS */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="border-b border-stone-200/80 dark:border-stone-800/80 pb-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">
              04 / Capabilities & Recognition
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 text-stone-900 dark:text-stone-50">
              Technical Stack & Honors
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-5 rounded-2xl bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3.5">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800/90 text-xs font-medium text-stone-800 dark:text-stone-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Awards Grid */}
          <div className="pt-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Awards, Hackathons & Certifications
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-colors ${
                    cert.highlight
                      ? "bg-stone-900 text-stone-50 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100"
                      : "bg-white dark:bg-[#13161B] border-stone-200/80 dark:border-stone-800/80"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono opacity-75 mb-1.5">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-snug">{cert.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. LEADERSHIP & SCIENCE COMMUNICATION (YOUTUBE) */}
        <section id="community" className="scroll-mt-24 space-y-8">
          <div className="border-b border-stone-200/80 dark:border-stone-800/80 pb-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">
              05 / Leadership & Science Communication
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 text-stone-900 dark:text-stone-50">
              IEEE Leadership & Technical Education
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* IEEE Leadership */}
            <div className="md:col-span-6 p-7 rounded-2xl bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  Executive Leadership
                </span>
                <span className="text-xs font-mono text-stone-500">IEEE ID: 101402663</span>
              </div>

              <div className="space-y-5">
                {leadership.map((item, idx) => (
                  <div
                    key={idx}
                    className="pb-4 last:pb-0 border-b last:border-b-0 border-stone-100 dark:border-stone-800/80"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100">
                        {item.role}
                      </h3>
                      <span className="text-xs font-mono text-stone-500">{item.period}</span>
                    </div>
                    <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-0.5">
                      {item.organization}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Channel Card */}
            <div className="md:col-span-6 p-7 rounded-2xl bg-stone-100/90 dark:bg-[#151920] border border-stone-200/80 dark:border-stone-800/80 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 dark:text-stone-300">
                    <Youtube className="w-4 h-4 text-red-600 dark:text-red-400" />
                    {contentCreation.platform}
                  </span>
                  <span className="text-xs font-mono text-stone-500">{contentCreation.period}</span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-stone-900 dark:text-stone-50">
                  {contentCreation.role}
                </h3>

                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {contentCreation.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {contentCreation.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-white dark:bg-[#13161B] border border-stone-200/70 dark:border-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-500">Accessible CS Education</span>
                <a
                  href={personal.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Visit YouTube Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT & REFERENCE FOOTER */}
        <section id="contact" className="scroll-mt-24 pt-4">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#13161B] border border-stone-200/90 dark:border-stone-800/90 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">
                06 / Get In Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-50">
                Let&apos;s build or research together.
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-lg leading-relaxed">
                Whether you&apos;re recruiting for software engineering roles, collaborating on NLP research, or looking for a technical speaker, I&apos;d love to connect.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {personal.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-medium text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-400 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Academic Reference Box */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-[#FAF9F6] dark:bg-[#0D0F12] border border-stone-200/80 dark:border-stone-800/80 space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                Academic Reference
              </p>
              <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100">
                {reference.name}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {reference.title}
                <br />
                {reference.institution}
              </p>
              <p className="text-xs font-mono text-stone-500 pt-1">
                <a href={`mailto:${reference.email}`} className="hover:underline">
                  {reference.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-stone-200/70 dark:border-stone-800/70 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <p>© {new Date().getFullYear()} Sumaia Afroz Sayka. Crafted with Next.js, React & Tailwind CSS.</p>
          <div className="flex items-center gap-5">
            <a href={personal.links.github} target="_blank" rel="noreferrer" className="hover:text-stone-900 dark:hover:text-white">
              GitHub
            </a>
            <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-stone-900 dark:hover:text-white">
              LinkedIn
            </a>
            <a href={personal.links.youtube} target="_blank" rel="noreferrer" className="hover:text-stone-900 dark:hover:text-white">
              YouTube
            </a>
            <Link href="/cv" className="hover:text-stone-900 dark:hover:text-white">
              Printable CV
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

