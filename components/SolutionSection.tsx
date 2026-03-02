import { CheckCircle } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-meliora-light-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-meliora-black mb-6">
              We Handle the Entire Planning Approval Process
            </h2>
            <p className="text-lg text-meliora-text-grey mb-8">
              Meliora Projects acts as your strategic partner, managing the technical complexities of town planning and social impact assessments so you can focus on building.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-meliora-beige/20">
                <h3 className="text-xl font-bold text-meliora-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-meliora-beige text-white flex items-center justify-center text-sm">01</span>
                  Town Planning
                </h3>
                <ul className="space-y-3">
                  {['Comprehensive DA Reports', 'Strategic Planning Advice', 'Council Compliance & Negotiation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-meliora-text-grey">
                      <CheckCircle className="w-5 h-5 text-meliora-beige flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-meliora-beige/20">
                <h3 className="text-xl font-bold text-meliora-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-meliora-beige text-white flex items-center justify-center text-sm">02</span>
                  Social Impact Assessment
                </h3>
                <ul className="space-y-3">
                  {['Community Impact Reports', 'Regulatory Compliance Checks', 'Risk Mitigation Strategies'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-meliora-text-grey">
                      <CheckCircle className="w-5 h-5 text-meliora-beige flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="#contact" 
                className="text-meliora-black font-semibold border-b-2 border-meliora-beige hover:text-meliora-beige transition-colors pb-1 inline-flex items-center gap-2"
              >
                Request Planning Consultation
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
             {/* Placeholder for an image - using a colored div for now as per instructions to build structure */}
             <div className="absolute inset-0 bg-meliora-black/5">
                {/* We would put a relevant image here */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-meliora-beige/20 to-meliora-black/5">
                    <div className="text-center p-8">
                        <div className="text-6xl font-serif text-meliora-beige/20 mb-4">Meliora</div>
                        <p className="text-meliora-text-grey/60 font-medium">Premium Consultancy</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
