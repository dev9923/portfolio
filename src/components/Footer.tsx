import { Container } from "@/components/ui/Section";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-subtle">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-xs text-subtle">
            Built with Next.js, Tailwind and Framer Motion
          </p>
          <a
            href="#content"
            className="font-mono text-xs text-subtle transition-colors hover:text-fg"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
