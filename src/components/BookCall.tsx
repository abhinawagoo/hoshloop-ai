import React from 'react';
import { Calendar } from 'lucide-react';

const BookCall = () => {
  return (
    <section id="book-call" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Book a free strategy call and discover how we can transform your business with AI automation and rapid MVP development.
          </p>

          <a 
            href="https://cal.com/hoshloop/strategy-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors duration-200"
          >
            <Calendar className="w-6 h-6" />
            Book Free Strategy Call
          </a>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              🚀 Limited slots available this month
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <span>✅ No commitment required</span>
              <span>✅ 100% Free consultation</span>
              <span>✅ Instant calendar access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;