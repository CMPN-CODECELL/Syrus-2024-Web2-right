"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Headphones,
  BarChart,
  ActivitySquare,
  Music,
  NotepadText,
  FileSliders,
  Search,
  SettingsIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routes = [
  {
    label: "How are you Feeling",
    icon: Headphones,
    desc: "Get Up with your mental Health and Stay Happy and stay calm",
    color: "text-[#03A9F4]",
    bgColor: "text-white",
    href: "/mental-health",
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
    href: "/questions",
  },
  {
    label: "Community Forums ",
    icon: BarChart,
    desc: "Connect with others, share tips, and support each other.",
    color: "text-[#03A9F4]",
    bgColor: "text-white",
    href: "/community",
  },
  {
    label: "Book an Appointment",
    icon: Headphones,
    desc: "Book an appointment with experts.Connect",
    color: "text-[#db4918]",
    bgColor: "text-white",
    href: "/booking",
  },
  {
    label: "View your appointments",
    icon: NotepadText,
    desc: "Instant tech support via chatbot, ensuring a smooth learning experience.",
    color: "text-[#db49f8]",
    bgColor: "text-white",
    href: "/viewappointments",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            HealthHive{" "}
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full cursor-pointer justify-start font-medium hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/30"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-6 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
