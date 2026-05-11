"use client";

import Image from "next/image";
import Link from "next/link";
import type { ServicePage } from "../services/service-types";

export function ServiceGrid({
  services,
  baseDelay = 200,
}: {
  services: readonly ServicePage[];
  baseDelay?: number;
}) {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services?service=${service.slug}`}
          className="service-card-link"
        >
          <article
            className="service-card fade-up"
            style={{ animationDelay: `${baseDelay + index * 80}ms` }}
          >
            <div className="service-image">
              <Image
                src={service.image}
                alt={service.cardTitle ?? service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="service-image-img"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="service-copy">
              <h3>{service.cardTitle ?? service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
