import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../components/footer";
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
            <Link href="/services" className="service-back-link fade-up">
              {"<- Back to Services"}
            </Link>
            <h1 className="service-detail-title fade-up delay-100">{service.title}</h1>
            <p className="service-detail-lead fade-up delay-200">{service.pageIntro}</p>
          </div>
        </div>
      </section>

      <section className="section service-detail-body">
        <div className="section-inner service-detail-grid">
          <article className="service-detail-panel service-detail-panel--main">
            <h2>What We Offer</h2>
            <p>{service.description}</p>
            <h3 className="service-detail-subheading">Our Services Include:</h3>
            <ul className="service-detail-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="service-detail-subheading">Perfect For:</h3>
            <ul className="service-detail-steps">
              {service.perfectFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="service-detail-cta">
              <Link href="/#contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </article>

          <aside className="service-detail-media-wrap">
            <div className="service-detail-media" aria-hidden="true">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="service-detail-image"
              />
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
