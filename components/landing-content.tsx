"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Yash",
    avatar: "R",
    title: "Software Developer",
    description: "Absolutely mind-blowing! The epitome of innovation!",
  },
  {
    name: "Priya",
    avatar: "P",
    title: "Graphic Designer",
    description: "My daily dose of inspiration - crafting wonders!",
  },
  {
    name: "Vikram",
    avatar: "V",
    title: "Entrepreneur",
    description:
      "A game-changer for my business. Can't imagine life without it now!",
  },
  {
    name: "Neha",
    avatar: "N",
    title: "Financial Analyst",
    description:
      "Unmatched excellence - worth every penny of the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-white font-extrabold mb-10">
        Hear What Our Users Have to Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>

              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
