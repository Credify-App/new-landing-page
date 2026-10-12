import { links, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-medium text-ink">{site.product}</p>
          <p className="mt-1">{site.company}</p>
          <p>{site.address}</p>
          <p className="mt-2">
            <a className="underline-offset-4 hover:underline" href={links.email}>
              {site.email}
            </a>
          </p>
          <p>
            <a className="underline-offset-4 hover:underline" href={links.phone}>
              {site.phoneDisplay}
            </a>
          </p>
        </div>
        <nav className="flex gap-5" aria-label="Legal">
          <a className="hover:text-ink" href={links.help}>
            Help
          </a>
          <a className="hover:text-ink" href={links.terms}>
            Terms
          </a>
          <a className="hover:text-ink" href={links.privacy}>
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
