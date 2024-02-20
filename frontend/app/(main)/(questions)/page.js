"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Headphones,
  BarChart,
  ActivitySquare,
  Music,
  VideoIcon,
  FileSliders,
  Search,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "How are you Feeling",
    icon: Headphones,
    desc: "Get Up with your mental Health and Stay Happy and stay calm",
    color: "text-[#03A9F4]",
    bgColor: "text-white",
    href: "/community",
  },
  {
    label: "Personalized Health Assessment",
    icon: ActivitySquare,
    desc: "Discover your body type (Prakruti) with our Ayurvedic assessment and receive customized fitness plans and diet recommendations.",
    color: "text-[#4CAF50]",
    bgColor: "text-white",
    href: "/questions",
  },
  {
    label: "Diet Recommendations",
    icon: FileSliders,
    desc: "Get personalized diet plans based on your body type, fitness goals, and dietary preferences, powered by machine learning.",
    color: "text-[#FFEB3B]",
    bgColor: "text-white",
    href: "/",
  },
  {
    label: "Community Forums and Leaderboards",
    icon: BarChart,
    desc: "Connect with others, share tips, and support each other. Earn badges and climb leaderboards based on your engagement and achievements.",
    color: "text-[#03A9F4]",
    bgColor: "text-white",
    href: "/community",
  },
  {
    label: "Customer Support",
    icon: Headphones,
    desc: "Instant tech support via chatbot, ensuring a smooth learning experience.",
    color: "text-[#db4918]",
    bgColor: "text-white",
    href: "/",
  },
];
export default function DashBoardPage() {
  const router = useRouter();
  const auth = useAuth();
  console.log(auth);
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="mb-8 space-y-4">
        <div className="text-center mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {/* <span className="text-[#333333]">Explore the Power of</span> */}
            <span className="text-[#4CAF50]">
              Elevate Your Wellness Journey
            </span>
          </h1>
        </div>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Embark on a personalized well-being journey, blending ancient wisdom
          with cutting-edge technology for a healthier, balanced you.
        </p>
      </div>

      <div className="space-y-4 flex flex-col items-center">
        {tools.map((tool) => (
          <Card
            onClick={() => {
              router.push(`${tool.href}`);
            }}
            key={tool.href}
            className="p-4 border-black/5 flex items-center w-full md:w-[55rem] justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="">
                <div className="font-semibold inline">{tool.label}</div> -
                <p className="text-gray-400 font-light text-sm md:text-sm inline pl-1">
                  {tool.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
