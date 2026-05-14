import React from 'react';
import type { ExperienceAnswers } from '../types';
import { SectionTitle } from './portfolioComponents';

const Block: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-6 last:mb-0">
    <h4 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3">{label}</h4>
    {children}
  </div>
);

const Experience: React.FC<{ data: ExperienceAnswers }> = ({ data }) => {
  return (
    <section>
      <SectionTitle>Course Experience</SectionTitle>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">

        <Block label="What I like about the course">
          <ul className="space-y-2">
            {data.likes.map((item, i) => (
              <li key={i} className="text-sm text-zinc-400 flex gap-2">
                <span className="text-blue-500 mt-0.5 shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </Block>

        <div className="border-t border-zinc-800 my-5" />

        <Block label="Favorite Topics">
          <ul className="space-y-2">
            {data.favoriteTopics.map((t, i) => (
              <li key={i} className="text-sm text-zinc-400">
                <span className="text-zinc-200 font-medium">{t.topic}</span>
                <span className="text-zinc-600"> — </span>
                {t.reason}
              </li>
            ))}
          </ul>
        </Block>

        <div className="border-t border-zinc-800 my-5" />

        <Block label="Favorite Activities">
          <ul className="space-y-2">
            {data.favoriteActivities.map((a, i) => (
              <li key={i} className="text-sm text-zinc-400">
                <span className="text-zinc-200 font-medium">{a.title}</span>
                <span className="text-zinc-600"> — </span>
                {a.why}
              </li>
            ))}
          </ul>
        </Block>

        <div className="border-t border-zinc-800 my-5" />

        <Block label="Most Challenging Topics">
          <ul className="space-y-2">
            {data.challenging.map((c, i) => (
              <li key={i} className="text-sm text-zinc-400">
                <span className="text-zinc-200 font-medium">{c.topic}</span>
                <span className="text-zinc-600"> — </span>
                {c.note}
              </li>
            ))}
          </ul>
        </Block>

      </div>
    </section>
  );
};

export default Experience;
