import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: "E-Commerce AI Assistant",
      description: "Intelligent shopping assistant with personalized recommendations and automated customer support that increased conversion rates by 40%.",
      video: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop",
      tech: ["React", "Node.js", "OpenAI", "Stripe"],
      metrics: "40% increase in conversions"
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial analytics platform with AI-powered insights and automated reporting, processing $2M+ in transactions daily.",
      video: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      metrics: "$2M+ daily transactions"
    },
    {
      title: "Healthcare RAG System",
      description: "Medical document processing system with intelligent search and patient data analysis, reducing processing time by 85%.",
      video: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop",
      tech: ["Python", "LangChain", "Pinecone", "FastAPI"],
      metrics: "85% faster processing"
    },
    {
      title: "SaaS Analytics Platform",
      description: "Comprehensive business intelligence platform with automated insights and predictive analytics, serving 10,000+ active users.",
      video: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop",
      tech: ["Vue.js", "Django", "TensorFlow", "Redis"],
      metrics: "10,000+ active users"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="work" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Our Work
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Real projects, real results. See how we've transformed businesses with cutting-edge solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Video/Image Display */}
          <div 
            className="relative mb-16 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={currentProj.video} 
                alt={currentProj.title}
                className="w-full h-[70vh] md:h-[80vh] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Hover Overlay with Play Button */}
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-6 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="w-12 h-12 ml-1" />
                </button>
              </div>

              {/* Project Info Overlay - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="mb-4">
                    <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentProj.metrics}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {currentProj.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                    {currentProj.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {currentProj.tech.map((tech, idx) => (
                      <span key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    View Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Navigation Arrows - Bottom Right */}
              <div className="absolute bottom-8 right-8 flex gap-3">
                <button 
                  onClick={prevProject}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextProject}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-4 mb-16">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`group relative transition-all duration-300 ${
                  index === currentProject ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-white shadow-lg shadow-white/25' 
                    : 'bg-gray-600 group-hover:bg-gray-400'
                }`}></div>
                {index === currentProject && (
                  <div className="absolute -inset-2 border border-white/30 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                  index === currentProject 
                    ? 'ring-2 ring-white shadow-2xl shadow-white/10' 
                    : 'hover:scale-105 hover:shadow-xl'
                }`}
              >
                <img 
                  src={project.video} 
                  alt={project.title}
                  className="w-full h-24 md:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white text-sm font-semibold truncate">
                    {project.title}
                  </h4>
                </div>
                {index === currentProject && (
                  <div className="absolute inset-0 border-2 border-white rounded-xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;