"use client";

import Image from "next/image";
import { FaCode, FaGift, FaVideo } from "react-icons/fa";
import { Footer } from "./components/footer";

export default function Home() {
  const services = [
    {
      icon: FaCode,
      title: "Business Solutions (Software Development)",
      description:
        "Unlock the full potential of your business with our cutting-edge software development solutions. Tailored to address the unique needs of your enterprise, our business solutions are crafted to enhance efficiency, streamline operations, and keep you ahead in the competitive Philippine market.",
    },
    {
      icon: FaVideo,
      title: "Digital Media, Audio, and Video Production",
      description:
        "Make a lasting impression with our top-notch digital media, audio, and video production services. From compelling visual content to engaging audio experiences, our team of seasoned professionals is dedicated to bringing your brand to life, ensuring a captivating and memorable presence in the digital realm.",
    },
    {
      icon: FaGift,
      title: "Business and Corporate Merchandise",
      description:
        "Stand out in the corporate world with our bespoke business and corporate merchandise. From branded promotional items to corporate gifts, we provide a range of customizable merchandise solutions that not only elevate your brand image but also leave a lasting impression on clients, partners, and stakeholders.",
    },
  ];

  const clients = [
    {
      title: "Luma Health",
      description:
        "End-to-end product advisory and platform modernization for faster feature delivery and stronger operational visibility.",
    },
    {
      title: "SariMart Group",
      description:
        "Digital content and campaign systems that improved customer engagement and accelerated lead conversion.",
    },
    {
      title: "NorthPeak Logistics",
      description:
        "Workflow automation and analytics dashboards that reduced manual overhead and improved reporting accuracy.",
    },
    {
      title: "Asteria Foods",
      description:
        "Brand media production and corporate asset rollout that strengthened consistency across all customer touchpoints.",
    },
  ];

  const values = [
    { icon: "🌿", title: "Clarity", description: "Plain language, honest timelines, no jargon." },
    { icon: "🤝", title: "Partnership", description: "We succeed when you succeed — full stop." },
    { icon: "🔬", title: "Rigour", description: "Evidence-based decisions at every stage." },
    { icon: "🌍", title: "Impact", description: "Results you can measure, not promises you can't." },
  ];

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className={`navbar`}>
        <a href="#home" className="brand">
          <Image src="/img/NLP Logo.png" alt="NegosyoLabPH Logo" width={100} height={40} />
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="btn-nav">Get in Touch</a>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-content">

          <h1 className="hero-title fade-up delay-100">
            Simple steps to start and <br />  grow your business with <span className="highlight">NegosyoLab PH!</span>
          </h1>

          <p className="hero-sub fade-up delay-200">
            NegosyoLab PH partners with Filipino SME business owners and ambitious entrepreneurs to test, innovate,
            and develop successful ventures. We offer cutting-edge multimedia production and innovative business
            systems to empower growth and streamline operations across the Philippines.
          </p>

          <div className="hero-cta fade-up delay-300">
            <a href="#contact" className="btn-primary">
              Connect with us
            </a>
            <a href="#services" className="btn-outline">
              Explore more
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="section" id="services">
        <div className="section-inner">
          <p className="section-label fade-up">What We Do</p>
          <h2 className="section-title fade-up delay-100">
            Our Services
          </h2>
          <p className="section-sub fade-up delay-200">
            Explore our core offerings designed to strengthen your business and
            elevate your brand presence.
          </p>

          <div className="services-grid">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="service-card fade-up"
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                <div className="service-icon">
                  <s.icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ────────────────────────────────────────── */}
      <section
        className="section"
        id="clients"
        style={{ background: "var(--surface)" }}
      >
        <div className="section-inner">
          <p className="section-label fade-up">Our Clients</p>
          <h2 className="section-title fade-up delay-100">
            Trusted by growing businesses
          </h2>
          <p className="section-sub fade-up delay-200">
            We partner with companies across industries to build systems,
            content, and strategies that drive measurable results.
          </p>

          <div className="client-grid">
            {clients.map((client, i) => (
              <a
                key={client.title}
                href="#contact"
                className="client-card fade-up"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <span className="client-card-num">0{i + 1}</span>
                <h3>{client.title}</h3>
                <p>{client.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ─────────────────────────────────────────── */}
      <section className="section why-section" id="about">
        <div className="section-inner">
          <p className="section-label fade-up">Why NegosyoLabPH</p>
          <h2 className="section-title fade-up delay-100">
            Principles we refuse to compromise on
          </h2>
          <p className="section-sub fade-up delay-200">
            We believe good work speaks for itself — and that your confidence in
            us should be earned, not assumed.
          </p>

          <div className="values-grid">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="value-card fade-up"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <div className="value-card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="testimonial-card fade-up delay-500">
            <blockquote>
              &ldquo;NegosyoLabPH transformed the way our platform team operates.
              Within 12 weeks we had shipped three features that had been
              stalled for a year — and we finally understood why.&rdquo;
            </blockquote>
            <cite>— Jamie Reyes, CTO @ Luma Health</cite>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ──────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="section-inner">
          <div className="cta-block fade-up">
            <h2>Ready to grow smarter?</h2>
            <p>
              Tell us about your challenge and we&apos;ll come back within one
              business day with a clear picture of how we can help.
            </p>
            <a href="mailto:hello@negosyolabph.com" className="btn-cta">
              hello@negosyolabph.com →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer />
        <footer className="site-footer text-center">
          <p>© 2026 NLP Business Development Services.</p>
        </footer>
    </>
  );
}
