"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { bodyType } from "@/app/atom/modalatom";

const Page = () => {
//   const [responseData, setResponseData] = useState(null);
  const [bodytype, setBodyType] = useRecoilState(bodyType);
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Get Prediction
      </button>

      {messages && (
        <div className="mt-4">
          <div className="flex flex-col reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="p-8 w-full flex items-start gap-x-8 rounded-lg"
              >
                <div className="text-sm">
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
