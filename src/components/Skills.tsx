import { Container } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { allSkills, learningTracks, skillGroups } from "@/data/skills";
import { accents } from "@/lib/accents";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const spanClass = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  6: "md:col-span-6",
} as const;

const half = Math.ceil(allSkills.length / 2);

export default function Skills() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="space-y-3 py-2">
        <Marquee items={allSkills.slice(0, half)} duration={44} />
        <Marquee items={allSkills.slice(half)} duration={58} reverse />
      </div>

      <Container className="mt-16">
        <SectionHeader id="stack" eyebrow="Stack" title="What I work with" />

        <div className="grid gap-3 md:grid-cols-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            const accent = accents[group.accent];
            return (
              <Reveal
                key={group.id}
                delay={i * 0.04}
                className={cn("h-full", spanClass[group.span])}
              >
                <div className="glass h-full rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-lg",
                        accent.tint,
                        accent.text,
                      )}
                    >
                      <Icon size={16} aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
            Currently going deeper
          </h3>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {learningTracks.map((track) => (
              <div
                key={track.topic}
                className="grid gap-1 py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6"
              >
                <dt className="text-sm font-medium text-fg">{track.topic}</dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {track.rationale}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
