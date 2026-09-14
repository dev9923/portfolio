import { GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { aboutParagraphs, howIWork } from "@/data/site";
import { certifications, education } from "@/data/credentials";
import { accents } from "@/lib/accents";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <Section id="profile">
      <SectionHeader id="profile" eyebrow="Profile" title="About" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="mb-5 max-w-[62ch] text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              How I work
            </h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {howIWork.map((line) => (
                <li key={line} className="py-3 text-sm text-fg">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <div className="glass rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                  <GraduationCap size={16} aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-semibold text-fg">
                      Education
                    </h3>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Completed
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-fg">{education.degree}</p>
                  <p className="mt-1 text-[13px] text-muted">
                    {education.institution}, {education.location}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-subtle">
                    {education.period} · {education.grade}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              Certifications
            </h3>
            <p className="mt-2 text-[13px] text-muted">
              Completed outside the degree — applied AI and algorithms.
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((cert) => {
                const Icon = icons[cert.icon];
                const accent = accents[cert.accent];
                return (
                  <li key={cert.title} className="flex items-start gap-3 py-4">
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                        accent.tint,
                        accent.text,
                      )}
                    >
                      <Icon size={14} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">
                        {cert.issuer}
                      </p>
                      <h4 className="mt-0.5 text-sm font-medium text-fg">
                        {cert.credentialUrl ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-2"
                          >
                            {cert.title}
                          </a>
                        ) : (
                          cert.title
                        )}
                      </h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">
                        {cert.summary}
                      </p>
                      <p className="mt-1.5 text-[11px] text-subtle">
                        {cert.skills.join(" · ")}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
