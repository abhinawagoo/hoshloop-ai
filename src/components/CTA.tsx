import React from 'react';
import { Calendar, ArrowRight, Clock, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book a free strategy call and discover how we can automate your processes and launch your MVP in just 3 weeks.
          </p>

          {/* Main CTA Button */}
          <div className="mb-12">
            <a 
              href="https://cal.com/abhinawago" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <Calendar className="w-6 h-6" />
              Book Free Strategy Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">30-Min Call</h3>
              <p className="text-gray-200">Quick, focused discussion about your goals and challenges</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Consultation</h3>
              <p className="text-gray-200">Get insights from AI automation specialists</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <ArrowRight className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Custom Roadmap</h3>
              <p className="text-gray-200">Receive a tailored plan for your project</p>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              🚀 Limited slots available this month - Book now to secure your spot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
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

export default CTA;
