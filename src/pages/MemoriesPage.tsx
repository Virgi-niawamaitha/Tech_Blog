import React, { useEffect, useRef } from 'react';
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Card } from '@/components/ui/card';

const resources = [
  {
    title: "Getting Started",
    year: "The Foundation",
    description: "Every developer starts somewhere. Begin with HTML, CSS, and JavaScript fundamentals. Build a solid foundation before moving to frameworks.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  },
  {
    title: "Modern JavaScript",
    year: "Core Skills",
    description: "Master ES6+ features, async/await, promises, and modern JavaScript patterns. These concepts are essential for React development.",
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop"
  },
  {
    title: "React Fundamentals",
    year: "Framework Mastery",
    description: "Learn components, props, state, hooks, and the component lifecycle. React's declarative approach makes building UIs intuitive.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
  },
  {
    title: "TypeScript Benefits",
    year: "Type Safety",
    description: "TypeScript adds static typing to JavaScript, catching errors early and improving code quality. It's becoming industry standard.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
  },
  {
    title: "Responsive Design",
    year: "Mobile-First",
    description: "With Tailwind CSS and modern layout techniques, create interfaces that work beautifully on all screen sizes.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    title: "Testing Practices",
    year: "Quality Assurance",
    description: "Write unit tests, integration tests, and end-to-end tests. Testing ensures your code works as expected and prevents regressions.",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop"
  },
  {
    title: "Version Control",
    year: "Git Mastery",
    description: "Git is essential for collaboration and tracking changes. Learn branching, merging, and working with remote repositories.",
    imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop"
  },
  {
    title: "API Integration",
    year: "Backend Communication",
    description: "Learn to fetch data from APIs, handle async operations, and manage state. REST and GraphQL are common patterns.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
  },
  {
    title: "Performance Optimization",
    year: "Speed Matters",
    description: "Lazy loading, code splitting, and bundle optimization ensure your app loads quickly. Performance impacts user experience.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    title: "Deployment",
    year: "Going Live",
    description: "Deploy your applications to platforms like Vercel, Netlify, or AWS. Learn CI/CD pipelines for automated deployments.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  },
  {
    title: "Continuous Learning",
    year: "Never Stop Growing",
    description: "Technology evolves rapidly. Stay curious, build projects, contribute to open source, and keep learning new tools and techniques.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
];

const TechResourcesPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const memoryItems = document.querySelectorAll('.memory-item');
    memoryItems.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      if (observerRef.current) {
        memoryItems.forEach((item) => {
          observerRef.current?.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 relative">
        <RoseDecoration position="top-left" size="md" />
        <RoseDecoration position="bottom-right" size="md" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-600 text-center mb-12">Learning Resources</h2>
          
          <div className="space-y-0">
            {resources.map((resource, index) => (
              <div key={index} className="memory-item opacity-0" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="ml-4 md:ml-8">
                  <h3 className="text-xl font-serif text-primary-600 mb-1">{resource.title}</h3>
                  <div className="text-sm text-primary-400 mb-2">{resource.year}</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className={`polaroid transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                      <div className="memory-photo w-full h-[300px] overflow-hidden">
                        <img 
                          src={resource.imageUrl} 
                          alt={resource.title} 
                          className="w-full h-full object-cover bg-white" 
                        />
                      </div>
                      <div className="polaroid-caption">
                        {resource.title} - {resource.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <p className="text-foreground/80">{resource.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="memory-item opacity-0 text-center py-12">
              <div className="ml-4">
                <Card className="p-6 bg-white/90 shadow-lg border border-primary-200">
                  <p className="font-serif text-lg text-primary-700">
                    "The journey of learning never ends. Every project is an opportunity to grow and improve."
                  </p>
                  
                  <div className="mt-4 text-sm text-primary-500">
                    Keep building, keep learning! 🚀
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TechResourcesPage;
