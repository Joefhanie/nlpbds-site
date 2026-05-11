import { businessSolutions } from "./business-solutions";
import { digitalActivationAndCorporateMerchandise } from "./digital-activation-and-corporate-merchandise";
import { digitalMediaSolutions } from "./digital-media-solutions";

export const servicePages = [
  businessSolutions,
  digitalMediaSolutions,
  digitalActivationAndCorporateMerchandise,
] as const;

export const services = servicePages;

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
