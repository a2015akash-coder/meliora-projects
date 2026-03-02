'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does the approval process take?",
      answer: "Timelines vary depending on the council and project complexity. Generally, a standard DA can take 3-6 months. We work to expedite this by ensuring all documentation is perfect upon submission."
    },
    {
      question: "Do you work with private developers?",
      answer: "Yes, we specialise in working with property developers, builders, and architects on residential and commercial projects of all sizes."
    },
    {
      question: "Do you cover all of NSW?",
      answer: "Yes, Meliora Projects operates across the entire state of New South Wales, with experience in both metropolitan Sydney councils and regional areas."
    },
    {
      question: "How much does a planning report cost?",
      answer: "Costs depend on the scope and complexity of the project. Contact us for a free quote tailored to your specific development needs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-meliora-black text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-meliora-border rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50"
              >
                <span className="font-semibold text-meliora-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-meliora-beige" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 bg-white text-meliora-text-grey text-sm leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
