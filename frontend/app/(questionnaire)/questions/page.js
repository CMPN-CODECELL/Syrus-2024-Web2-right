// pages/form.js
"use client";
import { bodyType } from "@/app/atom/modalatom";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const Form = () => {
  const [messages, setMessages] = useRecoilState(bodyType);
  const [formData, setFormData] = useState({
    bodyweight: "",
    height: "",
    gender: "",
    age: "",
    activityLevel: "",
    bodyFrame: "",
    appetite: "",
    skinType: "",
    hairType: "",
    lipsAndTeeth: "",
    eyes: "",
    mind: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Destructure form data
      const {
        bodyweight,
        height,
        gender,
        age,
      } = formData;

      // Construct the data object to be sent in the request
      const data = {
        bodyweight,
        height,
        gender,
        age,
      };

      // Send POST request to the API endpoint
      const response = await axios.post("/api/gpt", {
        messages: { data }, // Pass form data as messages: {data}
      });
      setMessages((current) => [...current, response.data]);

      // // Process the response as needed
      // console.log(response.data);
      alert("Body Examined Successfully")
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-[60%] max-w-screen-lg">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="mb-4">
            <label
              htmlFor="bodyweight"
              className="block text-sm font-medium text-gray-600"
            >
              Bodyweight (kg)
            </label>
            <input
              type="number"
              id="bodyweight"
              name="bodyweight"
              value={formData.bodyweight}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-600"
            >
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Additional Characteristics */}
          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Activity Level
            </label>
            <select
              id="activityLevel"
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Select Activity Level
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Repeat the above pattern for other characteristics */}

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Your body frame
            </label>
            <select
              id="bodyFrame"
              name="bodyFrame"
              value={formData.bodyFrame}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Select Body Frame
              </option>
              <option value="low">Thin</option>
              <option value="medium">Medium</option>
              <option value="high">Wide</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Appetite
            </label>
            <select
              id="appetite"
              name="appetite"
              value={formData.appetite}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Select Appetite Level
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Skin Type
            </label>
            <select
              id="skinType"
              name="skinType"
              value={formData.skinType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Select Skin Type
              </option>
              <option value="low">Rough and Dry</option>
              <option value="medium">Oily and soft</option>
              <option value="high">excessive oily and Smooth</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Hair Type
            </label>
            <select
              id="hairType"
              name="hairType"
              value={formData.hairType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Select Your Hair Type
              </option>
              <option value="low">Rough and Dry</option>
              <option value="medium">Normal and Straight</option>
              <option value="high">Thick and Curly</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Lips and Teeth
            </label>
            <select
              id="lipsAndTeeth"
              name="lipsAndTeeth"
              value={formData.lipsAndTeeth}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Lips and Teeth
              </option>
              <option value="low">Thin Lips and uneven Teeth</option>
              <option value="medium">Medium lips and mediums Teeth</option>
              <option value="high">
                Large/Smooth lips and well formed Teeth
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Eyes
            </label>
            <select
              id="eyes"
              name="eyes"
              value={formData.eyes}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Eyes
              </option>
              <option value="low">Small and Dry</option>
              <option value="medium">Medium eyes</option>
              <option value="high">Big and Attractive</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activityLevel"
              className="block text-sm font-medium text-gray-600"
            >
              Mind
            </label>
            <select
              id="mind"
              name="mind"
              value={formData.mind}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected>
                Your Mind
              </option>
              <option value="low">restless</option>
              <option value="medium">Aggressive</option>
              <option value="high">Calm and Cool</option>
            </select>
          </div>

          {/* ... */}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default Form;

        // <div className="flex flex-col reverse gap-y-4">
        //   {messages.map((message) => (
        //     <div
        //       key={String(message.content)}
        //       className={cn(
        //         "p-8 w-full flex items-start gap-x-8 rounded-lg",
        //         message.role === "user"
        //           ? "bg-white border border-black/10"
        //           : "bg-muted"
        //       )}
        //     >
        //       {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
        //       <p className="text-sm">{String(message.content)}</p>
        //     </div>
        //   ))}
        // </div>;