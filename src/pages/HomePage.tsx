
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RoseDecoration from '@/components/RoseDecoration';
import PageTransition from '@/components/PageTransition';
import { BookOpen, Code, Lightbulb, Rocket } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "My Journey Into Web Development",
    excerpt: "How I transitioned from curiosity to coding proficiency, learning HTML, CSS, and JavaScript along the way.",
    icon: <Rocket className="w-6 h-6 text-primary-600" />,
    date: "December 2024"
  },
  {
    id: 2,
    title: "Why Software Testing Matters",
    excerpt: "Understanding quality assurance, testing methodologies, and why they're crucial in modern software development.",
    icon: <Code className="w-6 h-6 text-primary-600" />,
    date: "November 2024"
  },
  {
    id: 3,
    title: "Overcoming Challenges as a Beginner Developer",
    excerpt: "Common obstacles faced by new developers and practical strategies to overcome them and grow your skills.",
    icon: <Lightbulb className="w-6 h-6 text-primary-600" />,
    date: "October 2024"
  },
  {
    id: 4,
    title: "Building Interactive User Interfaces",
    excerpt: "Exploring React, component-based architecture, and creating engaging user experiences with modern frameworks.",
    icon: <BookOpen className="w-6 h-6 text-primary-600" />,
    date: "September 2024"
  }
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 relative overflow-hidden">
        {/* Rose decorations */}
        <RoseDecoration position="top-left" size="lg" />
        <RoseDecoration position="bottom-right" size="lg" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-600 mb-6 leading-tight">
              Tech Blog
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              A blog about web development, coding journeys, and software engineering insights.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary-300"
                onClick={() => navigate('/blog')}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary-50 rounded-lg">
                      {post.icon}
                    </div>
                    <span className="text-sm text-foreground/60">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-serif">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  <Button 
                    variant="link" 
                    className="mt-4 p-0 h-auto text-primary-600 font-semibold"
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/blog')} 
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-6 text-lg rounded-full"
            >
              Read All Posts
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
