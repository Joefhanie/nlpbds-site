import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const footerLinks = {
  services: [
    { label: 'Business Solutions', href: '#services' },
    { label: 'Digital Media, Audio, and Video Production', href: '#services' },
    { label: 'Business and Corporate Merchandise', href: '#services' },
  ],
  company: [
    { label: 'Home', href: '#home' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Get in Touch', href: '#contact' },
    { label: 'Email Us', href: 'mailto:hello@negosyolabph.com' },
  ],
};

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-[#99C83C] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-poppins text-2xl font-bold text-[#192436]">
                Negosyo<span className="text-white">Lab</span>PH
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#192436]/80">
              Empowering Filipino businesses with strategic development
              solutions for sustainable growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192436]/10 text-[#192436]/80 transition-all hover:bg-[#192436] hover:text-[#99C83C]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wider text-[#192436]">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#192436]/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wider text-[#192436]">
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#192436]/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wider text-[#192436]">
              Legal
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#192436]/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
