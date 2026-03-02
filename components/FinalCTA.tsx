export default function FinalCTA() {
  return (
    <section className="py-24 bg-meliora-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Start Your Planning Process Today
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Avoid delays and rejections. Partner with the experts in NSW town planning and social impact assessment.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-meliora-beige hover:bg-[#8a7b5c] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get Free Consultation
          </a>
          <a 
            href="tel:+61200000000" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Call (02) 5550 1234
          </a>
        </div>
      </div>
    </section>
  );
}
