"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { bodyType } from "@/app/atom/modalatom";

const Page = () => {
  const [responseData, setResponseData] = useState(null);
  const [bodytype, setBodyType] = useRecoilState(bodyType);
  console.log(bodytype.content);

  const handleClick = () => {
    axios
      .post("http://localhost:5000/predict", {
        input_data: {
          Calories: 1500,
          FatContent: 60,
          SaturatedFatContent: 10,
          CholesterolContent: 250,
          SodiumContent: 2000,
          CarbohydrateContent: 200,
          FiberContent: 30,
          SugarContent: 20,
          ProteinContent: 25,
        },
        body_type: bodytype.content,
        goal: "muscle_gain",
      })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Get Prediction
      </button>

      {responseData && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Response:</h2>
          <ul className="list-disc mt-2">
            {Object.entries(responseData).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
