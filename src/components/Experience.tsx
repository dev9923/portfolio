import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { experience } from "@/data/experience";
import { accents } from "@/lib/accents";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        id="experience"
        eyebrow="Experience"
        title="Where I've shipped"
      />

      <div className="space-y-20 lg:space-y-28">
        {experience.map((company) => {
          const accent = accents[company.accent];
          return (
            <div key={company.id} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Sticky company rail */}
              <div className="lg:col-span-4">
                <Reveal className="lg:sticky lg:top-28">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {company.company}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-subtle">
                    <MapPin size={12} aria-hidden />
                    {company.location}
                  </p>
                  <p className="mt-1 font-mono text-xs text-subtle">
                    {company.tenureLabel}
                  </p>
                  <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-muted">
                    {company.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {company.stack.map((s) => (
                      <li key={s}>
                        <Chip>{s}</Chip>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Role timeline */}
              <div className="lg:col-span-8">
                <ol className="relative">
                  {company.roles.map((role, i) => {
                    const isLast = i === company.roles.length - 1;
                    const nextRole = company.roles[i + 1];
                    const promotionBelow =
                      role.promotedFrom && nextRole?.title === role.promotedFrom;

                    return (
                      <li key={role.title} className="relative pl-8 sm:pl-10">
                        {/* connector */}
                        {!isLast && (
                          <span
                            aria-hidden
                            className={cn(
                              "absolute left-[5px] top-4 w-px",
                              promotionBelow
                                ? "bottom-0 bg-gradient-to-b from-accent-2 via-accent to-line"
                                : "bottom-0 bg-line",
                            )}
                          />
                        )}
                        {/* dot */}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute left-0 top-2.5 h-[11px] w-[11px] rounded-full border-2",
                            role.current
                              ? "border-accent-2 bg-accent-2 shadow-glow"
                              : "border-line-strong bg-bg",
                          )}
                        />

                        <div className={cn(!isLast && "pb-10")}>
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h4 className="font-display text-lg font-semibold text-fg">
                              {role.title}
                            </h4>
                            {role.current && (
                              <span
                                className={cn(
                                  "rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                                  accent.tint,
                                  accent.text,
                                )}
                              >
                                Current
                              </span>
                            )}
                          </div>
                          <p className="mt-1 font-mono text-xs text-subtle">
                            {role.periodLabel}
                          </p>

                          <ul className="mt-4 divide-y divide-line border-y border-line">
                            {role.highlights.map((h) => (
                              <li
                                key={h}
                                className="py-3 text-sm leading-relaxed text-muted"
                              >
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {promotionBelow && (
                          <div className="absolute -left-[2px] bottom-6 flex items-center gap-2">
                            <span
                              aria-hidden
                              className="h-1.5 w-1.5 rotate-45 bg-accent-2"
                            />
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-2">
                              Promoted
                            </span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>

                {company.projects.length > 0 && (
                  <div className="mt-10 pl-8 sm:pl-10">
                    <h5 className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                      Key projects
                    </h5>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {company.projects.map((p) => (
                        <div
                          key={p.name}
                          className="glass rounded-xl p-4"
                        >
                          <h6 className="text-sm font-semibold text-fg">
                            {p.name}
                          </h6>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                            {p.description}
                          </p>
                          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-subtle">
                            {p.technologies.join(" · ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
