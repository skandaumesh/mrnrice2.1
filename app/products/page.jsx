import Link from "next/link";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import ProcessSteps from "@/components/ProcessSteps";
import CTA from "@/components/CTA";
import TiltCard from "@/components/TiltCard";
import ProductGridInteractive from "@/components/ProductGridInteractive";
import { products, packSizes, company, telHref } from "@/lib/products";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Products",
  description:
    "The MRN Gold range from MRN Agro Industries, Raichur: Double Old Sona Masuri Raw, Double Old RNR Raw, Double Old Lachkari Kolam Raw and Old Sona Masuri Steam rice, in 5 kg, 10 kg and 26 kg packs with bulk packaging available."
};

const groups = [
  {
    id: "raw",
    label: "Raw Rice",
    blurb: "Three Double Old raw rice varieties, for customers who cook with raw rice."
  },
  {
    id: "steam",
    label: "Steam Rice",
    blurb: "Our Old Sona Masuri steam rice, for customers who prefer steam over raw."
  }
];

const serves = [
  { title: "Households", text: "5 kg and 10 kg packs sized for an everyday kitchen." },
  { title: "Hotels", text: "Larger 26 kg packs and bulk packaging for daily kitchen volumes." },
  { title: "Retailers", text: "Branded MRN Gold packs across all four varieties." },
  { title: "Wholesalers & distributors", text: "Bulk packaging and supply across five states." }
];

export default function ProductsPage() {
  return (
    <>
      <Banner crumb="Products" title={`Meet the ${company.brand} Range`} photoSrc={photos.raw.src}>
        Four rice varieties. One commitment to quality and consistency. Every variety is
        available in 5 kg, 10 kg and 26 kg packs, with bulk packaging also available for
        hotels, wholesalers and distributors.
      </Banner>

      {/* ---------- QUICK GRID (opens the quick view & pack estimator) ---------- */}
      <section className="section">
        <div className="shell">
          {/* filter tabs are hidden here: the detail rows below are already
              grouped by raw vs steam, so they would duplicate that */}
          <ProductGridInteractive showFilter={false} showDetailsLink />
        </div>
      </section>

      {/* ---------- DETAIL ROWS, GROUPED BY RICE TYPE ---------- */}
      <section className="section cream" style={{ paddingTop: 0 }}>
        <div className="shell">
          {groups.map((g) => (
            <div key={g.id} className="pgroup">
              <Reveal className="pgroup-head">
                <h2>{g.label}</h2>
                <p>{g.blurb}</p>
              </Reveal>

              {products
                .filter((p) => p.category === g.id)
                .map((p) => (
                  <Reveal key={p.slug} as="article" className="prow" id={p.slug}>
                    <div className="prow-media">
                      <img src={p.image} alt={`${p.name} pack`} />
                    </div>

                    <div>
                      <span className="prow-no">{p.categoryLabel} &middot; {p.no}</span>
                      <h2>{p.name}</h2>
                      <p className="prow-variety">{p.variety}</p>
                      <p>{p.description}</p>
                      <p className="muted">{p.note}</p>

                      <ul className="tags">
                        {p.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>

                      <dl className="specs">
                        {p.specs.map(([k, v]) => (
                          <div key={k}>
                            <dt>{k}</dt>
                            <dd>{v}</dd>
                          </div>
                        ))}
                      </dl>

                      <ul className="packs packs-lg" aria-label="Pack sizes">
                        {packSizes.map((kg) => (
                          <li key={kg}>{kg} kg</li>
                        ))}
                        <li className="bulk">Bulk</li>
                      </ul>

                      <div className="btn-row" style={{ marginTop: 24 }}>
                        <Link href={`/contact?product=${encodeURIComponent(p.name)}`} className="btn btn-gold">
                          Enquire about {p.name} <span className="arw">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- QUALITY PROMISE ---------- */}
      <section className="section dark">
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

      {/* ---------- WHO WE SUPPLY ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Who we supply</span>
            <h2>Packed for homes and businesses alike</h2>
          </Reveal>

          <div className="grid g4">
            {serves.map((b) => (
              <Reveal key={b.title}>
                <TiltCard className="card" style={{ height: "100%" }}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PAYMENT ---------- */}
      <section className="section cream" id="payment">
        <div className="shell pay">
          <Reveal className="pay-qr">
            <img
              src={company.payment.qr}
              alt={`${company.payment.provider} payment QR code for ${company.name}`}
            />
          </Reveal>

          <Reveal>
            <span className="eyebrow">Payments</span>
            <h2>Pay by UPI or card</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Scan the code with any UPI app &mdash; Google Pay, PhonePe, Paytm, BHIM &mdash; or
              pay by RuPay, Mastercard or Visa through our {company.payment.provider} account.
            </p>

            <dl className="specs" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <dt>UPI ID</dt>
                <dd>{company.payment.upi}</dd>
              </div>
              <div>
                <dt>Terminal ID</dt>
                <dd>{company.payment.tid}</dd>
              </div>
            </dl>

            <p className="muted" style={{ marginTop: 20 }}>
              Please confirm your variety, quantity and current price with our sales team on{" "}
              <a href={telHref(company.phones[0].number)}>{company.phones[0].number}</a> before
              paying, so your order can be matched to the payment.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Bulk Requirements? Let's Talk."
        text="We offer bulk packaging for hotels, wholesalers and distributors. Contact our sales team to discuss your preferred variety, packaging needs, quantity, current pricing and delivery arrangements."
        label="Enquire about bulk orders"
      />
    </>
  );
}
