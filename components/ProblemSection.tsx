import { AlertTriangle, Clock, FileWarning, Scale } from "lucide-react";

export default function ProblemSection() {

  const problems = [

    {
      icon: Clock,
      title: "Council Approval Delays",
      description:
        "Delays in planning approval can stall your development for months, increasing holding costs and impacting project timelines.",
    },


    {
      icon: FileWarning,
      title: "Development Applications Get Rejected",
      description:
        "Incorrect or poorly prepared planning reports are one of the most common reasons councils reject development applications in NSW.",
    },


    {
      icon: Scale,
      title: "Complex Planning Controls",
      description:
        "Understanding zoning laws, local environmental plans (LEPs), and development control plans (DCPs) can be difficult without expert guidance.",
    },


    {
      icon: AlertTriangle,
      title: "Risky Planning Mistakes",
      description:
        "Planning errors or missing documentation can lead to costly redesigns, resubmissions, and major project delays.",
    },

  ];


  return (

    <section className="py-16 lg:py-20 bg-white">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">


        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-meliora-black mb-4">

            Town Planning Approval in NSW Can Be

            <span className="block text-red-700/80">

              Complex and Time-Consuming

            </span>

          </h2>


          <p className="text-base text-meliora-text-grey">

            Without proper town planning expertise, development applications can face delays, rejections, and costly setbacks.

          </p>

        </div>



        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {problems.map((item, index) => (

            <div
              key={index}
              className="bg-meliora-light-beige/40 p-6 rounded-xl border border-meliora-border hover:border-meliora-beige transition-colors"
            >

              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-700 mb-4">

                <item.icon className="w-5 h-5" />

              </div>


              <h3 className="text-lg font-bold text-meliora-black mb-2">

                {item.title}

              </h3>


              <p className="text-meliora-text-grey text-sm leading-relaxed">

                {item.description}

              </p>

            </div>

          ))}

        </div>



        {/* CTA */}
        <div className="mt-10 lg:mt-12 text-center">

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-meliora-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >

            Speak with a Town Planning Consultant

          </a>

        </div>



      </div>

    </section>

  );

}