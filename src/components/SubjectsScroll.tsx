
import React from 'react';
import { Badge } from "@/components/ui/badge";

const subjects = [
  "Physics", "Mathematics", "Chemistry", 
  "Arts", "Statistics", "Biology", "English", "Olympiads"
];

// Duplicate array to create continuous scrolling effect
const scrollSubjects = [...subjects, ...subjects];

const SubjectsScroll = () => {
  return (
    <section id="subjects" className="py-12 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Subjects I Teach</h2>
        
        <div className="overflow-hidden relative mt-8">
          <div className="animate-infinite-scroll inline-flex">
            {scrollSubjects.map((subject, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="m-2 px-4 py-2 text-lg bg-white dark:bg-gray-800 shadow-md hover:bg-primary hover:text-white dark:text-white transition-colors duration-300"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsScroll;
