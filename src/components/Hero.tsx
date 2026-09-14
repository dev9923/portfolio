"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { HeroCanvas } from "@/components/webgl/HeroCanvas";
import { Container } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { site, statusLine } from "@/data/site";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const stagger = reduced
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: {
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
        },
      };
  const item = reduced
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 12 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
          },
        },
      };

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40">
      <HeroCanvas />
      <Container>
        <motion.div
          {...stagger}
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <motion.div {...item}>
              <Eyebrow>{site.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              {...item}
              className="mt-4 font-display text-display-lg font-bold text-fg"
            >
              DEVANSH
              <br />
              BANSAL
            </motion.h1>

            <motion.div
              {...item}
              aria-hidden
              className="mt-5 h-px w-28 bg-gradient-to-r from-accent via-accent-2 to-accent-3"
            />

            <motion.p
              {...item}
              className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              {...item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <span className="glass inline-flex max-w-full items-center gap-2.5 self-start rounded-full px-3.5 py-1.5">
                <span className="animate-pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                <span className="min-w-0 font-mono text-xs text-fg">
                  {statusLine[0]}
                </span>
              </span>
              <span className="hidden h-4 w-px bg-line sm:block" />
              <span className="font-mono text-xs text-subtle">
                {statusLine[1]}
              </span>
              <span className="hidden h-4 w-px bg-line sm:block" />
              <span className="font-mono text-xs text-subtle">
                {statusLine[2]}
              </span>
            </motion.div>

            <motion.div
              {...item}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Selected work
              </a>
              <a
                href={site.resumeUrl}
                download
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-fg transition-transform hover:-translate-y-0.5"
              >
                <Download size={16} aria-hidden />
                Résumé (PDF)
              </a>
            </motion.div>

            <motion.ul {...item} className="mt-10 flex items-center gap-2">
              <li className="mr-2 h-px w-8 bg-line" aria-hidden />
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full text-subtle transition-colors hover:bg-surface-hover hover:text-fg"
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div {...item} className="lg:col-span-5">
            <div className="relative mx-auto w-[180px] sm:w-[240px] lg:mx-0 lg:w-full lg:max-w-[380px]">
              <div
                aria-hidden
                className="glass absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] lg:rotate-[3deg]"
              />
              <div className="relative overflow-hidden rounded-[28px] border border-glass-line lg:rotate-[-2deg]">
                <Image
                  src="/Devansh.jpg"
                  alt="Devansh Bansal"
                  width={847}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 240px, 380px"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-accent-2/20 mix-blend-overlay"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-20 flex items-center gap-3">
          <ArrowDown size={12} className="text-subtle" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
            Scroll
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
