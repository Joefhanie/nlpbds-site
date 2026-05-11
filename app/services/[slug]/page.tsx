import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "../service-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service not found | NLPBDS",
    };
  }

  return {
    title: `${service.title} | NLPBDS`,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="service-page-shell">
      <section className="service-detail-hero">
        <div className="service-detail-inner">
          <div className="service-detail-copy">
            <p className="section-label fade-up">WHAT WE DO</p>
            <h1 className="service-detail-title fade-up delay-100">{service.title}</h1>
            <p className="service-detail-lead fade-up delay-200">{service.pageIntro}</p>
            <div className="service-detail-actions fade-up delay-300">
              <Link href="/#contact" className="btn-primary">
                Talk to us
              </Link>
              <Link href="/services" className="btn-outline">
                Back to services
              </Link>
            </div>
          </div>

          <div className="service-detail-media fade-up delay-200" aria-hidden="true">
            <Image
              src={service.image}
              alt={service.title}
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
            <h2>What’s included</h2>
            <ul className="service-detail-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="service-detail-panel service-detail-panel--accent">
            <h2>Perfect for</h2>
            <ul className="service-detail-list">
              {service.perfectFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
