import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HoshLoop delivered our MVP in exactly 3 weeks as promised. The AI automation has saved us 20+ hours per week.",
      name: "John Doe",
      title: "CEO, TechStart",
      initials: "JD"
    },
    {
      quote: "The RAG solution they built completely transformed our document processing workflow. Incredible results!",
      name: "Sarah Miller",
      title: "CTO, DataFlow",
      initials: "SM"
    },
    {
      quote: "Professional, fast, and exceeded expectations. Our fintech platform is now generating significant revenue.",
      name: "Mike Johnson",
      title: "Founder, FinanceAI",
      initials: "MJ"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;