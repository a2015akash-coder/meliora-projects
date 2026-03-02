export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We assess your site and project goals to determine the best planning pathway."
    },
    {
      number: "02",
      title: "Planning & Assessment",
      description: "Our team prepares detailed reports, impact assessments, and compliance documentation."
    },
    {
      number: "03",
      title: "Submission & Approval",
      description: "We manage the lodgement and negotiate with Council to secure your determination."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-meliora-black mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-meliora-text-grey">
            From initial concept to final approval, we guide you through every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-meliora-border -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="text-center bg-white">
              <div className="w-24 h-24 mx-auto bg-meliora-light-beige rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-6">
                <span className="text-2xl font-bold text-meliora-beige">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-meliora-black mb-3">{step.title}</h3>
              <p className="text-meliora-text-grey text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-meliora-beige hover:bg-[#8a7b5c] text-white font-semibold rounded-lg transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
