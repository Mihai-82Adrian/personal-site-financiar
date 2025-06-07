import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import MotionWrapper from '@/components/animations/MotionWrapper';
import NumberCounter from '@/components/animations/NumberCounter';
import GlassCard from '@/components/animations/GlassCard';
import ParallaxSection from '@/components/animations/ParallaxSection';

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
        <ParallaxSection speed={0.3} direction="down">
          <div className="absolute inset-0 bg-[url('/images/background/CFO.webp')] bg-cover bg-center opacity-10" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <MotionWrapper variant="fadeInDown" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Servicii Financiar-Contabile
              <MotionWrapper variant="fadeInUp" delay={0.4}>
                <span className="block text-3xl md:text-4xl mt-4 text-secondary">
                  pentru Germania 🇩🇪
                </span>
              </MotionWrapper>
            </h1>
          </MotionWrapper>
          
          <MotionWrapper variant="fadeInUp" delay={0.6}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Expertiză în contabilitate, consultanță financiară și soluții digitale moderne.
              Partenerul tău de încredere pentru succesul afacerii tale.
            </p>
          </MotionWrapper>
          
          <MotionWrapper variant="scaleIn" delay={0.8}>
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
          </MotionWrapper>

          {/* Statistics Section */}
          <MotionWrapper variant="fadeInUp" delay={1.0}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <NumberCounter 
                  value={15} 
                  suffix="+" 
                  className="text-4xl font-bold text-secondary"
                  delay={1.2}
                />
                <p className="text-sm text-white/80 mt-2">Ani Experiență</p>
              </div>
              <div className="text-center">
                <NumberCounter 
                  value={200} 
                  suffix="+" 
                  className="text-4xl font-bold text-secondary"
                  delay={1.4}
                />
                <p className="text-sm text-white/80 mt-2">Clienți Mulțumiți</p>
              </div>
              <div className="text-center">
                <NumberCounter 
                  value={5} 
                  className="text-4xl font-bold text-secondary"
                  delay={1.6}
                />
                <p className="text-sm text-white/80 mt-2">Servicii Oferite</p>
              </div>
              <div className="text-center">
                <NumberCounter 
                  value={100} 
                  suffix="%" 
                  className="text-4xl font-bold text-secondary"
                  delay={1.8}
                />
                <p className="text-sm text-white/80 mt-2">Satisfacție Client</p>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <MotionWrapper variant="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Serviciile Mele
            </h2>
          </MotionWrapper>
          
          <MotionWrapper stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <MotionWrapper 
                  key={service.id}
                  variant="scaleIn" 
                  delay={index * 0.1}
                >
                  <Link href={service.href}>
                    <Card 
                      variant="brutal" 
                      className="h-full hover:translate-y-[-4px] hover:scale-105 transition-all duration-300 cursor-pointer group"
                    >
                      <CardHeader>
                        <MotionWrapper 
                          variant="scaleIn" 
                          delay={0.2}
                          className="group-hover:animate-bounce"
                        >
                          <div className="text-4xl mb-4">{service.icon}</div>
                        </MotionWrapper>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </MotionWrapper>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Tools Section */}
      <ParallaxSection speed={0.2}>
        <section className="py-20 px-4 bg-surface">
          <div className="container mx-auto max-w-7xl">
            <MotionWrapper variant="fadeInDown">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                Instrumente Financiare Gratuite
              </h2>
            </MotionWrapper>
            
            <MotionWrapper stagger>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {tools.map((tool, index) => (
                  <MotionWrapper 
                    key={tool.href}
                    variant="fadeInUp" 
                    delay={index * 0.05}
                  >
                    <Link href={tool.href}>
                      <GlassCard 
                        intensity="medium"
                        className="text-center h-full p-6 group"
                      >
                        <MotionWrapper 
                          variant="scaleIn" 
                          delay={0.1}
                          className="group-hover:scale-110 transition-transform duration-200"
                        >
                          <div className="text-3xl mb-3">{tool.icon}</div>
                        </MotionWrapper>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">
                          {tool.name}
                        </p>
                      </GlassCard>
                    </Link>
                  </MotionWrapper>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <MotionWrapper variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Hai să lucrăm împreună!
            </h2>
          </MotionWrapper>
          
          <MotionWrapper variant="fadeInUp" delay={0.2}>
            <p className="text-lg mb-8 text-muted">
              Fie că ai nevoie de servicii de contabilitate, consultanță financiară sau soluții digitale,
              sunt aici să te ajut să-ți duci afacerea la următorul nivel.
            </p>
          </MotionWrapper>
          
          <MotionWrapper variant="scaleIn" delay={0.4}>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="primary" 
                className="text-lg hover:scale-105 transition-transform duration-200"
              >
                Programează o consultație gratuită
              </Button>
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
