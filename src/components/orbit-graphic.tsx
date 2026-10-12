"use client";

import { motion, useReducedMotion } from "motion/react";
import { siMeta, siQuickbooks, siShopify } from "simple-icons";

const spin = { duration: 42, repeat: Infinity, ease: "linear" as const };

const platforms = [
  {
    name: "Amazon",
    path: null,
    letter: "a",
    bg: "#ffffff",
    fg: "#111111",
    angle: 188,
    radius: 34,
  },
  {
    name: "Shopify",
    path: siShopify.path,
    letter: null,
    bg: "#95BF47",
    fg: "#ffffff",
    angle: -78,
    radius: 36,
  },
  {
    name: "Meta Ads",
    path: siMeta.path,
    letter: null,
    bg: "#0668E1",
    fg: "#ffffff",
    angle: -18,
    radius: 30,
  },
  {
    name: "WooCommerce",
    path: null,
    letter: "W",
    bg: "#7F54B3",
    fg: "#ffffff",
    angle: 18,
    radius: 42,
  },
  {
    name: "QuickBooks",
    path: siQuickbooks.path,
    letter: null,
    bg: "#2CA01C",
    fg: "#ffffff",
    angle: 58,
    radius: 36,
  },
  {
    name: "Odoo",
    path: null,
    letter: "O",
    bg: "#875A7B",
    fg: "#ffffff",
    angle: 132,
    radius: 40,
  },
];

function place(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(rad) * radius}%`,
    top: `${50 + Math.sin(rad) * radius}%`,
  };
}

export function OrbitGraphic() {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-2xl bg-[#12141a] px-4 py-8 sm:px-8 sm:py-12">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {[16, 26, 36, 46].map((radius) => (
            <circle
              key={radius}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.16"
              strokeWidth="0.35"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white shadow-[0_10px_30px_rgb(0_0_0_/_0.35)]">
          <svg viewBox="6.6 3.8 7.5 15.5" className="h-8 w-[18px]" aria-hidden="true">
            <path
              d="M13.8883 3.90039L6.72998 7.9462L6.73043 13.2369L9.0479 13.2374V9.42148L13.8883 6.68543V3.90039Z"
              fill="#4536A0"
            />
            <path
              d="M13.8883 15.0537V12.2682L9.0479 15.0042V13.2373L6.72998 14.5471V19.0995L13.8883 15.0537Z"
              fill="#22B573"
            />
          </svg>
        </div>

        <motion.ul
          className="absolute inset-0"
          aria-label="Platforms that connect into Credify"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={reduce ? undefined : spin}
        >
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="absolute"
              style={place(platform.angle, platform.radius)}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={reduce ? undefined : { rotate: -360 }}
                  transition={reduce ? undefined : spin}
                  className="grid h-14 w-14 place-items-center rounded-2xl shadow-[0_8px_24px_rgb(0_0_0_/_0.28)] sm:h-16 sm:w-16"
                  style={{ background: platform.bg, color: platform.fg }}
                  title={platform.name}
                >
                  <span className="sr-only">{platform.name}</span>
                  {platform.path ? (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                      <path d={platform.path} fill="currentColor" />
                    </svg>
                  ) : (
                    <span className="text-xl font-semibold" aria-hidden="true">
                      {platform.letter}
                    </span>
                  )}
                </motion.div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
