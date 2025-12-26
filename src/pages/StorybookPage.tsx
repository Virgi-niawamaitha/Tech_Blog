
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RoseDecoration from '@/components/RoseDecoration';
import PageTransition from '@/components/PageTransition';

const blogPosts = [
  {
    title: "My Journey Into Web Development",
    content: (
      <>
        <p className="mb-4">Starting my web development journey was both exciting and overwhelming. Coming from a non-technical background, I wasn't sure where to begin.</p>
        <p className="mb-4">I started with the basics: HTML and CSS. Learning how to structure a webpage and style it gave me my first taste of creating something visual and interactive.</p>
        <p className="mb-4">JavaScript came next, and with it, the real power of interactivity. From simple animations to complex user interactions, JavaScript opened up endless possibilities.</p>
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
          <h4 className="font-serif text-primary-700 mb-2">Key Learning Points</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Start with fundamentals - HTML, CSS, JavaScript</li>
            <li>Build small projects to practice</li>
            <li>Don't be afraid to make mistakes</li>
            <li>Join developer communities for support</li>
          </ul>
        </div>
        <p>Today, I'm comfortable building responsive websites, working with modern frameworks, and continually learning new technologies.</p>
      </>
    )
  },
  {
    title: "Why Software Testing Matters",
    content: (
      <>
        <p className="mb-4">Software testing is often overlooked by beginners, but it's one of the most critical aspects of software development. Quality assurance ensures that applications work as intended.</p>
        <p className="mb-4">Testing isn't just about finding bugs—it's about preventing them. Good testing practices catch issues before they reach production, saving time and resources.</p>
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
          <h4 className="font-serif text-primary-700 mb-2">Types of Testing</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Unit Testing - Testing individual components</li>
            <li>Integration Testing - Testing how components work together</li>
            <li>End-to-End Testing - Testing complete user workflows</li>
            <li>User Acceptance Testing - Validating user requirements</li>
          </ul>
        </div>
        <p className="mb-4">Quality assurance goes beyond code—it encompasses user experience, performance, security, and accessibility.</p>
        <p>Learning to write tests made me a better developer. It forced me to think about edge cases, write cleaner code, and consider the user's perspective.</p>
      </>
    )
  },
  {
    title: "Overcoming Challenges as a Beginner Developer",
    content: (
      <>
        <p className="mb-4">Every developer faces challenges, especially when starting out. The learning curve can feel steep, and imposter syndrome is real.</p>
        <p className="mb-4">One of my biggest challenges was debugging. Spending hours on a single error that turned out to be a typo taught me patience and the importance of attention to detail.</p>
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
          <h4 className="font-serif text-primary-700 mb-2">Common Beginner Challenges</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Understanding error messages</li>
            <li>Choosing the right technologies to learn</li>
            <li>Managing scope creep in personal projects</li>
            <li>Staying motivated during difficult concepts</li>
          </ul>
        </div>
        <p className="mb-4">The key is persistence. Every error message is a learning opportunity. Every bug fixed is a skill gained.</p>
        <p>Remember: all experienced developers were once beginners too. The difference is they kept going.</p>
      </>
    )
  },
  {
    title: "Building Interactive User Interfaces",
    content: (
      <>
        <p className="mb-4">Modern web development is all about creating engaging, interactive user experiences. Frameworks like React have revolutionized how we build interfaces.</p>
        <p className="mb-4">Component-based architecture allows us to break down complex UIs into reusable, manageable pieces. This makes code more maintainable and scalable.</p>
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
          <h4 className="font-serif text-primary-700 mb-2">Key UI/UX Principles</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Responsive design for all devices</li>
            <li>Accessibility for all users</li>
            <li>Performance optimization</li>
            <li>Intuitive navigation and interactions</li>
          </ul>
        </div>
        <p className="mb-4">Adding animations and transitions can significantly enhance user experience, making interfaces feel smooth and professional.</p>
        <p className="mb-4">This very blog platform demonstrates these principles—responsive layout, smooth transitions, and an intuitive reading experience.</p>
        <p><em>Tip: Always test your interfaces on real devices and gather feedback from actual users.</em></p>
      </>
    )
  }
];

const BlogPage: React.FC = () => {
  const [currentPost, setCurrentPost] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextPost = () => {
    if (currentPost < blogPosts.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPost(prev => prev + 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  const goToPreviousPost = () => {
    if (currentPost > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPost(prev => prev - 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextPost();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousPost();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPost, isAnimating]);

  return (
    <PageTransition>
      <div className="py-12 px-4 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center relative">
        <RoseDecoration position="top-right" size="md" />
        <RoseDecoration position="bottom-left" size="md" />
        
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-600 text-center mb-8">Blog Posts</h2>
          
          <div className="relative">
            {/* Blog post container */}
            <div 
              className={`storybook-page ${isAnimating ? 'page-turn' : ''}`}
            >
              <div className="absolute top-4 right-4 text-primary-300 text-sm font-serif">
                Post {currentPost + 1} of {blogPosts.length}
              </div>
              
              <h3 className="text-2xl font-serif text-primary-600 mb-6 max-w-lg">
                {blogPosts[currentPost].title}
              </h3>
              
              <div className="prose text-foreground/80 max-w-none">
                {blogPosts[currentPost].content}
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={goToPreviousPost}
                disabled={currentPost === 0 || isAnimating}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={goToNextPost}
                disabled={currentPost === blogPosts.length - 1 || isAnimating}
                variant="outline"
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPage;
