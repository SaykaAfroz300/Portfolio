"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function CVPage() {
  const { personal, education, experience, projects, research, talks, leadership, skills, certifications, reference } =
    portfolioData;

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0D0F12] text-stone-900 dark:text-stone-100 py-10 px-4 sm:px-8 print:bg-white print:text-black print:p-0">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          <Printer className="w-3.5 h-3.5" />
          Print / Save as PDF
        </button>
      </div>

      {/* CV Sheet */}
      <main className="max-w-4xl mx-auto bg-white dark:bg-[#13161B] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-8 sm:p-12 shadow-sm print:shadow-none print:border-none print:p-0">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
              {personal.name}
            </h1>
            <p className="mt-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-400">
              {personal.role}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-600 dark:text-stone-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {personal.location}
              </span>
              <a href={`tel:${personal.phone}`} className="inline-flex items-center gap-1.5 hover:underline">
                <Phone className="w-3.5 h-3.5" /> {personal.phone}
              </a>
              <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                <Mail className="w-3.5 h-3.5" /> {personal.email}
              </a>
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-4 text-xs font-medium text-stone-700 dark:text-stone-300">
              <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a href={personal.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a href={personal.links.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <img
            src="/profile.png"
            alt={personal.name}
            className="w-24 h-28 object-cover object-center rounded-xl border border-stone-200 dark:border-stone-700 shrink-0"
          />
        </header>

        {/* Education */}
        <section className="py-6 border-b border-stone-200/80 dark:border-stone-800/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-4">
            Education
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{edu.institution}</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">{edu.degree}</p>
                <p className="text-xs text-stone-500 mt-0.5">{edu.period}</p>
                <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-1">{edu.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-6 border-b border-stone-200/80 dark:border-stone-800/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-4">
            Professional Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {exp.role} — <span className="italic font-normal text-stone-600 dark:text-stone-400">{exp.company}</span>
                </h3>
                <span className="text-xs text-stone-500">{exp.period} · {exp.location}</span>
              </div>
              <ul className="mt-2.5 space-y-1.5 text-xs text-stone-600 dark:text-stone-300 list-disc list-inside">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="py-6 border-b border-stone-200/80 dark:border-stone-800/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-4">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{proj.title}</h3>
                  <span className="text-xs text-stone-500">{proj.year}</span>
                </div>
                <p className="text-[11px] font-mono text-emerald-800 dark:text-emerald-400 mt-0.5">
                  {proj.tech.join(", ")}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications & Research Talks */}
        <section className="py-6 border-b border-stone-200/80 dark:border-stone-800/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-4">
            Publications & Invited Talks
          </h2>
          {research.map((pub, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{pub.status}</h3>
                <span className="text-xs text-stone-500">{pub.year}</span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 mt-1">
                {pub.authors}, &ldquo;{pub.title},&rdquo; <span className="italic">{pub.venue}</span>.
              </p>
            </div>
          ))}
          {talks.map((talk, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {talk.role} — <span className="font-normal italic">{talk.event}, {talk.organization}</span>
                </h3>
                <span className="text-xs text-stone-500">{talk.year}</span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs text-stone-600 dark:text-stone-400 list-disc list-inside">
                {talk.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="py-6 border-b border-stone-200/80 dark:border-stone-800/80">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-4">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group}>
                <span className="font-semibold text-stone-900 dark:text-stone-100">{group}: </span>
                <span className="text-stone-600 dark:text-stone-400">{list.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Certifications */}
        <section className="py-6 grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-3">
              Leadership & IEEE
            </h2>
            <div className="space-y-3">
              {leadership.map((item, i) => (
                <div key={i} className="text-xs">
                  <p className="font-semibold text-stone-900 dark:text-stone-100">
                    {item.role} · {item.organization}
                  </p>
                  <p className="text-stone-500">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-3">
              Honors & Certifications
            </h2>
            <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
              {certifications.map((cert, i) => (
                <li key={i} className="flex justify-between gap-2">
                  <span>{cert.title}</span>
                  <span className="text-stone-500 shrink-0">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reference */}
        <section className="pt-6 border-t border-stone-200/80 dark:border-stone-800/80 text-xs">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-2">
            Academic Reference
          </h2>
          <p className="font-semibold text-stone-900 dark:text-stone-100">{reference.name}</p>
          <p className="text-stone-600 dark:text-stone-400">{reference.title}, {reference.institution}</p>
          <p className="text-stone-500 mt-0.5">Email: {reference.email}</p>
        </section>
      </main>
    </div>
  );
}

