'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Acasă', href: '/' },
    { name: 'CV', href: '/cv' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Finanzbuchhalter', href: '/servicii/finanzbuchhalter' },
    { name: 'Business Planning', href: '/servicii/business-planning' },
    { name: 'Web Development', href: '/servicii/web-development' },
    { name: 'Design Grafic', href: '/servicii/design-grafic' },
  ];

  const tools = [
    { name: 'Calculator Impozite', href: '/instrumente/calculator-impozite' },
    { name: 'Planificator Buget', href: '/instrumente/planificator-buget' },
    { name: 'Convertor Valutar', href: '/instrumente/convertor-valutar' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mateescu-mihai-922b3169',
      icon: '💼'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ProfitMinds.de',
      icon: '📘'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/mindsprofit',
      icon: '📷'
    },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/icons/m.webp"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl">Mihai Mateescu</span>
            </div>
            <p className="text-muted mb-4">
              Finanzbuchhalter cu expertiză în contabilitate și consultanță financiară pentru Germania.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4">Instrumente</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {currentYear} Mihai Adrian Mateescu. Toate drepturile rezervate.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted hover:text-primary text-sm transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="/terms" className="text-muted hover:text-primary text-sm transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}