"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-extrabold">
        <h1>Unleash Your Imagination with AI</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Conversational Chatbots.",
                "Artistic Photo Generation.",
                "Compelling Blog Articles.",
                "Video Creations.",
                "Music Generation.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 1,
            }}
          />
        </div>
      </div>
      <div className=" text-xs md:text-xl font-light text-zinc-400">
        Elevate Your Creativity: Jarvis AI - Where Magic Meets Innovation.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Your AI Adventure for Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No Credit Card? No Problem.
      </div>
    </div>
  );
};
