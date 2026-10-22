import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingInquiry from "@/components/FloatingInquiry";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, OG_IMAGE, organizationLd, websiteLd } from "@/lib/seo";

const TITLE = "MRN Agro Industries — MRN Gold Rice Manufacturer in Raichur";
const DESCRIPTION =
  "Rice manufacturer in Raichur, Karnataka since 2003. The MRN Gold range — Double Old Sona Masuri, RNR and Lachkari Kolam raw rice, and Old Sona Masuri steam rice — in 5 kg, 10 kg and 26 kg packs, with bulk supply for hotels, wholesalers and distributors across five states.";

export const metadata = {
  /* www, not the apex: mrnagro.com 308-redirects here, so the apex form would
     make every canonical point at a redirect. */
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | MRN Agro Industries" },
  description: DESCRIPTION,
  applicationName: "MRN Agro Industries",
  authors: [{ name: "MRN Agro Industries", url: SITE_URL }],
  creator: "MRN Agro Industries",
  publisher: "MRN Agro Industries",
  category: "Food & Agriculture",
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
  alternates: { canonical: SITE_URL },
  /* Search Console ownership. Public by design — it is visible in page
     source — so there is no reason to keep it in an env var. */
  verification: {
    google: "iZKIzYIz3avDGAfsIUE2c-HJ3Pc_GxyTMR36DnF-zTo"
  },
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "MRN Agro Industries",
    locale: "en_IN",
    type: "website",
    images: [OG_IMAGE]
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url]
  }
};

export const viewport = {
  themeColor: "#0F3B24"
};

export default function RootLayout({ children }) {
  return (
    /* en-IN: the audience, the spellings and the phone formats are all Indian */
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* business + site identity, carried on every page and referenced
            by @id from the per-page blocks */}
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingInquiry />
      </body>
    </html>
  );
}
