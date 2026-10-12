import Image from "next/image";
import { CtaPair } from "@/components/cta-pair";
import { HeroVisual } from "@/components/hero-visual";
import { OrbitGraphic } from "@/components/orbit-graphic";

const functions = [
  {
    title: "Unified dashboard",
    body: "Sales, orders, and trends from every connected store sit on one Analytics page.",
  },
  {
    title: "Filter by store",
    body: "Keep all stores in view, or limit the same page to Amazon or one other shop.",
  },
  {
    title: "Channel comparison",
    body: "See which connected store the revenue is coming from.",
  },
  {
    title: "Custom reports",
    body: "Create a performance report from the sales data you connect.",
  },
  {
    title: "Real-time insights",
    body: "Read current numbers instead of exporting files and merging them by hand.",
  },
  {
    title: "Next step",
    body: "A short note on the Analytics page suggests what to do with the numbers.",
  },
];

const included = [
  "Unified dashboard for every connected store",
  "Filters by store and channel",
  "Custom performance reports",
  "Real-time sales, orders, and trends",
  "Next-step notes on the Analytics page",
];

export default function Home() {
  return (
    <main id="main">
      <section className="mx-auto max-w-[1100px] px-4 pb-6 pt-12 text-center sm:px-6 lg:pt-16">
        <h1 className="mx-auto max-w-[12ch] text-4xl font-medium tracking-tight text-ink md:text-5xl lg:max-w-[14ch] lg:text-6xl lg:leading-[1.05]">
          All your store sales in one dashboard
        </h1>
        <p className="mx-auto mt-5 max-w-[38ch] text-lg leading-relaxed text-muted">
          Amazon, Shopify, and your other platforms, together on one analytics
          page.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaPair />
        </div>
        <HeroVisual />
      </section>

      <section id="connect" className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="mx-auto max-w-[18ch] text-center text-3xl font-medium tracking-tight md:text-4xl">
          Every platform, one Credify view
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-center text-lg leading-relaxed text-muted">
          Amazon, Shopify, WooCommerce, Odoo, QuickBooks, and Meta Ads connect
          into the same dashboard.
        </p>
        <div className="mt-12">
          <OrbitGraphic />
        </div>
      </section>

      <section id="functions" className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 lg:py-16">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-4xl">
          What the app does
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-center text-lg leading-relaxed text-muted">
          Credify Merchant Insights reads your connected sales data and shows
          it on one Analytics page.
        </p>
        <ul className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {functions.map((item) => (
            <li key={item.title}>
              <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 max-w-[46ch] leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="max-w-[16ch] text-3xl font-medium tracking-tight md:text-4xl">
            Built for more than one store
          </h2>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">
            Merchants who sell on more than one platform can compare channels
            without building a spreadsheet.
          </p>
          <ul className="mt-6 grid max-w-[46ch] gap-3 text-[15px] leading-relaxed text-ink">
            <li>Sign in once with your Credify account.</li>
            <li>Connect each shop from the same dashboard.</li>
            <li>Open Analytics and read the stores together.</li>
          </ul>
        </div>
        <Image
          src="/images/channel-compare.jpg"
          alt="Laptop showing a sample comparison of Amazon and Shopify"
          width={1200}
          height={900}
          className="h-auto w-full rounded-2xl"
        />
      </section>

      <section id="pricing" className="bg-surface">
        <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:py-28">
          <h2 className="text-center text-3xl font-medium tracking-tight md:text-4xl">
            Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-[42ch] text-center text-lg leading-relaxed text-muted">
            The platform subscription is free. Connect your stores and open
            Analytics at no charge.
          </p>
          <p className="mt-10 text-center text-6xl font-medium tracking-tight text-ink">
            Free
          </p>
          <p className="mt-2 text-center text-sm text-muted">Platform subscription</p>
          <ul className="mx-auto mt-10 grid max-w-[720px] gap-x-10 gap-y-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="text-[15px] leading-relaxed text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="setup" className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-4xl">
          From sign-in to the numbers
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          <li>
            <h3 className="text-xl font-medium tracking-tight">Sign in</h3>
            <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">
              Open the merchant dashboard with your Credify account.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium tracking-tight">Connect stores</h3>
            <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">
              Amazon, Shopify, WooCommerce, Odoo, QuickBooks, and Meta Ads.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium tracking-tight">View analytics</h3>
            <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">
              Those stores show up together on the Analytics page.
            </p>
          </li>
        </ol>
      </section>

      <section className="px-4 py-20 text-center sm:px-6 lg:py-28">
        <h2 className="mx-auto max-w-[14ch] text-3xl font-medium tracking-tight md:text-5xl">
          Read every store on one page
        </h2>
        <div className="mt-8 flex justify-center">
          <CtaPair />
        </div>
      </section>
    </main>
  );
}
