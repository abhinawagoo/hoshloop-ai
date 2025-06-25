import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Simple, transparent pricing for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="bg-white text-black p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Monthly Subscription</h3>
            <div className="text-4xl font-bold mb-6">
              $2,000<span className="text-lg font-normal">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li>24/7 AI Automation Support</li>
              <li>Monthly Strategy Calls</li>
              <li>System Monitoring & Updates</li>
              <li>Priority Support Channel</li>
              <li>Performance Analytics</li>
              <li>Feature Enhancements</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors" href="https://cal.com/abhinawago" >
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900 text-white p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Enterprise & Custom</h3>
            <div className="text-4xl font-bold mb-6">Contact Us</div>
            
            <ul className="space-y-3 mb-8 text-gray-300">
              <li>Custom RAG Solutions</li>
              <li>Advanced AI Integrations</li>
              <li>Dedicated Development Team</li>
              <li>White-label Solutions</li>
              <li>Enterprise Security</li>
              <li>24/7 Dedicated Support</li>
            </ul>

            <button className="w-full border border-gray-600 text-white py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" href="https://cal.com/abhinawago" >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
