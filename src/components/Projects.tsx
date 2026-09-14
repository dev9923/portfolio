import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { featuredProjects, secondaryProjects } from "@/data/projects";
import { accents } from "@/lib/accents";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        id="work"
        eyebrow="Selected work"
        title="Things I've built"
        lede="Personal projects, all source-available — the ones at the top are worth reading first."
      />

      <div className="space-y-6">
        {featuredProjects.map((project, i) => {
          const Icon = icons[project.icon];
          const accent = accents[project.accent];
          return (
            <Reveal key={project.slug} delay={i * 0.05}>
              <GlassCard tilt={4} spotlight innerClassName="p-0">
                <article className="grid gap-0 lg:grid-cols-12">
                  <div
                    className={cn(
                      "relative grid min-h-[140px] place-items-center overflow-hidden bg-gradient-to-br p-8 lg:col-span-5 lg:min-h-[260px]",
                      accent.gradient,
                      i % 2 === 1 && "lg:order-2",
                    )}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-[0.14]"
                      style={{
                        backgroundImage:
                          "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                    <Icon
                      size={64}
                      strokeWidth={1.25}
                      className="relative text-white/90"
                      aria-hidden
                    />
                  </div>

                  <div className="p-6 sm:p-8 lg:col-span-7">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-fg sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <ul className="mt-5 divide-y divide-line border-y border-line">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="py-2.5 text-[13px] leading-relaxed text-muted"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <li key={t}>
                          <Chip>{t}</Chip>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent"
                        >
                          Live
                          <ArrowUpRight size={15} aria-hidden />
                        </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                      >
                        <Github size={15} aria-hidden />
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <h3 className="mt-16 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
        Also on GitHub
      </h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {secondaryProjects.map((project, i) => {
          const Icon = icons[project.icon];
          const accent = accents[project.accent];
          return (
            <Reveal key={project.slug} delay={i * 0.05}>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-3 rounded-xl border border-line p-4 transition-colors hover:border-line-strong hover:bg-surface-hover"
              >
                <span
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-lg",
                    accent.tint,
                    accent.text,
                  )}
                >
                  <Icon size={16} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1 text-sm font-medium text-fg">
                    {project.title}
                    <ArrowUpRight
                      size={13}
                      aria-hidden
                      className="shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-muted">
                    {project.summary}
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
