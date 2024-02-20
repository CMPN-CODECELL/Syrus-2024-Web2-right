// MentalHealth.js
"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AnxietyCards = [
  {
    id: 1,
    title: 'General Worry',
    description: 'Experiencing constant and excessive worrying about various aspects of life.',
    link:'/mental-health/general-worry'
  },
  {
    id: 2,
    title: 'Social Anxiety',
    description: 'Feeling anxious or fearful in social situations, often accompanied by self-consciousness.',
    link:'/mental-health/social-anxiety'
  },
  {
    id: 3,
    title: 'Perfectionism',
    description: 'Setting unrealistically high standards for oneself and feeling stressed when they are not met.',
  },
  {
    id: 4,
    title: 'Panic',
    description: 'Sudden and intense episodes of fear, often accompanied by physical symptoms like heart palpitations.',
  },
  {
    id: 5,
    title: 'Phobias',
    description: 'Intense and irrational fears of specific objects, situations, or activities.',
  },
];

const ToolsSection = [
  {
    id: 1,
    title: 'Play Memory Game',
    description: 'A fun and engaging game to challenge your memory skills.',
    link: '/game', // Replace with the actual route for the game
  },
  {
    id: 2,
    title: 'Healthy Thinking',
    description: 'Explore techniques for cultivating positive and healthy thought patterns.',
    link: '/healthy-thinking', // Replace with the actual route for healthy thinking
  },
  {
    id: 3,
    title: 'Chill Zone',
    description: 'Find a relaxing space with calming activities to help alleviate stress.',
    // link: '/chill-zone', // Replace with the actual route for chill zone
  },
  {
    id: 4,
    title: 'Taking Action',
    description: 'Learn strategies to take proactive steps towards managing anxiety.',
    // link: '/taking-action', // Replace with the actual route for taking action
  },
];

const MentalHealth = () => {
  const router = useRouter();

  const handleClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-4 mt-10">My Anxiety</h1>
        <p className="text-lg font-semibold mb-6">What are your experiences?</p>
        <div className="flex space-x-4 mb-8">
          {AnxietyCards.map((card) => (
            <div key={card.id}
             className="flex-shrink-0 w-48 p-4 bg-blue-200 hover:bg-blue-300 rounded-md transition duration-300"
             onClick={() => handleClick(card.link)}
             >
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-4">Tools</h1>
        <p className="text-lg font-semibold mb-6">Choose a tool to manage your Anxiety</p>
        <div className="flex space-x-4">
          {ToolsSection.map((tool) => (
            <div
              key={tool.id}
              className="flex-shrink-0 w-48 p-4 bg-green-200 hover:bg-green-300 rounded-md transition duration-300 cursor-pointer"
              onClick={() => handleClick(tool.link)}
            >
              <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
