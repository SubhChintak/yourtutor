
import React from 'react';
import { Badge } from "@/components/ui/badge";

const tutor = {
  name: "Name Surname",
  image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
  qualification: "Not your another random Math Tutor",
  experience: "3+ years of teaching experience",
  bio: "I'm passionate about making complex subjects accessible to students of all levels. My teaching philosophy centers around building a strong conceptual foundation while developing practical problem-solving skills. Having taught at both university level and private tutoring settings, I understand the diverse needs of learners and adapt my teaching methods accordingly.",
  specialties: ["ABC Cracked", "XYZ Qualified", "MSc in Mathematics", "BEd", "BSc in Mathematics"]
};

const AboutSection = () => {
  return (
    <section id="about" className="pt-28 pb-16">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src={tutor.image} 
                  alt={tutor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white py-2 px-4 rounded-lg shadow-md">
                {tutor.experience}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{tutor.name}</h1>
            <p className="text-lg text-muted-foreground">{tutor.qualification}</p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {tutor.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="bg-secondary text-foreground">
                  {specialty}
                </Badge>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-muted-foreground">{tutor.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
