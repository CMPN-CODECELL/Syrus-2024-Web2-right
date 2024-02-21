"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { bodyType } from "@/app/atom/modalatom";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Loader";
const Page = () => {
  const [bodytype, setBodyType] = useRecoilState(bodyType);
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "/api/diet",
        {
          messages: bodytype.content,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setMessages((current) => [...current, response.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-4xl text-center text-green-500 font-bold mb-8">
        Get Your Customized Diet Plan
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28"
        onClick={handleSubmit}
      >
        Get Plan
      </button>
      {isLoading && (
        <div className="p-8 rounded-lg items-center justify-center bg-muted">
          <Loader />
        </div>
      )}
      {messages && (
        <div className="mt-4  ml-[250px] w-[2000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="p-4 text-left">
                  {/* Split content into separate lines */}
                  {message.content.split("\n").map((line, index) => (
                    <p key={index} className="mb-2">
                      {/* Render each line as a bullet point */}
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
