
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import RoseDecoration from '@/components/RoseDecoration';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a demo - just show a success message
    toast({
      title: "Demo Form Submission",
      description: "This is a non-functional demo form. No data is actually sent.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-80px)] py-12 px-4 relative">
        <RoseDecoration position="top-left" size="lg" />
        <RoseDecoration position="bottom-right" size="lg" />
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-600 mb-6">
              Get In Touch
            </h2>
            
            <p className="text-xl text-primary-700">
              Have questions or feedback? Feel free to reach out!
            </p>
            
            <div className="mt-4 inline-block bg-amber-50 border border-amber-300 rounded-lg px-4 py-2">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> This is a demo contact form. Submissions are not processed.
              </p>
            </div>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary-600">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-6"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message (Demo)
                </Button>
              </form>

              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <h4 className="font-semibold text-primary-700 mb-2">Connect With Me</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>📧 Email: demo@example.com</li>
                  <li>💼 LinkedIn: /in/demo-profile</li>
                  <li>🐙 GitHub: /demo-username</li>
                  <li>🌐 Portfolio: demo-portfolio.com</li>
                </ul>
                <p className="mt-3 text-xs text-foreground/60 italic">
                  * All contact information above is placeholder data for demonstration purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button 
              onClick={() => navigate('/')} 
              variant="outline"
              className="px-6"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
