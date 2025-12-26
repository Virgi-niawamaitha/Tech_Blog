
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm relative z-10">
      <Link to="/" className="flex items-center gap-2 text-primary-600 font-serif font-semibold text-xl">
        <BookOpen className="h-5 w-5 stroke-primary-500" />
        <span>Tech Blog</span>
      </Link>
      
      <nav className="flex gap-6">
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost" className="font-medium text-foreground/80 hover:text-primary">
          <Link to="/blog">Blog Posts</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
