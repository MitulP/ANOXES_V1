
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Brain, Heart, Factory, ChevronRight, Star, MapPin, Phone, Mail, Calendar, User, ExternalLink, Github, Globe } from 'lucide-react';
import { loadContentFromJSON, getDefaultContent } from '@/lib/dataService';
import Logo from '../components/Logo';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await loadContentFromJSON();
        setContent(data);
      } catch (error) {
        console.error('Error loading content:', error);
        // setContent(getDefaultContent());
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);



  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!content) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>;
  }

  const portfolioCategories = ['All', 'Healthcare', 'Industry 4.0', 'AI/ML', 'Custom IT'];
  const filteredPortfolio = selectedCategory === 'All' 
    ? (content.portfolio || [])
    : (content.portfolio || []).filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* logo */}
              <div className="flex items-center space-x-3">
                <Menubar className="border-none bg-transparent font-space-grotesk">
                  <MenubarMenu>
                    <MenubarTrigger className="text-lg font-bold text-slate-800 cursor-pointer hover:text-blue-600 transition-colors">
                      <Logo size="md" />
                    </MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </div>
              {/* logo */}
              <div className="flex items-center space-x-3">
                {/* Revolutionary Logo Design */}
                <div className="relative w-14 h-14 group cursor-pointer">
                  {/* Animated background rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="absolute inset-1 rounded-full border-2 border-purple-400/30 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                  <div className="absolute inset-2 rounded-full border border-pink-400/20 animate-spin" style={{animationDuration: '4s'}}></div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
                  
                  {/* Central holographic element */}
                  <div className="absolute inset-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:shadow-blue-500/50">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-purple-600/40 rounded-full blur-sm"></div>
                    
                    {/* Letter A with neural network pattern */}
                    <div className="relative z-10">
                      <div className="text-white font-black text-lg leading-none select-none">A</div>
                      {/* Mini circuit lines */}
                      <div className="absolute -inset-2">
                        <div className="absolute top-1 left-1 w-3 h-0.5 bg-gradient-to-r from-cyan-300/60 to-transparent"></div>
                        <div className="absolute bottom-1 right-1 w-3 h-0.5 bg-gradient-to-l from-pink-300/60 to-transparent"></div>
                        <div className="absolute top-2 right-0 w-0.5 h-2 bg-gradient-to-b from-blue-300/60 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out"></div>
                </div>
                
                {/* Company name with futuristic styling */}
                <div className="relative">
                  <div className="text-2xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                      ANO
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      XES
                    </span>
                  </div>
                  {/* Subtitle */}
                  <div className="text-xs font-medium text-gray-400 tracking-widest uppercase opacity-80">
                    AI • INNOVATION • FUTURE
                  </div>
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" style={{width: '120%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-blue-400 transition-colors relative group">
                  Home
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#services" className="hover:text-blue-400 transition-colors relative group">
                  Services
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors relative group">
                  Portfolio
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#team" className="hover:text-blue-400 transition-colors relative group">
                  Team
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#blog" className="hover:text-blue-400 transition-colors relative group">
                  Blog
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#contact" className="hover:text-blue-400 transition-colors relative group">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="block px-3 py-2 hover:text-blue-400 transition-colors">Services</a>
              <a href="#portfolio" className="block px-3 py-2 hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#team" className="block px-3 py-2 hover:text-blue-400 transition-colors">Team</a>
              <a href="#blog" className="block px-3 py-2 hover:text-blue-400 transition-colors">Blog</a>
              <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
              <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
                {content.hero?.title || "Intelligent Software Solutions"}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              {content.hero?.subtitle || "End-to-end software development and digital transformation services"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                {content.hero?.primaryButton || "Explore Our Services"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                {content.hero?.secondaryButton || "View Portfolio"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver innovative solutions across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content.services || []).map((service, index) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {index === 0 && <Heart className="w-8 h-8" />}
                  {index === 1 && <Factory className="w-8 h-8" />}
                  {index === 2 && <Brain className="w-8 h-8" />}
                  {index === 3 && <Code className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcasing our expertise through successful projects across various domains
            </p>
          </div>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Code className="w-12 h-12 text-blue-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a href={project.demoUrl} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                      <a href={project.githubUrl} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.technologies || []).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-slate-600/50 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {(project.features || []).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <ChevronRight className="w-3 h-3 mr-2 text-blue-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-slate-800/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-gray-300 text-lg">
              Modern frameworks and languages powering our solutions
            </p>
          </div>
          
          <div className="relative">
            {/* First row moving right */}
            <div className="flex animate-[scroll-right_20s_linear_infinite] mb-4">
              <div className="flex space-x-4 min-w-full">
                {(content.technologies || []).slice(0, 6).map((tech, index) => (
                  <div
                    key={`row1-${index}`}
                    className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-center hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-105 min-w-[150px] flex-shrink-0"
                  >
                    <div className="text-sm font-semibold text-blue-300 mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {(content.technologies || []).slice(0, 6).map((tech, index) => (
                  <div
                    key={`row1-dup-${index}`}
                    className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-center hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-105 min-w-[150px] flex-shrink-0"
                  >
                    <div className="text-sm font-semibold text-blue-300 mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row moving left */}
            <div className="flex animate-[scroll-left_25s_linear_infinite]">
              <div className="flex space-x-4 min-w-full">
                {(content.technologies || []).slice(6).map((tech, index) => (
                  <div
                    key={`row2-${index}`}
                    className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-center hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 hover:scale-105 min-w-[150px] flex-shrink-0"
                  >
                    <div className="text-sm font-semibold text-purple-300 mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {(content.technologies || []).slice(6).map((tech, index) => (
                  <div
                    key={`row2-dup-${index}`}
                    className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-center hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 hover:scale-105 min-w-[150px] flex-shrink-0"
                  >
                    <div className="text-sm font-semibold text-purple-300 mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content.testimonials || []).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.feedback}"</p>
                <div>
                  <div className="font-semibold text-blue-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg">
              Expert professionals driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content.team || []).map((member) => (
              <div
                key={member.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{member.name}</h3>
                <p className="text-purple-300 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-gray-300 text-lg">
              Thought leadership and industry perspectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content.blog || []).map((post) => (
              <div
                key={post.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-purple-300">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to transform your business? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold">Address</h3>
                </div>
                <p className="text-gray-300">{content.contact?.address}</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold">Phone</h3>
                </div>
                <p className="text-gray-300">{content.contact?.phone}</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold">Email</h3>
                </div>
                <p className="text-gray-300">{content.contact?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Anoxes
              </div>
              <p className="text-gray-400 mb-4">
                Intelligent software solutions for the modern world. We transform businesses through cutting-edge technology and innovative approaches across Healthcare, Industry 4.0, AI, and Medical Technology domains.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Healthcare Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Industry 4.0</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Artificial Intelligence</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Custom IT Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#team" className="hover:text-blue-400 transition-colors">Our Team</a></li>
                <li><a href="#blog" className="hover:text-blue-400 transition-colors">Latest Insights</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="/admin" className="hover:text-blue-400 transition-colors">Admin</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Anoxes. All rights reserved. Powered by intelligent innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
