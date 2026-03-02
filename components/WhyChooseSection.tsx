import { Check, Clock, TrendingUp, MessageSquare } from 'lucide-react';

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: Check,
      title: "NSW Planning Specialists",
      description: "Deep understanding of NSW legislation, SEPPs, and local council DCPs."
    },
    {
      icon: Clock,
      title: "Fast Turnaround Time",
      description: "We work to your deadlines to ensure your project momentum isn't lost."
    },
    {
      icon: TrendingUp,
      title: "High Approval Success Rate",
      description: "Proven track record of securing approvals for complex developments."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Direct access to senior planners. No jargon, just clear strategic advice."
    }
  ];

  return (
    <section className="py-20 bg-meliora-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Leading Developers Choose <span className="text-meliora-beige">Meliora Projects</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We don't just write reports; we provide strategic planning solutions that maximize your site's potential and minimize risk.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-meliora-beige/20 flex items-center justify-center text-meliora-beige">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{reason.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-meliora-beige hover:bg-[#8a7b5c] text-white font-semibold rounded-lg transition-colors"
              >
                Speak to an Expert
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               {/* Abstract representation of "Projects" */}
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 h-48 flex flex-col justify-end">
                  <div className="text-4xl font-bold text-meliora-beige mb-2">200+</div>
                  <div className="text-sm text-gray-400">Projects Supported</div>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 h-48 flex flex-col justify-end mt-8">
                  <div className="text-4xl font-bold text-meliora-beige mb-2">95%</div>
                  <div className="text-sm text-gray-400">Approval Success</div>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 h-48 flex flex-col justify-end">
                  <div className="text-4xl font-bold text-meliora-beige mb-2">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 h-48 flex flex-col justify-end mt-8">
                  <div className="text-4xl font-bold text-meliora-beige mb-2">100%</div>
                  <div className="text-sm text-gray-400">NSW Focused</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
