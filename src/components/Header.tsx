"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/Section";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-3">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4",
            scrolled
              ? "glass shadow-e2"
              : "border border-transparent bg-transparent",
          )}
        >
          <a
            href="#content"
            className="flex items-center gap-2.5 rounded-lg"
            aria-label={`${site.name} — home`}
          >
            {/* unoptimized: Next's image optimizer would strip the animation */}
            <Image
              src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
              alt=""
              aria-hidden
              width={40}
              height={40}
              unoptimized
              className="h-10 w-10 rounded-full border border-glass-line object-cover"
            />
            <span className="hidden font-display text-base font-semibold text-fg sm:block">
              {site.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                        isActive ? "text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-glass-strong"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={site.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg sm:inline-flex"
            >
              <Download size={14} aria-hidden />
              Résumé
            </a>
            <ThemeToggle />
            <button
              ref={triggerRef}
              className="rounded-lg p-2 text-fg md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="glass mt-2 overflow-hidden rounded-2xl md:hidden"
            >
              <ul className="p-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-fg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={site.resumeUrl}
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-fg"
                  >
                    <Download size={15} aria-hidden />
                    Résumé (PDF)
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
