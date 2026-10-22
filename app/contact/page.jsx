import { Suspense } from "react";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { company, telHref } from "@/lib/products";
import { photos } from "@/lib/photos";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/contact",
  title: "Contact MRN Agro Industries — Rice Supplier, Raichur",
  description:
    "Contact MRN Agro Industries in Raichur, Karnataka for MRN Gold rice: pack sizes, bulk requirements, availability and current prices. Sales and accounts numbers, email, address and directions."
});

const icons = {
  pin: <><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  phone: <path d="M4.5 5.5c0 8 6 14 14 14l1.5-3-4-2-2 2a13 13 0 0 1-6.5-6.5l2-2-2-4-3 1.5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5Z" /></>
};

function Icon({ name }) {
  return (
    <span className="info-ico">
      <svg viewBox="0 0 24 24">{icons[name]}</svg>
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" }
        ])}
      />

      <Banner crumb="Contact us" title="Let&rsquo;s Talk Rice" photoSrc={photos.field.src}>
        Looking for rice for your home, hotel, retail store, wholesale business or distribution
        network? We would be happy to help.
      </Banner>

      <section className="section">
        <div className="shell contact-grid">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2>We&rsquo;d Be Glad to Hear From You</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              Contact our sales team for product information, pack sizes, bulk requirements,
              availability and current prices. For billing and payment-related enquiries, please
              reach out to our accounts team.
            </p>

            <ul className="info" style={{ marginTop: 28 }}>
              <li>
                <Icon name="pin" />
                <div>
                  <h3>Visit us</h3>
                  <p>
                    {company.name}<br />
                    {company.address.line1}<br />
                    {company.address.line2}<br />
                    {company.address.line3}
                  </p>
                  <p>
                    <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Get directions on Google Maps &rarr;
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <h3>Call us</h3>
                  {company.phones.map((p) => (
                    <p key={p.number}>
                      {p.team}: <a href={telHref(p.number)}>{p.number}</a>
                    </p>
                  ))}
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <h3>Email us</h3>
                  <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                </div>
              </li>
              <li>
                <Icon name="globe" />
                <div>
                  <h3>Where we supply</h3>
                  <ul className="tags" style={{ marginTop: 10 }}>
                    {company.statesServed.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <Suspense fallback={<div className="form-card" aria-busy="true" />}>
              <EnquiryForm />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="shell">
          <div className="map">
            <iframe
              src={company.mapsEmbedUrl}
              title={`Map showing ${company.name}, ${company.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      <CTA
        title="Quality for Your Table. Reliability for Your Business."
        text="Share your requirement and our sales team will help you with product and supply information."
        label="Email us directly"
        href={`mailto:${company.email}`}
      />
    </>
  );
}
