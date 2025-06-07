import React from 'react';
import { Clock, Users, Zap, Code } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "3-Week Delivery",
      description: "From concept to launch in just 3 weeks with our proven development process."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation that works 24/7."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Complete end-to-end development with modern technologies and best practices."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Ongoing support and maintenance to ensure your systems run smoothly."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose HoshLoop?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver results that matter to your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;