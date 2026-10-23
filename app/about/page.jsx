import Link from "next/link";
import Banner from "@/components/Banner";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import TiltCard from "@/components/TiltCard";
import JsonLd from "@/components/JsonLd";
import { values, company } from "@/lib/products";
import { photos } from "@/lib/photos";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/about",
  title: "About MRN Agro Industries — Rice Milling Since 2003",
  description:
    "Founded in 2003 by Mr. Pavan Kumar, MRN Agro Industries manufactures rice in Raichur, Karnataka on Satake machinery from Japan, with a paddy processing capacity of 9 tonnes per hour and FSSAI and AGMARK credentials."
});

const care = [
  {
    title: "Modern machinery",
    text: `Our facility uses ${company.machinery} and has a paddy processing capacity of ${company.capacity}.`
  },
  {
    title: "Quality checks",
    text: "Checks using scanners and rice laboratory testing support our focus on consistency throughout the year."
  },
  {
    title: "Hygienic packaging",
    text: `Hygienic packaging helps us prepare our products for supply, packed under our own ${company.brand} brand.`
  }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" }
        ])}
      />

      <Banner crumb="About us" title="Built on Quality. Growing Through Trust." photoSrc={photos.hand.src}>
        A rice manufacturer from Raichur, Karnataka, producing the {company.brand} range for
        households and businesses since {company.established}.
      </Banner>

      {/* ---------- STORY ---------- */}
      <section className="section">
        <div className="shell split wide-right">
          <Reveal>
            <Photo src={photos.harvest.src} alt={photos.harvest.alt} ratio="4/4.4" />
          </Reveal>

          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2>A simple purpose, held since {company.established}</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              MRN Agro Industries was founded in {company.established} by {company.founder} with
              a simple purpose: to make premium-quality rice available at affordable,
              market-aligned prices.
            </p>
            <p className="muted">
              He recognised that rice is an everyday essential for countless families. His focus
              was not simply on producing good rice, but on delivering the same dependable
              quality throughout the year. That belief &mdash; that lasting success comes from
              quality and consistency &mdash; continues to guide our business.
            </p>
            <p className="muted">
              From our manufacturing facility in Raichur, Karnataka, we process paddy and package
              finished rice under our own {company.brand} brand. Our range serves the varied
              needs of households, hotels, retailers, wholesalers and distributors.
            </p>

            <ul className="ticks">
              <li>Founded in {company.established} by {company.founder}</li>
              <li>Manufacturing facility in Raichur, Karnataka</li>
              <li>{company.customers} customers across {company.statesServed.length} states</li>
              <li>Four {company.brand} varieties in 5 kg, 10 kg and 26 kg packs</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- FACTS ---------- */}
      <section className="section cream" style={{ paddingBlock: "clamp(40px,5vw,64px)" }}>
        <div className="shell">
          <ul className="facts">
            <li>
              <b><Counter value={company.established} plain /></b>
              <span>Year established</span>
            </li>
            <li>
              <b><Counter value={9} /> <i>tonnes / hour</i></b>
              <span>Paddy processing capacity</span>
            </li>
            <li>
              <b><Counter value={250} />+</b>
              <span>Customers served</span>
            </li>
            <li>
              <b>Raichur</b>
              <span>Karnataka, India</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- CARE AT EVERY STAGE ---------- */}
      <section className="section">
        <div className="shell split wide-left">
          <Reveal>
            <span className="eyebrow">Care at every stage</span>
            <h2>Modern processing, checked at each step</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Our facility uses {company.machinery} and has a paddy processing capacity of{" "}
              {company.capacity}. Quality checks using scanners and rice laboratory testing
              support our focus on consistency, while hygienic packaging helps us prepare our
              products for supply.
            </p>
            <p className="muted">
              Our {company.credentials.join(" and ")} credentials reflect our commitment to food
              safety and quality standards.
            </p>

            <ul className="tags" style={{ marginTop: 22 }}>
              {company.credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <div className="btn-row" style={{ marginTop: 26 }}>
              <Link href="/products" className="btn btn-outline">
                See the {company.brand} range <span className="arw">&rarr;</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid" style={{ gap: 14 }}>
            {care.map((o) => (
              <Reveal key={o.title} className="card">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="section cream">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Our values and commitments</span>
            <h2>What we hold ourselves to</h2>
          </Reveal>

          <div className="grid g3">
            {values.map((v) => (
              <Reveal key={v.title}>
                <TiltCard className="card" style={{ height: "100%" }}>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROMISE ---------- */}
      <section className="section dark">
        <div className="shell promise">
          <Reveal>
            <Photo src={photos.table.src} alt={photos.table.alt} ratio="4/3.4" />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Looking ahead</span>
            <blockquote>
              Today, we supply {company.customers} customers across Telangana, Andhra Pradesh,
              Karnataka, Tamil Nadu and Maharashtra. Our ambition is to reach more homes and
              businesses across India while preserving the standards and relationships that have
              brought us this far &mdash; rice our customers can rely on, at prices that offer
              genuine value.
            </blockquote>
            <p className="sign">{company.name} &middot; {company.city}, {company.state}</p>
          </Reveal>
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
