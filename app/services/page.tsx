import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { servicePages } from "./service-data";

type ServicesPageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedService = Array.isArray(resolvedSearchParams.service)
    ? resolvedSearchParams.service[0]
    : resolvedSearchParams.service;

  const selectedService =
    servicePages.find((service) => service.slug === requestedService) ??
    servicePages[0];

  return (
    <>
      <nav className="navbar">
        <Link href="/#home" className="brand">
          <Image src="/img/NLP LEGAL.png" alt="NegosyoLabPH Logo" width={150} height={90} loading="eager" />
        </Link>

        <ul className="nav-links">
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#clients">Clients</Link></li>
          <li><Link href="/#careers">Careers</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        <Link href="/#contact" className="btn-nav">Get in Touch</Link>
      </nav>

      <section className="service-detail-hero">
        <div className="service-detail-inner">
          <div className="service-detail-copy">
            <p className="section-label fade-up">WHAT WE DO</p>
            <h1 className="service-detail-title fade-up delay-100">{selectedService.title}</h1>
            <p className="service-detail-lead fade-up delay-200">
              {selectedService.subtitle}
            </p>
            <div className="service-detail-actions fade-up delay-300">
              <Link href="/#contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/#services" className="btn-outline">
                Back to Services
              </Link>
            </div>
          </div>

          <div className="service-detail-media fade-up delay-200" aria-hidden="true">
            <Image
              src={selectedService.image}
              alt={selectedService.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="service-detail-image"
            />
          </div>
        </div>
      </section>

      <section className="section service-detail-body">
        <div className="section-inner service-detail-grid">
          <article className="service-detail-panel">
            <h2>What We Offer</h2>
            <p>{selectedService.description}</p>
          </article>

          <article className="service-detail-panel service-detail-panel--accent">
            <h2>Our Services Include:</h2>
            <ul className="service-detail-list">
              {selectedService.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="service-detail-panel">
            <h2>Perfect For:</h2>
            <ul className="service-detail-steps">
              {selectedService.perfectFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
