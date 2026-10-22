import { company, products } from "@/lib/products";

/**
 * Canonical origin for the site.
 *
 * The apex redirects to www with a 308, so canonicals, the sitemap and every
 * OG URL must use the www form — otherwise each one points search engines at
 * a redirect instead of the page. Override with NEXT_PUBLIC_SITE_URL if the
 * domain ever changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mrnagro.com"
).replace(/\/+$/, "");

/**
 * Absolute URL for a site-relative path. "/" collapses to the bare origin so
 * the home page's canonical and its sitemap entry are byte-identical — two
 * spellings of the same URL is exactly what canonicals exist to prevent.
 */
export const abs = (path = "/") => {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const telDigits = (n) => n.replace(/[^\d+]/g, "");

/** Every page shares one OG image; `pageMeta` can override it. */
export const OG_IMAGE = {
  url: abs("/og.png"),
  width: 1200,
  height: 630,
  alt: `${company.name} — ${company.brand} rice, ${company.city}, ${company.state}`
};

/**
 * Per-page metadata: canonical, Open Graph and Twitter in one place so no
 * page can quietly ship without them.
 */
export function pageMeta({ title, description, path = "/", image }) {
  const url = abs(path);
  const images = [image ? { ...OG_IMAGE, url: abs(image) } : OG_IMAGE];

  return {
    /* absolute: these titles already name the company, so the layout's
       "%s | MRN Agro Industries" template would repeat it and push every
       inner page past the ~60 characters Google will show */
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_IN",
      type: "website",
      images
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((i) => i.url)
    }
  };
}

/**
 * The business itself, referenced by @id from the other blocks.
 *
 * Deliberately absent: openingHours, which were never confirmed, and any
 * rating or review, since there are no verified reviews. Inventing either
 * would be fabricated structured data — and aggregateRating without real
 * reviews behind it is a manual-action risk, not just a white lie.
 */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": abs("/#organization"),
    name: company.name,
    legalName: company.name,
    url: SITE_URL,
    logo: abs("/logo.jpeg"),
    image: OG_IMAGE.url,
    description:
      `Rice manufacturer in ${company.city}, ${company.state}, producing the ` +
      `${company.brand} range of raw and steam rice since ${company.established}.`,
    foundingDate: String(company.established),
    founder: {
      "@type": "Person",
      name: company.founder.replace(/^Mr\.\s*/, "")
    },
    telephone: telDigits(company.phones[0].number),
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.address.postalCode,
      addressCountry: "IN"
    },
    hasMap: company.mapsUrl,
    areaServed: company.statesServed.map((name) => ({ "@type": "State", name })),
    brand: { "@type": "Brand", name: company.brand },
    slogan: "Quality Rice. Consistency You Can Count On.",
    knowsAbout: [
      "Rice milling",
      "Sona Masuri rice",
      "RNR rice",
      "Lachkari Kolam rice",
      "Steam rice",
      "Raw rice",
      "Bulk rice supply"
    ],
    contactPoint: company.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: telDigits(p.number),
      contactType: p.team.toLowerCase().includes("sales") ? "sales" : "billing",
      areaServed: "IN"
    }))
  };
}

/** The site, so search engines can attach the name to the domain. */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: SITE_URL,
    name: company.name,
    inLanguage: "en-IN",
    publisher: { "@id": abs("/#organization") }
  };
}

/**
 * One rice variety. No `offers`: prices are not published on the site, and a
 * made-up price or availability would be worse than no offer at all.
 */
export function productLd(p) {
  return {
    "@type": "Product",
    "@id": abs(`/products#${p.slug}`),
    name: p.name,
    description: p.description,
    image: abs(p.image),
    category: p.categoryLabel,
    brand: { "@type": "Brand", name: company.brand },
    manufacturer: { "@id": abs("/#organization") },
    additionalProperty: [
      ...p.specs.map(([name, value]) => ({
        "@type": "PropertyValue",
        name,
        value
      })),
      {
        "@type": "PropertyValue",
        name: "Bulk packaging",
        value: "Available for hotels, wholesalers and distributors"
      }
    ]
  };
}

/** All four varieties as an ordered list, for the products page. */
export function productListLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${company.brand} rice range`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: productLd(p)
    }))
  };
}

/** `trail` is [{ name, path }], starting at Home. */
export function breadcrumbLd(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path)
    }))
  };
}
