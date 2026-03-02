import { AlertTriangle, Clock, FileWarning, Scale } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Approval Delays Cost Money",
      description: "Every week your project is stuck in council is money lost on holding costs and missed opportunities."
    },
    {
      icon: FileWarning,
      title: "Rejections Due to Poor Reports",
      description: "Incomplete or poorly structured planning reports are the #1 cause of DA rejection in NSW."
    },
    {
      icon: Scale,
      title: "Complex Regulations",
      description: "Navigating NSW's ever-changing planning controls and social impact requirements is overwhelming."
    },
    {
      icon: AlertTriangle,
      title: "Compliance Risks",
      description: "Failing to meet social impact compliance requirements can halt your project indefinitely."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-meliora-black mb-6">
            Planning Approval in NSW Can Be <span className="text-red-700/80">Complex and Risky</span>
          </h2>
          <p className="text-lg text-meliora-text-grey">
            Don't let bureaucratic hurdles derail your development project. The stakes are too high for guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-meliora-light-beige/30 p-8 rounded-xl border border-meliora-border hover:border-meliora-beige/50 transition-colors">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-700 mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-meliora-black mb-3">{item.title}</h3>
              <p className="text-meliora-text-grey text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-meliora-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Talk to a Planning Expert
          </a>
        </div>
      </div>
    </section>
  );
}
