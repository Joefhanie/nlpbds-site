import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { label: 'Business Solutions', href: '#services' },
    { label: 'Digital Media, Audio, and Video Production', href: '#services' },
    { label: 'Business and Corporate Merchandise', href: '#services' },
  ],
  company: [
    { label: 'Home', href: '#home' },
    { label: 'Clients', href: '#clients' },
    { label: 'Careers', href: '#careers' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Get in Touch', href: '#contact' },
    { label: 'Email Us', href:'https://mail.google.com/mail/?view=cm&fs=1&to=nlpbussdevtservices@gmail.com' },
    { label: 'Facebook', href:'https://www.facebook.com/NegosyoLabPh' },
  ],
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1 flex items-center">
            <Link href="/" className="inline-block">
              <Image
                src="/img/NLP LEGAL.png"
                alt="NegosyoLabPH logo"
                width={180}
                height={72}
                priority={false}
                className="h-auto w-56 brightness-0 invert"
              />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wider footer-link-title">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wider footer-link-title">
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wider footer-link-title">
              Legal
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer text-center">
        <p>© 2026 NLP Business Development Services.</p>
      </div>
    </footer>
  );
}
