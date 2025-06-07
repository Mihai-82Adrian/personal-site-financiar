import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export default function Home() {
  const services = [
    {
      id: 'design-grafic',
      title: 'Design Grafic',
      description: 'Design pentru haine și accesorii personalizate',
      icon: '🎨',
      href: '/servicii/design-grafic',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Site-uri de prezentare moderne și responsive',
      icon: '💻',
      href: '/servicii/web-development',
    },
    {
      id: 'mcp-calculatoare',
      title: 'Microcalculatoare',
      description: 'Sisteme personalizate și consultanță tehnică',
      icon: '🖥️',
      href: '/servicii/mcp-calculatoare',
    },
    {
      id: 'finanzbuchhalter',
      title: 'Finanzbuchhalter',
      description: 'Servicii complete de contabilitate pentru Germania',
      icon: '📊',
      href: '/servicii/finanzbuchhalter',
    },
    {
      id: 'business-planning',
      title: 'Business Planning',
      description: 'Consultanță și planificare strategică',
      icon: '📈',
      href: '/servicii/business-planning',
    },
  ];

  const tools = [
    { name: 'Calculator Impozite', icon: '🧮', href: '/instrumente/calculator-impozite' },
    { name: 'Planificator Buget', icon: '💰', href: '/instrumente/planificator-buget' },
    { name: 'Calculator Amortizare', icon: '📉', href: '/instrumente/calculator-amortizare' },
    { name: 'Simulator Investiții', icon: '📊', href: '/instrumente/simulator-investitii' },
    { name: 'Convertor Valutar', icon: '💱', href: '/instrumente/convertor-valutar' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/background/CFO.webp')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Servicii Financiar-Contabile
            <span className="block text-3xl md:text-4xl mt-4 text-secondary">
              pentru Germania 🇩🇪
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Expertiză în contabilitate, consultanță financiară și soluții digitale moderne.
            Partenerul tău de încredere pentru succesul afacerii tale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cv">
              <Button size="lg" variant="secondary" className="text-lg">
                Vezi CV-ul meu
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="glass" className="text-lg">
                Contactează-mă
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Serviciile Mele
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.id} href={service.href}>
                <Card variant="brutal" className="h-full hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Instrumente Financiare Gratuite
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Card variant="glass" className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <p className="text-sm font-medium">{tool.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Hai să lucrăm împreună!
          </h2>
          <p className="text-lg mb-8 text-muted">
            Fie că ai nevoie de servicii de contabilitate, consultanță financiară sau soluții digitale,
            sunt aici să te ajut să-ți duci afacerea la următorul nivel.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary" className="text-lg">
              Programează o consultație gratuită
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
