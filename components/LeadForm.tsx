'use client';

import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export default function LeadForm({ className = "" }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Thank you for your enquiry. One of our consultants will be in touch shortly.");
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border border-meliora-border ${className}`}>
      <h3 className="text-xl font-semibold text-meliora-black mb-4 text-center">
        Get Expert Advice
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-meliora-beige focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-meliora-beige focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-meliora-beige focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="location" className="sr-only">Project Location</label>
          <input
            type="text"
            id="location"
            placeholder="Project Location (Suburb)"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-meliora-beige focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="relative">
          <label htmlFor="type" className="sr-only">Project Type</label>
          <select
            id="type"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-meliora-beige focus:border-transparent outline-none transition-all appearance-none bg-white text-gray-600"
            defaultValue=""
          >
            <option value="" disabled>Project Type</option>
            <option value="residential">Residential Development</option>
            <option value="commercial">Commercial Development</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="subdivision">Subdivision</option>
            <option value="other">Other</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-meliora-beige hover:bg-[#8a7b5c] text-white font-semibold py-4 rounded-lg transition-colors duration-200 shadow-md mt-2"
        >
          {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-3">
          Your details are kept strictly confidential.
        </p>
      </form>
    </div>
  );
}
