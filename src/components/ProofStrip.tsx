import { Container } from "@/components/ui/Section";
import { proofStrip } from "@/data/site";

export default function ProofStrip() {
  return (
    <div className="border-y border-line bg-glass">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {proofStrip.map((cell, i) => (
            <div
              key={cell.label}
              className={[
                "py-5 sm:py-6",
                i % 2 === 1 ? "border-l border-line pl-5" : "pr-5",
                "md:border-l md:pl-5",
                i === 0 ? "md:border-l-0 md:pl-0" : "",
                i < 2 ? "border-b border-line md:border-b-0" : "",
              ].join(" ")}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                {cell.label}
              </dt>
              <dd className="mt-1.5 text-[15px] font-medium leading-snug text-fg">
                {cell.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
