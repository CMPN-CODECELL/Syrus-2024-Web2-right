"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypeWriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import LandingContent from "./LandingContent";
const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white py-36 font-bold text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  space-y-5 font-extrabold">
        <h1>Campus Health and Awareness Platform </h1>
        {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypeWriterComponent
            options={{
              strings: ["YouTube Summary", "Content Analysis", "Q&A Summary"],
              autoStart: true,
              loop: true,
            }}
          />
        </div> */}
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Stay Fit, Stay Healthy
      </div>

      <LandingContent />
    </div>
  );
};

export default LandingHero;
