"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      icon: "🌱",
      title: "Growth Strategy",
      description:
        "Data-backed roadmaps and market positioning that align your ambitions with real-world traction and measurable milestones.",
    },
    {
      icon: "⚡",
      title: "Platform Engineering",
      description:
        "Scalable, resilient architectures and internal tooling that keep your teams shipping confidently and without friction.",
    },
    {
      icon: "🎨",
      title: "Design Systems",
      description:
        "Consistent, accessible product interfaces with clear component libraries that accelerate iteration and delight users.",
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description:
        "Instrumentation, dashboards, and KPI frameworks so you always know what's working and why.",
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description:
        "Threat modelling, audit-ready controls, and security best practices baked into every layer of your stack.",
    },
    {
      icon: "🚀",
      title: "Delivery Enablement",
      description:
        "Agile cadences, transparent reporting, and weekly milestones aligned to clear business outcomes.",
    },
  ];

  const steps = [
    {
      title: "Discover",
      description:
        "We immerse ourselves in your business, auditing platforms, workflows, and goals to surface the highest-impact opportunities.",
    },
    {
      title: "Design",
      description:
        "Our team maps a clear, phased implementation path — no surprises, no scope creep, just a practical plan you can trust.",
    },
    {
      title: "Deliver",
      description:
        "We ship with weekly milestones and transparent reporting, so you always see progress and stay in control.",
    },
    {
      title: "Evolve",
      description:
        "Post-launch we embed with your team to iterate, measure outcomes, and compound your early wins into lasting growth.",
    },
  ];

  const values = [
    { icon: "🌿", title: "Clarity", description: "Plain language, honest timelines, no jargon." },
    { icon: "🤝", title: "Partnership", description: "We succeed when you succeed — full stop." },
    { icon: "🔬", title: "Rigour", description: "Evidence-based decisions at every stage." },
    { icon: "🌍", title: "Impact", description: "Results you can measure, not promises you can't." },
  ];

  const stats = [
    { value: "98%", label: "Client retention" },
    { value: "60+", label: "Products launched" },
    { value: "12 wks", label: "Avg. first release" },
  ];

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="brand">
          NegosyoLabPH <span className="brand-dot" />
        </a>

        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="btn-nav">Get in Touch</a>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="hero-content">
          <p className="eyebrow fade-up">Built for fast-moving companies</p>

          <h1 className="hero-title fade-up delay-100">
            Growth-driven <br />
            <span className="highlight">digital solutions</span>
            <br /> that scale with you.
          </h1>

          <p className="hero-sub fade-up delay-200">
            NegosyoLabPH Business Development Services partners with ambitious companies to design, build, and
            optimise the platforms, products, and processes that power real
            growth.
          </p>

          <div className="hero-cta fade-up delay-300">
            <a href="#contact" className="btn-primary">
              Start a Project →
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </div>
        </div>

        {/* Floating stat cards — hidden on smaller screens via CSS */}
        <aside className="hero-card-group fade-in delay-400">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </aside>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="section" id="services">
        <div className="section-inner">
          <p className="section-label fade-up">What we do</p>
          <h2 className="section-title fade-up delay-100">
            Focused services with measurable impact
          </h2>
          <p className="section-sub fade-up delay-200">
            From strategy through to shipping, we provide the expertise your
            team needs without the overhead of a large agency.
          </p>

          <div className="services-grid">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="service-card fade-up"
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section
        className="section"
        id="process"
        style={{ background: "var(--surface)" }}
      >
        <div className="section-inner">
          <p className="section-label fade-up">How we work</p>
          <h2 className="section-title fade-up delay-100">
            Practical collaboration from discovery to delivery
          </h2>
          <p className="section-sub fade-up delay-200">
            A clear, structured process so you always know the next step — and
            why it matters.
          </p>

          <div className="process-steps">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="process-step fade-up"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <span className="process-step-num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
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
      <footer className="site-footer">
        <a href="#" className="footer-brand">
          NegosyoLabPH <span className="brand-dot" />
        </a>
        <p style={{ margin: 0 }}>© 2026 NegosyoLabPH Business Development Services. Strategy, systems &amp; software delivery.</p>
        <nav style={{ display: "flex", gap: "1.25rem" }}>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#process" style={{ color: "inherit", textDecoration: "none" }}>Process</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </nav>
      </footer>
    </>
  );
}
