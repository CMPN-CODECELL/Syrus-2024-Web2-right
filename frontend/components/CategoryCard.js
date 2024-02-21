"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import CategoryHeading from "./CategoryHeading";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

interface CategoryCardProps {
  id: number;
  title: string;
  image: string;
}

const CategoryCard = ({ id, title, image }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="relative mb-4 cursor-pointer transition duration-500 ">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-fit text-center border-gray-200 border-[1px] hover:shadow-custom transition duration-500 ${
            isHovered === true ? "scale-[1.045]" : ""
          } `}
        >
          <div className="w-[15.5em] h-[18.865em] relative ">
            <Image
              fill
              alt="Product Image"
              className={`absolute transition-transform z-0 `}
              src={image}
            />
            <div
              className={`w-full absolute h-16 flex items-center bottom-0 z-10 bg-black/70`}
            >
              <div className="flex items-center justify-between mx-4 w-full">
                <p
                  className={`text-sm font-normal 
                  ${isHovered ? "text-white" : "text-white/80 "}`}
                >
                  {title}
                </p>
                <ArrowSmRightIcon
                  className={`w-7 h-7 rounded-full transition duration-500  ${
                    isHovered ? "bg-white text-black" : "text-white/80"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
