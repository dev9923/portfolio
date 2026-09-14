import { cn } from "@/lib/utils";

const spacing = {
  sm: "py-14 sm:py-16",
  md: "py-20 sm:py-24",
  lg: "py-24 sm:py-32",
} as const;

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("px-5 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </div>
  );
}

export function Section({
  id,
  size = "md",
  className,
  children,
}: {
  id: string;
  size?: keyof typeof spacing;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("relative scroll-mt-24", spacing[size], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
