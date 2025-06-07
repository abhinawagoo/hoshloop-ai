import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to build an MVP?",
      answer: "We deliver fully functional MVPs in exactly 3 weeks. This includes development, testing, and deployment."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern tech stacks including React, Node.js, Python, AI/ML frameworks, and cloud platforms like AWS and Vercel."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support, monthly strategy calls, and continuous monitoring with our subscription plans."
    },
    {
      question: "What is a RAG solution?",
      answer: "RAG (Retrieval-Augmented Generation) combines AI with your specific data to create intelligent systems that can answer questions and process documents."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in seamless integrations with existing business systems and workflows."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FAQ's
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;