import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "electric" | "light";
}) {
  const variants = {
    default: "text-ink-500 before:bg-ink-300",
    electric: "text-electric before:bg-electric",
    light: "text-white/70 before:bg-white/40",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] font-medium",
        "before:content-[''] before:block before:w-6 before:h-px",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
