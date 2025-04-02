
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Lightbulb, Users, BarChart4, HeartHandshake, House } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description: "Tailored curriculum designed to address individual student needs and learning styles."
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Focus",
    description: "Daily problem sets that build critical thinking skills and mathematical intuition."
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description: "Limited to 6-8 students per batch ensuring personalized attention and interaction."
  },
  {
    icon: BarChart4,
    title: "Regular Assessments",
    description: "Weekly quizzes and monthly tests to track progress and identify improvement areas."
  },
  {
    icon: CheckCircle2,
    title: "Extra Support Classes",
    description: "Complimentary additional sessions for students who need extra help with difficult topics."
  },
  {
    icon: House,
    title: "Home Tuitions",
    description: "Home tuitions are also available."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Teaching Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden card-hover border border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
