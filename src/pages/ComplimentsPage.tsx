
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Lightbulb } from 'lucide-react';

const developerTips = [
  "Break down complex problems into smaller, manageable pieces. Solve one piece at a time.",
  "Write clean, readable code. Your future self will thank you for good variable names and comments.",
  "Test your code early and often. Catching bugs early saves time and headaches later.",
  "Don't be afraid to ask for help. Even experienced developers use Stack Overflow and documentation.",
  "Practice regularly. Build small projects to reinforce what you've learned.",
  "Learn to debug effectively. Understanding error messages is a crucial skill.",
  "Version control is your friend. Commit often with meaningful messages.",
  "Keep learning. Technology evolves quickly, and staying current is important.",
  "Understand the fundamentals before jumping to frameworks. Basics matter.",
  "Take breaks. Sometimes stepping away helps you see solutions more clearly.",
  "Code reviews are learning opportunities. Give and receive feedback gracefully.",
  "Performance matters, but don't optimize prematurely. Make it work, then make it fast.",
  "Accessibility isn't optional. Build interfaces that everyone can use.",
  "Document your code and projects. Good documentation helps collaborators and future maintainers.",
  "Stay curious. Explore new technologies, but master the tools you already use.",
  "Imposter syndrome is real, but remember: everyone was a beginner once.",
  "Responsive design is essential. Test on multiple devices and screen sizes.",
  "Security should be considered from the start, not added as an afterthought.",
  "Collaborate with others. Pair programming and code reviews improve everyone's skills.",
  "Celebrate small wins. Every bug fixed and feature completed is progress."
];

const DailyTipsPage: React.FC = () => {
  const [currentTip, setCurrentTip] = useState<string>("");
  const [usedTips, setUsedTips] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomTip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If all tips have been used, reset the used list
    if (usedTips.length === developerTips.length) {
      setUsedTips([currentTip]);
    }
    
    // Get tips that haven't been used yet
    const availableTips = developerTips.filter(
      tip => !usedTips.includes(tip)
    );
    
    // Select a random tip from available ones
    const randomIndex = Math.floor(Math.random() * availableTips.length);
    const newTip = availableTips[randomIndex];
    
    // Animate out
    setTimeout(() => {
      setCurrentTip("");
      
      // Animate in new tip after a brief pause
      setTimeout(() => {
        setCurrentTip(newTip);
        setUsedTips(prev => [...prev, newTip]);
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  // Set initial tip
  useEffect(() => {
    if (!currentTip && developerTips.length > 0) {
      const initialTip = developerTips[Math.floor(Math.random() * developerTips.length)];
      setCurrentTip(initialTip);
      setUsedTips([initialTip]);
    }
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 flex flex-col items-center justify-center relative">
        <RoseDecoration position="top-right" size="md" />
        <RoseDecoration position="bottom-left" size="md" />
        
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-600 mb-12">Daily Developer Tips</h2>
          
          <div className="relative mb-10">
            <div 
              className={`compliment-card transition-all duration-500 ease-in-out min-h-[200px] flex items-center justify-center ${
                currentTip ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="absolute -top-3 -right-3">
                <Lightbulb className="h-8 w-8 fill-amber-200 stroke-amber-400" />
              </div>
              
              <p className="text-xl md:text-2xl font-serif text-primary-700 leading-relaxed">
                {currentTip}
              </p>
            </div>
          </div>
          
          <Button
            onClick={getRandomTip}
            disabled={isAnimating}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Lightbulb className="h-5 w-5 mr-2 fill-white" />
            <span>Get Another Tip</span>
          </Button>
          
          <p className="mt-6 text-sm text-foreground/60 max-w-md mx-auto">
            Practical advice and tips to help you grow as a developer. Come back daily for inspiration!
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default DailyTipsPage;
