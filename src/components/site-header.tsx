import { CtaPair } from "@/components/cta-pair";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-[15px] text-muted lg:flex" aria-label="Page">
          <a href="#functions" className="hover:text-ink">
            Functions
          </a>
          <a href="#pricing" className="hover:text-ink">
            Pricing
          </a>
          <a href="#setup" className="hover:text-ink">
            Setup
          </a>
        </nav>
        <CtaPair size="sm" />
      </div>
    </header>
  );
}
