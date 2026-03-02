import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Town Planning Consultants NSW"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-meliora-light-beige/80"></div>
      </div>



      {/* Content */}
      <div className="relative pt-10 pb-16 lg:pt-16 lg:pb-24">

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

              {/* Single CTA */}
              <a
                href="tel:+61255501234"
                className="inline-flex justify-center items-center px-7 py-3.5 bg-meliora-beige hover:bg-[#8a7b5c] text-white font-semibold rounded-lg transition shadow-sm text-base"
              >
                Call (02) 5550 1234
              </a>

            </div>



            {/* Right Form */}
            <div className="relative">
              <LeadForm />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}