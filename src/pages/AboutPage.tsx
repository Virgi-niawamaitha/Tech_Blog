
import React from 'react';
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 relative">
        <RoseDecoration position="top-left" size="md" />
        <RoseDecoration position="bottom-right" size="md" />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-600 mb-6 text-center">
            About This Project
          </h1>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-10 rounded-r-lg">
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              ⚠️ Demo / Learning Project
            </h3>
            <p className="text-amber-800 leading-relaxed">
              This is a <strong>student portfolio project</strong> created for learning and demonstration purposes. 
              All content, including blog posts, images, and user data, is <strong>placeholder/demo content only</strong>. 
              This project does not contain any real personal information.
            </p>
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              This Interactive Blog Platform is a demonstration of modern web development practices, 
              showcasing skills in front-end development, UI/UX design, and software engineering principles.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              The project was built as part of a computer science student's journey to learn web technologies 
              and create a professional portfolio piece.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-primary-600 mb-6">Technical Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary-600" />
                  Modern Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>React 18 with TypeScript</li>
                  <li>Vite for fast builds</li>
                  <li>React Router for navigation</li>
                  <li>Tailwind CSS for styling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary-600" />
                  UI Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Radix UI for accessibility</li>
                  <li>Custom animations</li>
                  <li>Responsive design</li>
                  <li>Smooth page transitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-600" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Optimized bundle size</li>
                  <li>Lazy loading</li>
                  <li>Code splitting</li>
                  <li>Fast page loads</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Clean code architecture</li>
                  <li>Component reusability</li>
                  <li>TypeScript for type safety</li>
                  <li>Semantic HTML</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg border border-primary-200">
            <h2 className="text-2xl font-serif text-primary-600 mb-4">Learning Goals</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This project was created to demonstrate proficiency in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
              <li>Building interactive, responsive web applications</li>
              <li>Implementing modern React patterns and hooks</li>
              <li>Creating engaging user experiences with animations</li>
              <li>Writing clean, maintainable TypeScript code</li>
              <li>Understanding software testing and quality assurance principles</li>
              <li>Deploying web applications to production</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
