
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from 'lucide-react';

const successStories = [
  {
    id: 1,
    name: "Vaibhav Dutta",
    image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
    percentage: 98,
    review: "Sir transformed my approach to calculus. His teaching methods made complex concepts intuitive, and I went from struggling to earning an A+ in my AP exam."
  },
  {
    id: 2,
    name: "Rinku Majumder",
    image: "https://i.pinimg.com/736x/8b/32/33/8b3233145fed5e5024ad481ea36a7d3d.jpg",
    percentage: 95,
    review: "The problem-solving techniques I learned from Sir were invaluable. The daily practice problems and personalized feedback helped me excel in my math competitions."
  },
  {
    id: 3,
    name: "Sunil Choudhury",
    image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
    percentage: 97,
    review: "I struggled with math anxiety before joining Sir's classes. His patient approach and clear explanations built my confidence. I'm now pursuing a degree in engineering."
  },
  {
    id: 4,
    name: "Varun Chakraborty",
    image: "https://i.pinimg.com/736x/8b/32/33/8b3233145fed5e5024ad481ea36a7d3d.jpg",
    percentage: 99,
    review: "Sir's teaching goes beyond just solving problems. He instills a deep understanding of mathematical principles that has helped me in all my STEM courses."
  },
  {
    id: 5,
    name: "Manish Sutradhar",
    image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
    percentage: 96,
    review: "The extra support classes made all the difference. Whenever I struggled with a concept, Sir would provide additional examples and practice until I fully understood."
  }
];

// Duplicate for continuous scrolling effect
const scrollStories = [...successStories, ...successStories];

const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (scrollRef.current && !isHovered) {
      const scrollAmount = 1;
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0;
          } else {
            scrollRef.current.scrollLeft += scrollAmount;
          }
        }
      }, 20);
      
      return () => clearInterval(scrollInterval);
    }
  }, [isHovered]);
  
  return (
    <section id="success" className="dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-heading">Success Stories</h2>
        
        <div 
          ref={scrollRef}
          className="mt-8 flex overflow-x-auto scrollbar-hide py-4" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 px-4">
            {scrollStories.map((story, index) => (
              <Card key={index} className="flex-shrink-0 w-72 shadow-md card-hover">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">{story.name}</h3>
                    <div className="flex items-center">
                      <div className="text-accent font-semibold">{story.percentage}%</div>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{story.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
