import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { loadContentFromJSON, saveContentToJSON, getDefaultContent } from '@/lib/dataService';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [content, setContent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simplified for example
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await loadContentFromJSON();
        setContent(data);
      } catch (error) {
        console.error('Error loading content:', error);
        // setContent(getDefaultContent());
        toast({
          title: "Error",
          description: "Failed to load content. Using default data.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [toast]);


  const getDefaultContent = () => {
    return {
      hero: {
        title: "Intelligent Software Solutions",
        subtitle: "End-to-end software development and digital transformation services across Healthcare, Industry 4.0, AI, and Medical Technology domains.",
        primaryButton: "Explore Our Services",
        secondaryButton: "View Portfolio"
      },
      services: [
        {
          id: 1,
          title: "Healthcare Solutions",
          description: "Digital transformation for healthcare providers with cutting-edge medical technology integration, HIPAA-compliant systems, and telemedicine platforms."
        },
        {
          id: 2,
          title: "Industry 4.0",
          description: "Smart manufacturing solutions with IoT integration, predictive maintenance, real-time monitoring, and data-driven automation for operational excellence."
        },
        {
          id: 3,
          title: "Artificial Intelligence",
          description: "Advanced AI/ML solutions using TensorFlow, PyTorch, and modern frameworks for intelligent automation, computer vision, and natural language processing."
        },
        {
          id: 4,
          title: "Custom IT Services",
          description: "End-to-end software development with modern tech stacks including React, Python, Node.js, cloud-native architectures, and DevOps practices."
        }
      ],
      technologies: [
        { name: "React", category: "Frontend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "Python", category: "Backend" },
        { name: "Django", category: "Backend" },
        { name: "Node.js", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        { name: "TensorFlow", category: "AI/ML" },
        { name: "PyTorch", category: "AI/ML" },
        { name: "AWS", category: "Cloud" },
        { name: "Docker", category: "DevOps" }
      ],
      portfolio: [
        {
          id: 1,
          title: "MedConnect - Telemedicine Platform",
          description: "Comprehensive telemedicine platform serving 50,000+ patients with real-time consultations, prescription management, and integrated EHR systems.",
          category: "Healthcare",
          technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
          image: "/placeholder.svg",
          demoUrl: "https://demo.medconnect.com",
          githubUrl: "https://github.com/anoxes/medconnect",
          features: ["Video Consultations", "E-Prescriptions", "Patient Records", "Appointment Scheduling"]
        },
        {
          id: 2,
          title: "SmartFactory Analytics",
          description: "IoT-enabled manufacturing analytics platform that reduced operational costs by 35% through predictive maintenance and real-time monitoring.",
          category: "Industry 4.0",
          technologies: ["Python", "TensorFlow", "React", "InfluxDB"],
          image: "/placeholder.svg",
          demoUrl: "https://demo.smartfactory.com",
          githubUrl: "https://github.com/anoxes/smartfactory",
          features: ["Predictive Maintenance", "Real-time Monitoring", "Quality Control", "Performance Analytics"]
        },
        {
          id: 3,
          title: "AI-Powered Fraud Detection",
          description: "Machine learning system processing millions of transactions daily with 99.8% accuracy in fraud detection for financial institutions.",
          category: "AI/ML",
          technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis"],
          image: "/placeholder.svg",
          demoUrl: "https://demo.frauddetect.com",
          githubUrl: "https://github.com/anoxes/fraud-detection",
          features: ["Real-time Processing", "Anomaly Detection", "Risk Scoring", "Compliance Reporting"]
        }
      ],
      testimonials: [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          role: "Chief Technology Officer",
          company: "MedTech Solutions Inc.",
          feedback: "Anoxes transformed our healthcare platform with cutting-edge AI integration. Their expertise in medical technology and HIPAA compliance is unmatched.",
          rating: 5
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Director of Operations",
          company: "SmartManufacturing Corp.",
          feedback: "The Industry 4.0 solutions provided by Anoxes revolutionized our manufacturing processes. Their IoT integration reduced downtime by 60%.",
          rating: 5
        }
      ],
      team: [
        {
          id: 1,
          name: "Alex Thompson",
          role: "Chief Executive Officer",
          bio: "Visionary leader with 15+ years in tech innovation, specializing in digital transformation and strategic technology partnerships.",
          image: "/placeholder.svg"
        },
        {
          id: 2,
          name: "Dr. Priya Patel",
          role: "Chief Technology Officer",
          bio: "PhD in Computer Science with expertise in AI/ML, healthcare technology, and scalable software architectures.",
          image: "/placeholder.svg"
        }
      ],
      contact: {
        address: "Silicon Valley Tech Park, 123 Innovation Drive, Suite 500, San Jose, CA 95110",
        phone: "+1 (555) 123-4567",
        email: "contact@anoxes.com",
        mapUrl: "https://maps.google.com"
      },
      blog: [
        {
          id: 1,
          title: "The Future of Healthcare Technology: AI-Driven Patient Care",
          excerpt: "Exploring how artificial intelligence is revolutionizing patient diagnosis, treatment planning, and healthcare delivery systems.",
          date: "2024-01-15",
          author: "Dr. Priya Patel"
        },
        {
          id: 2,
          title: "Industry 4.0: Smart Manufacturing in the Digital Age",
          excerpt: "How IoT, AI, and automation are transforming manufacturing processes and creating intelligent factories.",
          date: "2024-01-10",
          author: "Alex Thompson"
        }
      ]
    };
  };

  const saveContent = () => {
    if (content) {
      localStorage.setItem('anoxesContent', JSON.stringify(content));
      alert('Content saved successfully!');
    }
  };

  // Add portfolio management functions
  const addPortfolioItem = () => {
    const newItem = {
      id: Date.now(),
      title: "New Project",
      description: "Project description",
      category: "Healthcare",
      technologies: ["React"],
      image: "/placeholder.svg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      features: ["Feature 1"]
    };
    setContent(prev => ({
      ...prev,
      portfolio: [...(prev?.portfolio || []), newItem]
    }));
  };

  const updatePortfolioItem = (id, field, value) => {
    setContent(prev => ({
      ...prev,
      portfolio: (prev?.portfolio || []).map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const deletePortfolioItem = (id) => {
    setContent(prev => ({
      ...prev,
      portfolio: (prev?.portfolio || []).filter(item => item.id !== id)
    }));
  };

  const updatePortfolioTechnologies = (id, technologies) => {
    const techArray = technologies.split(',').map(tech => tech.trim());
    updatePortfolioItem(id, 'technologies', techArray);
  };

  const updatePortfolioFeatures = (id, features) => {
    const featuresArray = features.split(',').map(feature => feature.trim());
    updatePortfolioItem(id, 'features', featuresArray);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
            <label className="block mb-2 font-medium">Username</label>
            <input type="text" className="w-full p-2 border rounded mb-4" required />
            <label className="block mb-2 font-medium">Password</label>
            <input type="password" className="w-full p-2 border rounded mb-6" required />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // Show loading state while content is being loaded
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Anoxes Admin Panel</h1>
          <div className="flex space-x-4">
            <button
              onClick={saveContent}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>

          {/* Hero Tab */}
          <TabsContent value="hero" className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={content.hero?.title || ''}
                onChange={(e) => setContent(prev => ({ ...prev, hero: { ...prev.hero, title: e.target.value } }))}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subtitle</label>
              <textarea
                value={content.hero?.subtitle || ''}
                onChange={(e) => setContent(prev => ({ ...prev, hero: { ...prev.hero, subtitle: e.target.value } }))}
                className="w-full p-2 border rounded-lg h-20"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Primary Button Text</label>
                <input
                  type="text"
                  value={content.hero?.primaryButton || ''}
                  onChange={(e) => setContent(prev => ({ ...prev, hero: { ...prev.hero, primaryButton: e.target.value } }))}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Secondary Button Text</label>
                <input
                  type="text"
                  value={content.hero?.secondaryButton || ''}
                  onChange={(e) => setContent(prev => ({ ...prev, hero: { ...prev.hero, secondaryButton: e.target.value } }))}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            {(content.services || []).map((service, index) => (
              <Card key={service.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">Service #{service.id}</h3>
                  <button
                    onClick={() => {
                      setContent(prev => ({
                        ...prev,
                        services: (prev.services || []).filter((_, i) => i !== index)
                      }));
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => {
                      const newServices = [...(content.services || [])];
                      newServices[index].title = e.target.value;
                      setContent(prev => ({ ...prev, services: newServices }));
                    }}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={service.description}
                    onChange={(e) => {
                      const newServices = [...(content.services || [])];
                      newServices[index].description = e.target.value;
                      setContent(prev => ({ ...prev, services: newServices }));
                    }}
                    className="w-full p-2 border rounded-lg h-20"
                  />
                </div>
              </Card>
            ))}
            <button
              onClick={() => {
                setContent(prev => ({
                  ...prev,
                  services: [...(prev.services || []), { id: Date.now(), title: '', description: '' }]
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Service
            </button>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Portfolio Management</h2>
              <button
                onClick={addPortfolioItem}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Add Project
              </button>
            </div>
            
            <div className="grid gap-6">
              {(content.portfolio || []).map((project) => (
                <Card key={project.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">Project ID: {project.id}</h3>
                    <button
                      onClick={() => deletePortfolioItem(project.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => updatePortfolioItem(project.id, 'title', e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select
                        value={project.category}
                        onChange={(e) => updatePortfolioItem(project.id, 'category', e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      >
                        <option value="Healthcare">Healthcare</option>
                        <option value="Industry 4.0">Industry 4.0</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Custom IT">Custom IT</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => updatePortfolioItem(project.id, 'description', e.target.value)}
                        className="w-full p-2 border rounded-lg h-20"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Technologies (comma-separated)</label>
                      <input
                        type="text"
                        value={(project.technologies || []).join(', ')}
                        onChange={(e) => updatePortfolioTechnologies(project.id, e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Features (comma-separated)</label>
                      <input
                        type="text"
                        value={(project.features || []).join(', ')}
                        onChange={(e) => updatePortfolioFeatures(project.id, e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Demo URL</label>
                      <input
                        type="url"
                        value={project.demoUrl || ''}
                        onChange={(e) => updatePortfolioItem(project.id, 'demoUrl', e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">GitHub URL</label>
                      <input
                        type="url"
                        value={project.githubUrl || ''}
                        onChange={(e) => updatePortfolioItem(project.id, 'githubUrl', e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Technologies Tab */}
          <TabsContent value="technologies" className="space-y-6">
            {(content.technologies || []).map((tech, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      value={tech.name}
                      onChange={(e) => {
                        const newTech = [...(content.technologies || [])];
                        newTech[index].name = e.target.value;
                        setContent(prev => ({ ...prev, technologies: newTech }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input
                      type="text"
                      value={tech.category}
                      onChange={(e) => {
                        const newTech = [...(content.technologies || [])];
                        newTech[index].category = e.target.value;
                        setContent(prev => ({ ...prev, technologies: newTech }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setContent(prev => ({
                          ...prev,
                          technologies: (prev.technologies || []).filter((_, i) => i !== index)
                        }));
                      }}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Card>
            ))}
            <button
              onClick={() => {
                setContent(prev => ({
                  ...prev,
                  technologies: [...(prev.technologies || []), { name: '', category: '' }]
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Technology
            </button>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            {(content.testimonials || []).map((testimonial, index) => (
              <Card key={testimonial.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">Testimonial #{testimonial.id}</h3>
                  <button
                    onClick={() => {
                      setContent(prev => ({
                        ...prev,
                        testimonials: (prev.testimonials || []).filter((_, i) => i !== index)
                      }));
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      value={testimonial.name}
                      onChange={(e) => {
                        const newTestimonials = [...(content.testimonials || [])];
                        newTestimonials[index].name = e.target.value;
                        setContent(prev => ({ ...prev, testimonials: newTestimonials }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <input
                      type="text"
                      value={testimonial.role}
                      onChange={(e) => {
                        const newTestimonials = [...(content.testimonials || [])];
                        newTestimonials[index].role = e.target.value;
                        setContent(prev => ({ ...prev, testimonials: newTestimonials }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input
                      type="text"
                      value={testimonial.company}
                      onChange={(e) => {
                        const newTestimonials = [...(content.testimonials || [])];
                        newTestimonials[index].company = e.target.value;
                        setContent(prev => ({ ...prev, testimonials: newTestimonials }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={testimonial.rating}
                      onChange={(e) => {
                        const newTestimonials = [...(content.testimonials || [])];
                        newTestimonials[index].rating = Number(e.target.value);
                        setContent(prev => ({ ...prev, testimonials: newTestimonials }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Feedback</label>
                    <textarea
                      value={testimonial.feedback}
                      onChange={(e) => {
                        const newTestimonials = [...(content.testimonials || [])];
                        newTestimonials[index].feedback = e.target.value;
                        setContent(prev => ({ ...prev, testimonials: newTestimonials }));
                      }}
                      className="w-full p-2 border rounded-lg h-20"
                    />
                  </div>
                </div>
              </Card>
            ))}
            <button
              onClick={() => {
                setContent(prev => ({
                  ...prev,
                  testimonials: [...(prev.testimonials || []), { id: Date.now(), name: '', role: '', company: '', feedback: '', rating: 5 }]
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Testimonial
            </button>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            {(content.team || []).map((member, index) => (
              <Card key={member.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">Team Member #{member.id}</h3>
                  <button
                    onClick={() => {
                      setContent(prev => ({
                        ...prev,
                        team: (prev.team || []).filter((_, i) => i !== index)
                      }));
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => {
                        const newTeam = [...(content.team || [])];
                        newTeam[index].name = e.target.value;
                        setContent(prev => ({ ...prev, team: newTeam }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => {
                        const newTeam = [...(content.team || [])];
                        newTeam[index].role = e.target.value;
                        setContent(prev => ({ ...prev, team: newTeam }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Bio</label>
                    <textarea
                      value={member.bio}
                      onChange={(e) => {
                        const newTeam = [...(content.team || [])];
                        newTeam[index].bio = e.target.value;
                        setContent(prev => ({ ...prev, team: newTeam }));
                      }}
                      className="w-full p-2 border rounded-lg h-20"
                    />
                  </div>
                </div>
              </Card>
            ))}
            <button
              onClick={() => {
                setContent(prev => ({
                  ...prev,
                  team: [...(prev.team || []), { id: Date.now(), name: '', role: '', bio: '', image: '/placeholder.svg' }]
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Team Member
            </button>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-6">
            {(content.blog || []).map((post, index) => (
              <Card key={post.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">Blog Post #{post.id}</h3>
                  <button
                    onClick={() => {
                      setContent(prev => ({
                        ...prev,
                        blog: (prev.blog || []).filter((_, i) => i !== index)
                      }));
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={post.title}
                      onChange={(e) => {
                        const newBlog = [...(content.blog || [])];
                        newBlog[index].title = e.target.value;
                        setContent(prev => ({ ...prev, blog: newBlog }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Author</label>
                    <input
                      type="text"
                      value={post.author}
                      onChange={(e) => {
                        const newBlog = [...(content.blog || [])];
                        newBlog[index].author = e.target.value;
                        setContent(prev => ({ ...prev, blog: newBlog }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      value={post.date}
                      onChange={(e) => {
                        const newBlog = [...(content.blog || [])];
                        newBlog[index].date = e.target.value;
                        setContent(prev => ({ ...prev, blog: newBlog }));
                      }}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Excerpt</label>
                    <textarea
                      value={post.excerpt}
                      onChange={(e) => {
                        const newBlog = [...(content.blog || [])];
                        newBlog[index].excerpt = e.target.value;
                        setContent(prev => ({ ...prev, blog: newBlog }));
                      }}
                      className="w-full p-2 border rounded-lg h-20"
                    />
                  </div>
                </div>
              </Card>
            ))}
            <button
              onClick={() => {
                setContent(prev => ({
                  ...prev,
                  blog: [...(prev.blog || []), { id: Date.now(), title: '', excerpt: '', date: '', author: '' }]
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Blog Post
            </button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
