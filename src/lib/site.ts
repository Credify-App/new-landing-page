export const site = {
  name: "Credify",
  listingName: "Credify - ValU Analytics",
  product: "Credify Merchant Insights",
  shortDescription: "Consolidate all your sales data into a single dashboard",
  email: "support@credify.live",
  phoneDisplay: "+20 127 988 4417",
  phoneTel: "+201279884417",
  company: "Credify for Databases LLC",
  address: "28 Makram Ebeid, Nasr City, Egypt",
} as const;

export const links = {
  getStarted: "https://merchant.dash.credify.live/",
  help: "https://merchant.dash.credify.live/help",
  terms: "https://merchant.dash.credify.live/terms",
  privacy: "https://merchant.dash.credify.live/privacy",
  email: `mailto:${site.email}`,
  phone: `tel:${site.phoneTel}`,
} as const;
