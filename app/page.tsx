"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import { ServiceGrid } from "./components/service-grid";
import { services } from "./services/service-data";

export default function Home() {
  const careers = [
    // {
    //   title: "Software Developer Intern",
    //   description:
    //     "Collaborate with our development team to build and enhance client applications.",
    // },
    // {
    //   title: "QA Tester Intern",
    //   description:
    //     "Support quality assurance by writing and executing test cases, logging defects, and verifying fixes across web and mobile projects.",
    // },
    {
      title: "Multimedia Production Intern",
      description:
        "Learn hands-on skills with Adobe Creative Suite and storytelling for social and web platforms.",
    },
  ];

  const [aboutSlideIndex, setAboutSlideIndex] = useState(0);
  const [clientSlideIndex, setClientSlideIndex] = useState(0);
  const [clientSlidesPerView, setClientSlidesPerView] = useState(8);
  const [careerSlideIndex, setCareerSlideIndex] = useState(0);
  const [aboutSlides, setAboutSlides] = useState<{ src: string; alt: string }[]>([]);
  const [clientSlides, setClientSlides] = useState<{ src: string; alt: string }[]>([]);
  const [careerSlides, setCareerSlides] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    const loadAboutSlides = async () => {
      const response = await fetch('/api/about-slides');
      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as { slides?: { src: string; alt: string }[] };
      setAboutSlides(data.slides ?? []);
    };

    loadAboutSlides();
  }, []);

  useEffect(() => {
    const loadClientSlides = async () => {
      const response = await fetch('/api/client-slides');
      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as { slides?: { src: string; alt: string }[] };
      setClientSlides(data.slides ?? []);
    };

    loadClientSlides();
  }, []);

  useEffect(() => {
    const loadCareerSlides = async () => {
      const response = await fetch('/api/career-slides');
      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as { slides?: { src: string; alt: string }[] };
      setCareerSlides(data.slides ?? []);
    };

    loadCareerSlides();
  }, []);

  useEffect(() => {
    if (!aboutSlides.length) {
      return;
    }

    const timer = setInterval(() => {
      setAboutSlideIndex((prev) => (prev + 1) % aboutSlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [aboutSlides.length]);

  useEffect(() => {
    const updateClientSlidesPerView = () => {
      if (window.innerWidth <= 768) {
        setClientSlidesPerView(2);
        return;
      }

      if (window.innerWidth <= 1024) {
        setClientSlidesPerView(4);
        return;
      }

      setClientSlidesPerView(8);
    };

    updateClientSlidesPerView();
    window.addEventListener('resize', updateClientSlidesPerView);

    return () => window.removeEventListener('resize', updateClientSlidesPerView);
  }, []);

  const clientSlidePages: { src: string; alt: string }[][] = [];
  for (let i = 0; i < clientSlides.length; i += clientSlidesPerView) {
    clientSlidePages.push(clientSlides.slice(i, i + clientSlidesPerView));
  }

  const safeClientSlideIndex =
    clientSlidePages.length > 0 ? clientSlideIndex % clientSlidePages.length : 0;

  useEffect(() => {
    if (clientSlidePages.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setClientSlideIndex((prev) => (prev + 1) % clientSlidePages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [clientSlidePages.length]);

  useEffect(() => {
    if (!careerSlides.length) {
      return;
    }

    const timer = setInterval(() => {
      setCareerSlideIndex((prev) => (prev + 1) % careerSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [careerSlides.length]);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className={`navbar`}>
        <a href="#home" className="brand">
          <Image
            src="/img/NLP LEGAL.png"
            alt="NegosyoLabPH Logo"
            width={150}
            height={90}
            loading="eager"
          />
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="btn-nav">Get in Touch</a>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-layout">
        <div className="hero-content">

          <h1 className="hero-title fade-up delay-100">
            Simple steps to start and grow<br />
            your business with <span className="highlight">NLP!</span>
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
        <div className="hero-visual fade-in delay-200" aria-hidden="true">
          <Image
            src="/img/hero.png"
            alt="Business growth illustration"
            fill
            priority
            className="hero-visual-image"
          />
        </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="section" id="services">
        <div className="section-inner">
          <p className="section-label fade-up">WHAT WE DO</p>
          <h2 className="section-title fade-up delay-100">
            Our Services
          </h2>
          <p className="section-sub fade-up delay-200">
            Full-scale multimedia production for corporate events, personal occasions, and brand campaigns — delivered by a professional team with broadcast-grade equipment.
          </p>

          <ServiceGrid services={services} />
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
          
          <div className="clients-carousel fade-up delay-300">
            <div className="clients-carousel-viewport">
              <div
                className="clients-carousel-track"
                style={{ transform: `translateX(-${safeClientSlideIndex * 100}%)` }}
              >
                {clientSlidePages.map((page, pageIndex) => (
                  <div
                    key={`clients-page-${pageIndex}`}
                    className={`clients-carousel-page cols-${clientSlidesPerView}`}
                  >
                    {page.map((slide) => (
                      <div key={slide.src} className="client-logo-item">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                          className="client-logo-image"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          

            {clientSlidePages.length > 1 && (
              <div className="clients-dots" role="tablist" aria-label="Clients carousel">
                {clientSlidePages.map((_, i) => (
                  <button
                    key={`clients-dot-${i}`}
                    type="button"
                    className={`clients-dot${i === safeClientSlideIndex ? " active" : ""}`}
                    onClick={() => setClientSlideIndex(i)}
                    aria-label={`Show client logos ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Careers ────────────────────────────────────────── */}
      <section className="section careers-section" id="careers">
        <div className="section-inner">
          <div className="careers-head">
            <p className="careers-kicker fade-up">JOIN THE TEAM</p>
            <h2 className="careers-title fade-up delay-100">
              Career opportunities
            </h2>
            <p className="careers-text fade-up delay-200">
              We&apos;re looking for people who enjoy solving real business problems,
              working collaboratively, and creating work that makes a visible impact.
            </p>
          </div>

          <div className="careers-layout">
            <div className="careers-carousel fade-up delay-200">
              <div className="careers-carousel-stage">
                {careerSlides.map((slide, i) => (
                  <div
                    key={slide.src}
                    className={`careers-slide${i === careerSlideIndex ? " active" : ""}`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 520px"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="careers-slide-image"
                    />
                  </div>
                ))}
              </div>

              <div className="careers-dots" role="tablist" aria-label="Careers carousel">
                {careerSlides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    className={`careers-dot${i === careerSlideIndex ? " active" : ""}`}
                    onClick={() => setCareerSlideIndex(i)}
                    aria-label={`Show career slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="careers-copy">

              <ul className="careers-list">
                {careers.map((role, i) => (
                  <li key={role.title} className="careers-list-item fade-up" style={{ animationDelay: `${250 + i * 90}ms` }}>
                    <h3>{role.title}</h3>
                    <p>{role.description}</p>
                  </li>
                ))}
              </ul>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nlpbussdevtservices@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="careers-apply fade-up delay-500"
              >
                Apply via email →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us ───────────────────────────────────────── */}
      <section className="section about-section" id="about">
        <div className="section-inner about-layout">
          <div className="about-copy">
            <p className="about-kicker fade-up">WHAT WE DO</p>
            <h2 className="about-title fade-up delay-100">Build, Innovate, and Succeed</h2>
            <p className="about-text fade-up delay-200">
              NegosyoLab PH is an innovative business laboratory dedicated to empowering
              small and medium enterprises (SMEs) across the Philippines. We focus on
              bridging the gap between traditional operations and technological progress,
              providing modern solutions to enhance day-to-day business activities.
            </p>

            <h3 className="about-subtitle fade-up delay-300">Our Vision &amp; Mission</h3>
            <p className="about-text fade-up delay-400">
              Our vision is to build a modern Philippine business landscape where
              technological barriers are removed, connections are strengthened, and
              operations are seamless. Our team of specialists aims to provide the
              best-in-class, timely solutions—ensuring you adopt the latest technologies
              and are equipped to adjust to the demands of your craft.
            </p>
          </div>

          <div className="about-carousel fade-up delay-200">
            <div className="about-carousel-stage">
              {aboutSlides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`about-slide${i === aboutSlideIndex ? " active" : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 520px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="about-slide-image"
                  />
                </div>
              ))}
            </div>

            <div className="about-dots" role="tablist" aria-label="About carousel">
              {aboutSlides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`about-dot${i === aboutSlideIndex ? " active" : ""}`}
                  onClick={() => setAboutSlideIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ──────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="section-inner">
          <div className="cta-block fade-up">
            <h2>Ready to grow your business smarter?</h2>
            <p>
              If your team needs software solutions, digital media production, or branded corporate merchandise, let&apos;s talk.
              Share your goals and we&apos;ll help you map out the right next steps for your business.
            </p>
             <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nlpbussdevtservices@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta">
              nlpbussdevtservices@gmail.com →
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
