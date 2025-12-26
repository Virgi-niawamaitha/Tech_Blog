
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="text-center px-4">
        <div className="mb-6">
          <Heart className="h-20 w-20 text-primary-300 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4 font-serif text-primary-600">Page Not Found</h1>
        <p className="text-xl text-foreground/70 mb-8">
          Let's go back to the storybook journey.
        </p>
        <Button asChild className="bg-primary-500 hover:bg-primary-600">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
