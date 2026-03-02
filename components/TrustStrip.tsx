import { Map, Award, Briefcase, Clock } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    { icon: Map, text: "NSW Planning Expertise" },
    { icon: Award, text: "Registered Consultants" },
    { icon: Clock, text: "Fast Turnaround" },
    { icon: Briefcase, text: "Developer Focused" },
  ];

  return (
    <section className="py-8 bg-white border-b border-meliora-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
              <div className="p-2 bg-meliora-light-beige rounded-full text-meliora-beige">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-meliora-text-grey text-sm md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
