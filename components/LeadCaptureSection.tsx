import LeadForm from './LeadForm';

export default function LeadCaptureSection() {
  return (
    <section id="contact" className="py-20 bg-meliora-light-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-meliora-black mb-6">
              Speak With a Town Planning Expert Today
            </h2>
            <p className="text-lg text-meliora-text-grey mb-8">
              Ready to move your project forward? Contact us for a confidential discussion about your development needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-meliora-beige shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-meliora-black">Call Us</h3>
                  <p className="text-meliora-text-grey">(02) 5550 1234</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-meliora-beige shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-meliora-black">Email Us</h3>
                  <p className="text-meliora-text-grey">info@melioraprojects.com.au</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <LeadForm className="shadow-xl border-meliora-beige/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
