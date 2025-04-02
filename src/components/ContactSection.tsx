
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+91 9863113509";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20your%20tutoring%20services", "_blank");
  };

  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com/tutorportfolio", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com/in/tutorportfolio", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/tutorportfolio", label: "Instagram" }
  ];

  return (
    <section id="contact" className="bg-primary/5">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ready to Transform Your Learning Journey?</h3>
            <p className="text-muted-foreground">
              Whether you have questions about my teaching approach, want to discuss your specific learning needs, or are ready to enroll in one of my batches, I'm here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                className="flex items-center gap-2 px-6 py-6 text-lg bg-primary hover:bg-primary/90"
                onClick={handleCall}
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white"
                onClick={handleWhatsApp}
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect On Social Media</h3>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-colors"
                    >
                      <social.icon className="h-6 w-6 text-primary" />
                      <span>Follow on {social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
