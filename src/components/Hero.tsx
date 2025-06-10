import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Automation &<br />
            <span className="text-gray-400">MVP Development</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions and launch your MVP in just 3 weeks. 
            We've delivered 10+ successful products.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://cal.com/abhinawago"
              
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Strategy Call
            </a>
            <a 
              href="#work"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">MVPs Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400">Weeks to Launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">AI Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
