import { links } from "@/lib/site";

const sizes = {
  sm: "h-10 px-4 text-[15px]",
  md: "h-12 px-5 text-base",
} as const;

export function CtaPair({ size = "md" }: { size?: keyof typeof sizes }) {
  const sizeClass = sizes[size];
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium outline-none transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:translate-y-px";

  return (
    <div className="flex items-center gap-3">
      <a
        href={links.getStarted}
        className={`${base} ${sizeClass} bg-accent text-white hover:bg-accent-hover`}
      >
        Get started
      </a>
      <a
        href={links.help}
        className={`${base} ${sizeClass} border border-ink/25 bg-surface text-ink hover:bg-background`}
      >
        Help
      </a>
    </div>
  );
}
