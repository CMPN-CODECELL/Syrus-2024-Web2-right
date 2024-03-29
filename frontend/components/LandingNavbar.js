"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-14 mr-1">
          <Image fill src={"/logo.png"} alt="logo" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          HealthHive
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "dashboard" : "/sign-in"}>
          <Button variant={"premium"} className="rounded-full w-28">
            Login
          </Button>
        </Link>
        <Link href={isSignedIn ? "dashboard" : "/sign-up"}>
          <Button variant={"premium"} className="rounded-full w-28">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
