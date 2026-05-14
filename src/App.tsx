import React from 'react';
import { STUDENT, ACTIVITIES, EXPERIENCE, TRIBUTES } from './data/portfolioData';
import ActivityCard from './components/ActivityCard';
import Experience from './components/Experience';
import { SectionTitle, Divider } from './components/portfolioComponents';

export default function App() {
  const renderPeriod = (period: 'Prelims' | 'Midterms' | 'Finals') => (
    <section className="mb-14">
      <h3 className="text-base font-semibold uppercase tracking-widest text-blue-400 mb-6 pl-3 border-l-2 border-blue-500">
        {period}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACTIVITIES.filter((act) => act.period === period).map((act) => (
          <ActivityCard key={act.id} activity={act} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400 tracking-widest uppercase">
            {STUDENT.name.split(' ')[0]}
          </span>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#progress" className="hover:text-zinc-100 transition-colors">Labs</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#tributes" className="hover:text-zinc-100 transition-colors">Tributes</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 pt-40 pb-24 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-zinc-100 leading-tight mb-3">
            Hi, I'm <br />
            <span className="text-blue-400">{STUDENT.name}</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            {STUDENT.course} · {STUDENT.university}
          </p>
          <p className="text-zinc-400 max-w-md leading-relaxed text-sm mb-6">
            Welcome to my portfolio! This is where I compile all of my laboratory
            activities, projects, and coursework throughout the semester. Scroll down
            to see my progress.
          </p>
          <div className="flex flex-col gap-1 text-xs text-zinc-600">
            <span>Subject: <span className="text-zinc-400">{STUDENT.subject}</span></span>
            <span>Professor: <span className="text-zinc-400">{STUDENT.professor}</span></span>
            <span>Semester: <span className="text-zinc-400">{STUDENT.semester}</span></span>
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-52 h-52 rounded-full border border-zinc-700 overflow-hidden bg-zinc-900">
            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="progress" className="max-w-5xl mx-auto px-6 pb-24">

        <SectionTitle>My Progress</SectionTitle>

        {renderPeriod('Prelims')}
        <Divider />
        {renderPeriod('Midterms')}
        <Divider />
        {renderPeriod('Finals')}

        <Divider />

        {/* EXPERIENCE */}
        <div id="experience">
          <Experience data={EXPERIENCE} />
        </div>

        <Divider />

        {/* TRIBUTES */}
        <section id="tributes">
          <SectionTitle>Tributes</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRIBUTES.map((t, i) => (
              <div
                key={i}
                className={`rounded-lg border p-5 ${
                  t.special
                    ? 'border-blue-500/40 bg-blue-500/5'
                    : 'border-zinc-800 bg-zinc-900'
                }`}
              >
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 block">
                  {t.role}
                </span>
                <p className="font-semibold text-zinc-100 text-sm mb-2">{t.name}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{t.message}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-600">
        {STUDENT.name} © 2026 · {STUDENT.university}
      </footer>
    </div>
  );
}
