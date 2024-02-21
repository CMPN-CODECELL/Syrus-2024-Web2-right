// GeneralWorry.js
"use client";
import React, { useState } from "react";

const GeneralWorry = () => {
  const [selectedOption, setSelectedOption] = useState("intro");

  const options = [
    { id: "intro", label: "Intro" },
    { id: "signs", label: "Signs" },
    { id: "tips", label: "Tips" },
  ];

  const reasonsForWorry = [
    {
      id: 1,
      title: "Health",
      description: "Concerns about personal health and well-being.",
    },
    {
      id: 2,
      title: "Work",
      description: "Stress related to job responsibilities and performance.",
    },
    {
      id: 3,
      title: "Relationships",
      description: "Worries about personal relationships with others.",
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center mt-5 bg-slate-50">
      <div className=" h-full border-solid border-2  w-[700px] text-center py-8 px-8">
        <h1 className="text-3xl font-bold">Social Anxiety</h1>
        <div className="flex justify-center mt-4 space-x-4">
          {options.map((option) => (
            <button
              key={option.id}
              className={`py-2 px-4 focus:outline-none ${
                selectedOption === option.id ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 transition duration-300`}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {selectedOption === "intro" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Introduction to Social Anxiety
              </h2>
              <p>
                Most people get anxious in some social situations, like before a
                job interview or when giving a speech. However, some people get
                overly anxious in social situations. They tend to worry about
                doing something embarrassing or that others will think badly of
                them. They also tend to avoid social situations or endure them
                with great distress. Social anxiety becomes problematic when it
                interferes with daily life. If you tend to feel overly anxious
                in social situations, social anxiety may be an issue for you..
              </p>
            </div>
          )}
          {selectedOption === "signs" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Signs of Social Anxiety
              </h2>
              <p>
                Feelings of shyness or discomfort in certain situations aren't
                necessarily signs of social anxiety disorder, particularly in
                children. Comfort levels in social situations vary, depending on
                personality traits and life experiences. Some people are
                naturally reserved and others are more outgoing. In contrast to
                everyday nervousness, social anxiety disorder includes fear,
                anxiety and avoidance that interfere with relationships, daily
                routines, work, school or other activities. Social anxiety
                disorder typically begins in the early to mid-teens, though it
                can sometimes start in younger children or in adults.
              </p>
            </div>
          )}
          {selectedOption === "tips" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Tips for Managing General Worry
              </h2>
              <p>
                {" "}
                <ol className="list-decimal list-inside">
                  <li>Start doing a daily check-in</li>
                  <li>
                    Learn to recognize and avoid thinking traps that fuel social
                    anxiety
                  </li>
                  <li>
                    Untwist anxious thinking and develop more balanced thoughts
                  </li>
                  <li>
                    Review key coping statements to help ride out anxiety in
                    social situations
                  </li>
                  <li>
                    Test out whether your beliefs about social situations are
                    accurate
                  </li>
                  <li>Dial down the physical symptoms of anxiety</li>
                  <li>
                    Build your confidence by repeatedly facing feared social
                    situations
                  </li>
                  <li>
                    Step out of your comfort zone and face new social situations
                  </li>
                  <li>Remember to take care of the basics</li>
                  <li>Reach out for help when needed</li>
                </ol>
              </p>
            </div>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Common Reasons for Social Anxiety
          </h2>
          <div className="flex justify-center space-x-4">
            {reasonsForWorry.map((reason) => (
              <div
                key={reason.id}
                className="flex-shrink-0 w-48 p-4 bg-blue-300 hover:bg-blue-400 rounded-md transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralWorry;
