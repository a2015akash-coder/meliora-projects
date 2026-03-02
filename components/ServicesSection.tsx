import { ArrowRight, FileText, Map, Scale } from "lucide-react";

export default function ServicesSection() {

  const services = [

    {
      icon: FileText,

      title: "Development Application Reports",

      items: [

        "Statement of Environmental Effects (SEE)",

        "Development Application Preparation",

        "Clause 4.6 Variation Requests",

        "Planning Proposal Documentation",

      ],

      cta: "Request Consultation",

    },


    {
      icon: Map,

      title: "Planning Advice & Feasibility",

      items: [

        "Pre-purchase Planning Advice",

        "Zoning and Land Use Analysis",

        "Development Feasibility Assessment",

        "Planning Due Diligence Reports",

      ],

      cta: "Speak with Planner",

    },


    {
      icon: Scale,

      title: "Council Approval Support",

      items: [

        "Development Application Submission",

        "Council Liaison and Negotiation",

        "Response to Council Requests",

        "Land and Environment Court Support",

      ],

      cta: "Get Planning Support",

    },

  ];



  return (

    <section id="services" className="py-16 lg:py-20 bg-white">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">



        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-meliora-black mb-4">

            Town Planning Services in NSW

          </h2>


          <p className="text-meliora-text-grey text-base">

            Professional town planning services to support development approval and project success.

          </p>

        </div>



        {/* Service Cards */}

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-meliora-border hover:border-meliora-beige transition-all flex flex-col"
            >


              {/* Icon */}

              <div className="w-12 h-12 bg-meliora-light-beige rounded-lg flex items-center justify-center text-meliora-beige mb-5 group-hover:bg-meliora-beige group-hover:text-white transition-colors">

                <service.icon className="w-6 h-6" />

              </div>



              {/* Title */}

              <h3 className="text-lg font-semibold text-meliora-black mb-4">

                {service.title}

              </h3>



              {/* List */}

              <ul className="space-y-3 mb-6 flex-grow">

                {service.items.map((item, i) => (

                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-meliora-text-grey"
                  >

                    <span className="w-1.5 h-1.5 rounded-full bg-meliora-beige mt-2 flex-shrink-0"></span>

                    {item}

                  </li>

                ))}

              </ul>



              {/* CTA */}

              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full px-5 py-3 bg-white border border-meliora-black text-meliora-black font-medium rounded-lg group-hover:bg-meliora-black group-hover:text-white transition"
              >

                {service.cta}

                <ArrowRight className="w-4 h-4" />

              </a>


            </div>

          ))}

        </div>

      </div>

    </section>

  );

}