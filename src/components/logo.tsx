import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-ink outline-none focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label="Credify home"
    >
      <svg
        viewBox="6.6 3.8 7.5 15.5"
        className="h-8 w-[17px] shrink-0"
        aria-hidden="true"
      >
        <path
          d="M13.8883 3.90039L6.72998 7.9462L6.73043 13.2369L9.0479 13.2374V9.42148L13.8883 6.68543V3.90039Z"
          fill="currentColor"
        />
        <path
          d="M13.8883 15.0537V12.2682L9.0479 15.0042V13.2373L6.72998 14.5471V19.0995L13.8883 15.0537Z"
          fill="#22B573"
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-[0.14em]">
        CREDIFY
      </span>
    </Link>
  );
}
