import Link from "next/link";
import ProductShowcase from "@/components/ProductShowcase";
import ProcessSteps from "@/components/ProcessSteps";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import HeroSpotlight from "@/components/HeroSpotlight";
import ProductGridInteractive from "@/components/ProductGridInteractive";
import TiltCard from "@/components/TiltCard";
import SectionTabs from "@/components/SectionTabs";
import ReasonsCarousel from "@/components/ReasonsCarousel";
import JsonLd from "@/components/JsonLd";
import { appreciation, glance, company } from "@/lib/products";
import { photos } from "@/lib/photos";
import { pageMeta, productListLd } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/",
  title: "MRN Agro Industries — MRN Gold Rice Manufacturer, Raichur",
  description:
    "Rice manufacturer in Raichur, Karnataka since 2003. The MRN Gold range of Double Old Sona Masuri, RNR and Lachkari Kolam raw rice and Old Sona Masuri steam rice, in 5 kg, 10 kg and 26 kg packs, with bulk supply across five states."
});

/** Jump bar under the hero — each id matches a section below. */
const sections = [
  { id: "about", label: "About" },
  { id: "mission", label: "Our Purpose" },
  { id: "products", label: "Products" },
  { id: "why-us", label: "Why us" },
  { id: "quality", label: "Quality" },
  { id: "feedback", label: "Feedback" }
];

export default function HomePage() {
  return (
    <>
      {/* the range is shown on the home page too, so describe it here as well */}
      <JsonLd data={productListLd()} />

      {/* ---------- HERO ---------- */}
      <HeroSpotlight className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-place">Raichur, Karnataka &middot; Since {company.established}</p>
            <h1>
              Quality Rice.<br />
              Consistency You Can Count On.
            </h1>
            <p className="lede">
              Premium rice for everyday meals and dependable business supply &mdash; since{" "}
              {company.established}.
            </p>
            <p className="muted">
              At MRN Agro Industries, we turn carefully selected paddy into rice that brings
              quality and value to every meal. Based in Raichur, Karnataka, we process and pack
              our rice under our own brand, <strong>{company.brand}</strong>, serving households,
              hotels, retailers, wholesalers and distributors.
            </p>

            <div className="btn-row">
              <a href="#products" className="btn btn-gold">
                Explore our rice <span className="arw">&rarr;</span>
              </a>
              <Link href="/contact" className="btn btn-outline">Contact sales</Link>
            </div>

          </div>

          <ProductShowcase />
        </div>
      </HeroSpotlight>

      {/* ---------- AT A GLANCE ---------- */}
      <section className="glance-band dark">
        <Reveal className="shell">
          <span className="eyebrow">At a glance</span>
          <ul className="glance">
            {glance.map((g) => (
              <li key={g.label}>
                <b>
                  {g.count != null ? (
                    <>
                      <Counter value={g.count} plain={g.plain} />
                      {g.suffix}
                    </>
                  ) : (
                    g.value
                  )}
                </b>
                <span>{g.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <SectionTabs sections={sections} />

      {/* ---------- ABOUT ---------- */}
      <section className="section" id="about">
        <div className="shell split wide-right">
          <Reveal>
            <Photo src={photos.farmers.src} alt={photos.farmers.alt} ratio="4/4.4" />
          </Reveal>

          <Reveal>
            <span className="eyebrow">About us</span>
            <h2>Built on quality since {company.established}</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              With 250+ customers across Telangana, Andhra Pradesh, Karnataka, Tamil Nadu and
              Maharashtra, we remain committed to the belief that started our journey: quality
              rice should be consistent throughout the year and available at fair market prices.
            </p>
            <p className="muted">
              From our manufacturing facility in Raichur, we process paddy and package finished
              rice under our own {company.brand} brand, serving the varied needs of households,
              hotels, retailers, wholesalers and distributors.
            </p>

            <ul className="ticks">
              <li>Founded in {company.established} by {company.founder}</li>
              <li>{company.machinery}, processing {company.capacity}</li>
              <li>{company.credentials.join(" and ")} credentials for food safety and quality</li>
            </ul>

            <div className="btn-row" style={{ marginTop: 26 }}>
              <Link href="/about" className="btn btn-outline">
                More about us <span className="arw">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="section cream" id="mission">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Mission &amp; vision</span>
            <h2>What drives us forward</h2>
          </Reveal>

          <div className="grid g2">
            <Reveal className="mv">
              <span className="rule" />
              <h3>Our mission</h3>
              <p className="muted">{company.mission}</p>
            </Reveal>

            <Reveal className="mv dark">
              <span className="rule" />
              <h3>Our vision</h3>
              <p>{company.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- PRODUCTS (INTERACTIVE FILTER & ESTIMATOR) ---------- */}
      <section className="section" id="products">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Find your everyday favourite</span>
            <h2>Meet the {company.brand} Range</h2>
            <p>
              Explore our range of Double Old Sona Masuri Raw, Double Old RNR Raw, Double Old
              Lachkari Kolam Raw and Old Sona Masuri Steam rice &mdash; packed for homes and
              businesses alike. Select any variety for details and a pack estimator.
            </p>
          </Reveal>

          <ProductGridInteractive />

          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/products" className="btn">
              View all varieties <span className="arw">&rarr;</span>
            </Link>
            <Link href="/contact" className="btn btn-outline">Contact sales</Link>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section cream" id="why-us">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>A Reliable Choice, from Paddy to Pack</h2>
            <p>
              From your family&rsquo;s meals to your business&rsquo;s daily requirements, MRN Agro
              Industries is committed to earning your trust with every order.
            </p>
          </Reveal>

          <ReasonsCarousel />

          <div className="btn-row" style={{ marginTop: 34 }}>
            <Link href="/contact" className="btn btn-gold">
              Request a quote <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- QUALITY ---------- */}
      <section className="section dark" id="quality">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Care at every stage</span>
            <h2>Quality Process You Can Inspect</h2>
            <p>
              Six stages, from the paddy we select to the packed {company.brand} bag leaving
              our Raichur facility.
            </p>
          </Reveal>

          <ProcessSteps />
        </div>
      </section>

      {/* ---------- WHAT CUSTOMERS APPRECIATE ---------- */}
      <section className="section" id="feedback">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Customer feedback</span>
            <h2>What Our Customers Appreciate</h2>
            <p>
              Themes drawn from the feedback customers share with our team about the{" "}
              {company.brand} range.
            </p>
          </Reveal>

          <div className="grid g3">
            {appreciation.map((a) => (
              <Reveal key={a.title}>
                <TiltCard className="card" style={{ height: "100%" }}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Quality for Your Table. Reliability for Your Business."
        text="Whether you need rice for your family, hotel, shop or distribution business, our sales team is here to help you choose from the MRN Gold range."
        label="Enquire now"
      />
    </>
  );
}
