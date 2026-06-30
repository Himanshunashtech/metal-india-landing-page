import { createFileRoute } from "@tanstack/react-router";
import {
  Factory, Shield, Award, Clock, Truck, Phone, Mail, MapPin,
  CheckCircle2, Flame, Layers, Wrench, Sparkles, Hammer,
} from "lucide-react";
import { FaqWidget } from "@/components/FaqWidget";

import heroImg from "@/assets/hero-galvanizing.jpg";
import factoryImg from "@/assets/factory.jpg";
import dipTankImg from "@/assets/dip-tank.jpg";
import pipesImg from "@/assets/pipes.jpg";
import workerImg from "@/assets/worker.jpg";
import towerImg from "@/assets/tower.jpg";
import qualityImg from "@/assets/quality.jpg";
import gratingImg from "@/assets/grating.jpg";
import craneImg from "@/assets/crane.jpg";
import ceoImg from "@/assets/ceo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metal India Industries — Hot Dip Galvanization, Greater Noida" },
      { name: "description", content: "Metal India Industries delivers premium hot dip zinc galvanization in Greater Noida. ASTM-grade coatings, 13m kettle, fast turnaround. Call +91 99906 03102." },
      { property: "og:title", content: "Metal India Industries — Hot Dip Galvanization" },
      { property: "og:description", content: "Premium hot dip zinc galvanization services for towers, structures, pipes and fabrications across India." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Landing,
});

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary font-semibold uppercase">{eyebrow}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold molten-text inline-block">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-[var(--gradient-molten)] flex items-center justify-center">
              <Flame className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold leading-none">METAL INDIA</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground">INDUSTRIES</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#process" className="hover:text-primary">Process</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#gallery" className="hover:text-primary">Gallery</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a href="tel:+919990603102" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img
          src={heroImg}
          alt="Hot dip galvanization at Metal India Industries"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs tracking-widest uppercase mb-6">
              <Sparkles className="h-3 w-3" /> ISO 9001 · ASTM A123 · IS 4759
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] mb-6">
              FORGED IN ZINC.
              <br />
              <span className="molten-text">BUILT TO LAST.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              India's trusted hot dip galvanization partner. We immerse your steel in 99.99% pure
              molten zinc to deliver corrosion protection that outlives the structure itself.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 shadow-[var(--shadow-molten)]">
                Request a Quote <Flame className="h-4 w-4" />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-secondary text-secondary-foreground font-semibold hover:bg-accent hover:text-accent-foreground">
                Our Process
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border max-w-md">
              {[["20+","Years"],["50K+","Tonnes/yr"],["13m","Max length"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-3xl font-display font-bold molten-text">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About Us" title="Metal India Industries">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={factoryImg} alt="Our galvanizing factory" width={1280} height={896} loading="lazy" className="rounded-lg metal-plate" />
            <div className="absolute -bottom-6 -right-6 metal-plate rivet rivet-corners p-6 pl-12 w-60">
              <div className="text-4xl font-display font-bold molten-text">2003</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Established in NCR</div>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in 2003 and headquartered at Surajpur Industrial Area, Greater Noida, Metal
              India Industries is one of North India's most reliable hot dip galvanization plants.
              For over two decades we have served power transmission, telecom, solar, infrastructure
              and fabrication majors — protecting their steel assets with a zinc coating that
              chemically bonds to the substrate and refuses to corrode.
            </p>
            <p>
              Our facility runs a 13-metre kettle, automated jib cranes, in-house chemical pre-
              treatment, and a NABL-aligned testing lab. Every consignment leaves the plant only
              after thickness, adhesion and visual checks. From a single bracket to a full
              transmission tower, we treat each component as a long-life investment.
            </p>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" eyebrow="Our Process" title="From Black Steel to Bright Zinc">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wrench, t: "1. Degreasing", d: "Components arrive at our plant and are submerged in an alkaline degreasing bath that lifts off oils, paints and processing residues. Clean steel is the foundation of a perfect coat — we never rush this stage." },
            { icon: Layers, t: "2. Pickling & Rinsing", d: "Steel moves into hydrochloric acid tanks that dissolve rust and mill scale, then through twin rinse stages. The exposed substrate is now metallically active and ready to bond with zinc." },
            { icon: Flame, t: "3. Fluxing & Drying", d: "A zinc-ammonium chloride flux dip prevents re-oxidation before galvanizing. Components are then dried at 120°C so they enter the kettle bone-dry and splash-free." },
            { icon: Factory, t: "4. Hot Dip Galvanizing", d: "Steel is lowered into molten zinc at 450°C. A metallurgical reaction grows three iron-zinc alloy layers topped by pure zinc — a coat that becomes part of the steel itself." },
            { icon: Hammer, t: "5. Quenching & Passivation", d: "On withdrawal, parts are quenched in a passivation solution that locks in the coating and minimises early-life white rust. Surfaces emerge with the signature crystalline spangle." },
            { icon: Award, t: "6. Inspection & Dispatch", d: "Every piece is gauged for coating thickness and adhesion. Documentation is issued to IS 4759 / ASTM A123 and material is packed, slung and dispatched to your site." },
          ].map((s) => (
            <div key={s.t} className="metal-plate rivet rivet-corners p-6 pt-12 rounded-lg hover:-translate-y-1 transition-transform">
              <s.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-display text-xl font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Services" title="What We Galvanize">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: towerImg, t: "Transmission Towers & Poles", d: "Lattice towers, monopoles, sub-station structures and earthing strips — galvanized to PGCIL and state utility specifications. We hold tolerances on bolt-holes, gussets and angles so site assembly never stalls." },
            { img: pipesImg, t: "Pipes, Tubes & Conduits", d: "MS pipes, GI conduits, scaffolding tubes and structural hollows up to 13 metres. Threaded ends and pre-fitted couplers are protected by our blow-out routine for clean, threadable surfaces." },
            { img: gratingImg, t: "Gratings, Handrails & Walkways", d: "Industrial platforms, cable trays, gratings and stair treads finished in a uniform spangle. We galvanize fully fabricated assemblies so welded joints get the same 70+ micron protection." },
            { img: craneImg, t: "Structural Fabrications", d: "Bridge components, solar mounting structures, agricultural implements and custom fabrications. Single pieces up to 8 tonnes are handled by our overhead crane and double-dip line." },
          ].map((s) => (
            <article key={s.t} className="metal-plate rounded-lg overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.t} width={1280} height={896} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section eyebrow="Why Us" title="Built on Steel, Sealed by Trust">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, t: "50+ Year Life", d: "Zinc coatings to IS 4759 deliver lifetimes that easily exceed 50 years in rural environments and 25–30 years in heavy industrial atmospheres. Your steel outlives its paint cycle many times over." },
            { icon: Clock, t: "Fast Turnaround", d: "Most consignments are pre-treated, dipped, inspected and dispatched within 24–72 hours of arrival. We run dedicated express lines for utility customers working against energisation deadlines." },
            { icon: Award, t: "Certified Quality", d: "Compliant with IS 4759, IS 2629, ASTM A123 and BS EN ISO 1461. Every batch ships with mill-style test certificates covering coating mass, thickness, adhesion and uniformity." },
            { icon: Truck, t: "Pan-India Logistics", d: "Our in-house fleet plus tied-up transporters move galvanized stock across Delhi NCR, Punjab, Haryana, Rajasthan, UP, Bihar and central India. Site delivery scheduling on request." },
          ].map((s) => (
            <div key={s.t} className="metal-plate p-6 rounded-lg">
              <s.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OWNER */}
      <Section id="owner" eyebrow="Leadership" title="Meet the Founder">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute inset-4 bg-[var(--gradient-molten)] rounded-lg blur-2xl opacity-30" />
            <img src={ceoImg} alt="Ashutosh Singh, CEO" width={1024} height={1280} loading="lazy" className="relative rounded-lg metal-plate w-full" />
          </div>
          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-2">Founder & CEO</div>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">Ashutosh Singh</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An engineer by training and an industrialist by conviction, Ashutosh Singh founded
              Metal India Industries with a single belief — that Indian infrastructure deserves
              world-class corrosion protection delivered without compromise. Under his leadership
              the company has grown from a modest galvanizing shed into one of NCR's most
              respected zinc-coating plants, serving power utilities, telecom OEMs and steel
              fabricators across the country.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              He personally oversees plant operations, customer relationships and the firm's
              continuing investment in cleaner pre-treatment chemistry, energy-efficient kettles
              and worker safety. For Ashutosh, every dipped component is a quiet promise that the
              tower, bridge or structure it becomes will still be standing strong decades from now.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/90">
              "We don't sell galvanizing. We sell decades of uninterrupted service life."
            </blockquote>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Gallery" title="Inside the Plant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[heroImg, factoryImg, dipTankImg, pipesImg, workerImg, towerImg, qualityImg, gratingImg, craneImg].map((src, i) => (
            <div key={i} className={`metal-plate rounded-md overflow-hidden ${i === 0 || i === 5 ? "col-span-2 row-span-2" : ""}`}>
              <img src={src} alt={`Plant view ${i + 1}`} loading="lazy" className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* QUALITY */}
      <Section eyebrow="Quality" title="Tested Beyond the Spec">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={qualityImg} alt="In-house quality lab" width={1280} height={896} loading="lazy" className="rounded-lg metal-plate" />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Quality at Metal India is not a final stage — it is a discipline that runs through
              degreasing, pickling, fluxing, dipping and dispatch. Our in-house laboratory uses
              digital elcometers, magnetic thickness gauges, sulphate-of-copper adhesion sets and
              visual standards aligned with IS 2633 and ASTM A123. Every consignment is sampled,
              recorded and traced to a heat number, so any future query can be answered to the
              exact batch and shift in seconds.
            </p>
            <ul className="space-y-2">
              {["Coating mass (g/m²) verified per batch","Thickness uniformity to IS 2629","Adhesion testing on representative samples","Salt-spray correlated field performance data","Full traceability and test certificates"].map(t => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TERMS */}
      <Section id="terms" eyebrow="Terms" title="Working with Metal India">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Orders & Acceptance", d: "All orders are accepted against written purchase orders or confirmed quotations. Material descriptions, dimensions and applicable standards must be specified up-front. We reserve the right to inspect inbound material and refuse pieces unfit for galvanization due to closed sections, design defects or contamination." },
            { t: "Pricing & Payment", d: "Pricing is quoted in INR per kilogram of finished galvanized weight unless agreed otherwise. Quotations are valid for 15 days subject to zinc price stability. Standard terms are 50% advance and balance against pro-forma invoice before dispatch; credit terms are extended to approved long-standing customers only." },
            { t: "Coating Standards", d: "Unless otherwise specified, work is executed to IS 4759 / IS 2629 / ASTM A123. Customers requiring specific coating mass, dual coatings or post-treatment must indicate this on the PO. Coating thickness is a function of steel chemistry and section thickness as governed by the relevant standard." },
            { t: "Liability & Claims", d: "Claims regarding coating quality must be raised in writing within 7 days of receipt with supporting photographs and test data. Our liability is limited to re-galvanization of defective pieces at our works. We are not liable for consequential losses, defects arising from inappropriate steel chemistry or for damage caused by post-galvanizing fabrication." },
          ].map(s => (
            <div key={s.t} className="metal-plate p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-2 text-primary">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT + MAP */}
      <Section id="contact" eyebrow="Visit Us" title="Greater Noida Plant">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="metal-plate rounded-lg p-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our plant gates are open Monday to Saturday. Walk in for a facility tour, drop
              drawings for a quote, or simply call our team for a same-day price indication.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-muted-foreground">Block E, Industrial Area, Surajpur,<br />Greater Noida, Uttar Pradesh 201308</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+919990603102" className="text-sm text-muted-foreground hover:text-primary">+91 99906 03102</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:info@metalindiaindustries.in" className="text-sm text-muted-foreground hover:text-primary">info@metalindiaindustries.in</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Working Hours</div>
                  <div className="text-sm text-muted-foreground">Mon – Sat · 9:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>
            <a href="https://wa.me/919990603102" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 shadow-[var(--shadow-molten)]">
              <Phone className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <div className="metal-plate rounded-lg overflow-hidden min-h-[400px]">
            <iframe
              title="Metal India Industries location"
              src="https://www.google.com/maps?q=Block+E,+Industrial+Area,+Surajpur,+Greater+Noida,+Uttar+Pradesh+201308&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto metal-plate rivet rivet-corners rounded-lg p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-molten)] opacity-10" />
          <h2 className="relative font-display text-3xl md:text-5xl font-bold mb-4">Ready to protect your steel?</h2>
          <p className="relative text-muted-foreground mb-8 max-w-2xl mx-auto">
            Send us your component list or drawings. We will revert with a transparent per-kilogram
            quotation and a realistic turnaround within two working hours.
          </p>
          <a href="tel:+919990603102" className="relative inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 shadow-[var(--shadow-molten)]">
            <Phone className="h-4 w-4" /> +91 99906 03102
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/50 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-md bg-[var(--gradient-molten)] flex items-center justify-center">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold">METAL INDIA INDUSTRIES</div>
                <div className="text-[10px] tracking-[0.25em] text-muted-foreground">HOT DIP GALVANIZATION</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Premium hot dip zinc galvanization services from Greater Noida. Trusted by power
              utilities, telecom OEMs, solar EPC contractors and steel fabricators across India.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3 text-primary">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#process" className="hover:text-primary">Process</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
              <li><a href="#terms" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3 text-primary">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Block E, Surajpur Ind. Area</li>
              <li>Greater Noida, UP 201308</li>
              <li><a href="tel:+919990603102" className="hover:text-primary">+91 99906 03102</a></li>
              <li><a href="mailto:info@metalindiaindustries.in" className="hover:text-primary">info@metalindiaindustries.in</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Metal India Industries. All rights reserved.</div>
            <div>Founded & led by Ashutosh Singh, CEO</div>
          </div>
        </div>
      </footer>

      <FaqWidget />
    </div>
  );
}
