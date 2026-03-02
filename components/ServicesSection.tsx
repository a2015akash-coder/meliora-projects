import { ArrowRight, FileText, Users, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Town Planning",
      items: [
        "Statement of Environmental Effects",
        "Development Applications (DA)",
        "Planning Proposals",
        "Clause 4.6 Variations"
      ],
      cta: "Get Quote"
    },
    {
      icon: Users,
      title: "Social Impact Assessment",
      items: [
        "Social Impact Statements",
        "Community Consultation",
        "Demographic Analysis",
        "Crime Risk Assessment (CPTED)"
      ],
      cta: "Request Assessment"
    },
    {
      icon: ShieldCheck,
      title: "Planning Approval Strategy",
      items: [
        "Pre-DA Advice",
        "Land & Environment Court Support",
        "Due Diligence Reports",
        "Council Negotiation"
      ],
      cta: "Book Consultation"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-meliora-black mb-4">
            Specialised Planning Services
          </h2>
          <p className="text-meliora-text-grey">
            Expert guidance for developers, architects, and builders across New South Wales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-meliora-border hover:border-meliora-beige transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="w-14 h-14 bg-meliora-light-beige rounded-xl flex items-center justify-center text-meliora-beige mb-6 group-hover:bg-meliora-beige group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-meliora-black mb-6">{service.title}</h3>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-meliora-text-grey text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-meliora-beige mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-between w-full px-6 py-3 bg-white border border-meliora-black text-meliora-black font-medium rounded-lg group-hover:bg-meliora-black group-hover:text-white transition-all"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
