
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from 'lucide-react';

const batches = [
  {
    id: 1,
    name: "Advanced Mathematics",
    board: "CBSE",
    days: ["Monday", "Wednesday", "Friday"],
    startTime: "4:00 PM",
    endTime: "5:30 PM",
    level: "Class 11 & 12"
  },
  {
    id: 2,
    name: "Science(Phy, Chem, Bio)",
    board: "ICSE",
    days: ["Tuesday", "Thursday"],
    startTime: "5:45 PM",
    endTime: "7:15 PM",
    level: "Class 9 & 10"
  },
  {
    id: 3,
    name: "Applied Physics",
    board: "CBSE",
    days: ["Monday", "Thursday"],
    startTime: "6:30 PM",
    endTime: "8:00 PM",
    level: "Class 11 & 12"
  },
  {
    id: 4,
    name: "Elementary Mathematics",
    board: "Vidyajyoti",
    days: ["Wednesday", "Friday"],
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    level: "Class:6 to Class:8"
  }
];

const BatchesSection = () => {
  return (
    <section id="batches" className="dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-heading">Batch Timings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {batches.map(batch => (
            <Card key={batch.id} className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{batch.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{batch.board}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{batch.days.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{batch.startTime} - {batch.endTime}</span>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {batch.level}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatchesSection;
