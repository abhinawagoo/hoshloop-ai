import React from 'react';
import { Bot, Rocket, Database, Code2, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions that work 24/7.",
      features: ["Custom AI Workflows", "Process Optimization", "Smart Integrations"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "3-Week MVP",
      description: "From concept to launch in just 3 weeks. Get your product to market faster than ever.",
      features: ["Rapid Prototyping", "Full-Stack Development", "Market Ready"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "RAG Solutions",
      description: "Retrieval-Augmented Generation systems for intelligent document processing and Q&A.",
      features: ["Document Intelligence", "Custom Knowledge Base", "AI-Powered Search"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions that transform your business and accelerate your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-purple-400 mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <Zap className="w-4 h-4 text-cyan-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our 3-Week Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Week 1: Discovery</h4>
              <p className="text-gray-400">Deep dive into your requirements and create detailed specifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Week 2: Development</h4>
              <p className="text-gray-400">Rapid development with daily updates and continuous feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Week 3: Launch</h4>
              <p className="text-gray-400">Testing, deployment, and handover with full documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;