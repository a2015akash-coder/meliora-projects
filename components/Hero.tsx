import { CheckCircle2 } from "lucide-react";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative bg-meliora-light-beige pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-meliora-border text-meliora-beige text-xs font-medium mb-4">

              <span className="h-1.5 w-1.5 bg-meliora-beige rounded-full"></span>

              Town Planning Consultants – NSW

            </div>


            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meliora-black leading-tight mb-4 tracking-tight">

              Town Planning Consultants in NSW

              <span className="block text-meliora-beige">
                for Development Approval
              </span>

            </h1>


            {/* Description */}
            <p className="text-base text-meliora-text-grey mb-6 leading-relaxed">

              We help developers, builders, and property owners navigate NSW planning regulations with professional town planning reports, development applications, and council approval support.

            </p>


            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-5 mb-7 text-sm">

              <div className="flex items-center gap-2 text-meliora-text-grey font-medium">

                <CheckCircle2 className="w-4 h-4 text-meliora-beige" />

                NSW Planning Specialists

              </div>


              <div className="flex items-center gap-2 text-meliora-text-grey font-medium">

                <CheckCircle2 className="w-4 h-4 text-meliora-beige" />

                Development Application Experts

              </div>


              <div className="flex items-center gap-2 text-meliora-text-grey font-medium">

                <CheckCircle2 className="w-4 h-4 text-meliora-beige" />

                Fast Turnaround Times

              </div>

            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 bg-meliora-beige hover:bg-[#8a7b5c] text-white font-semibold rounded-lg transition shadow-sm text-base"
              >

                Request Town Planning Consultation

              </a>


              {/* Phone CTA */}
              <a
                href="tel:+61255501234"
                className="inline-flex justify-center items-center px-6 py-3 bg-white border border-meliora-border hover:border-meliora-beige text-meliora-black font-semibold rounded-lg transition text-base"
              >

                (02) 5550 1234

              </a>

            </div>

          </div>



          {/* Right Form */}
          <div className="relative">

            <LeadForm />



            {/* Decorative Background Blur */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-meliora-beige/10 rounded-full blur-3xl -z-10"></div>

            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-meliora-beige/10 rounded-full blur-3xl -z-10"></div>

          </div>



        </div>

      </div>

    </section>
  );
}