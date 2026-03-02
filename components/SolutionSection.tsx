import { CheckCircle } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="py-16 lg:py-20 bg-meliora-light-beige">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-meliora-black mb-4">

              Expert Town Planning Support for Development Approval

            </h2>


            <p className="text-base text-meliora-text-grey mb-8 max-w-xl">

              Meliora Projects provides professional town planning services to support successful development applications across NSW. We manage the planning process, prepare compliant reports, and work with councils to help move your project forward.

            </p>


            {/* Service Blocks */}

            <div className="space-y-6">


              {/* Service 1 */}
              <div className="bg-white p-6 rounded-xl border border-meliora-border">

                <h3 className="text-lg font-bold text-meliora-black mb-4 flex items-center gap-3">

                  <span className="w-7 h-7 rounded-full bg-meliora-beige text-white flex items-center justify-center text-sm font-medium">

                    01

                  </span>

                  Development Application Reports

                </h3>


                <ul className="space-y-2">

                  {[
                    "Preparation of compliant town planning reports",
                    "Statement of Environmental Effects (SEE)",
                    "Development application documentation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-meliora-text-grey">

                      <CheckCircle className="w-4 h-4 text-meliora-beige mt-0.5 flex-shrink-0" />

                      {item}

                    </li>
                  ))}

                </ul>

              </div>



              {/* Service 2 */}
              <div className="bg-white p-6 rounded-xl border border-meliora-border">

                <h3 className="text-lg font-bold text-meliora-black mb-4 flex items-center gap-3">

                  <span className="w-7 h-7 rounded-full bg-meliora-beige text-white flex items-center justify-center text-sm font-medium">

                    02

                  </span>

                  Planning Advice and Strategy

                </h3>


                <ul className="space-y-2">

                  {[
                    "Planning feasibility assessments",
                    "Zoning and planning control analysis",
                    "Development strategy recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-meliora-text-grey">

                      <CheckCircle className="w-4 h-4 text-meliora-beige mt-0.5 flex-shrink-0" />

                      {item}

                    </li>
                  ))}

                </ul>

              </div>



              {/* Service 3 */}
              <div className="bg-white p-6 rounded-xl border border-meliora-border">

                <h3 className="text-lg font-bold text-meliora-black mb-4 flex items-center gap-3">

                  <span className="w-7 h-7 rounded-full bg-meliora-beige text-white flex items-center justify-center text-sm font-medium">

                    03

                  </span>

                  Council Submission and Approval Support

                </h3>


                <ul className="space-y-2">

                  {[
                    "Development application submission support",
                    "Council liaison and communication",
                    "Planning approval guidance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-meliora-text-grey">

                      <CheckCircle className="w-4 h-4 text-meliora-beige mt-0.5 flex-shrink-0" />

                      {item}

                    </li>
                  ))}

                </ul>

              </div>


            </div>



            {/* CTA */}

            <div className="mt-8">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-meliora-black font-semibold border-b border-meliora-beige hover:text-meliora-beige transition-colors pb-1"
              >

                Request Town Planning Consultation →

              </a>

            </div>


          </div>



          {/* Right Image Placeholder */}

          <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border border-meliora-border bg-white">

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-meliora-beige/10 to-transparent">

              <div className="text-center">

                <div className="text-5xl font-serif text-meliora-beige/20 mb-3">

                  Meliora

                </div>

                <p className="text-sm text-meliora-text-grey/60">

                  Town Planning Consultants

                </p>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}