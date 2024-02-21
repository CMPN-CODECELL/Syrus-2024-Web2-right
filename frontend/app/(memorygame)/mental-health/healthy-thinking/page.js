// Import necessary dependencies
"use client"
import { useState } from "react";

const HealthyThinking = () => {
    const initialCopingCards = [
      'I am capable of handling whatever comes my way.',
      'I choose peace over worry.',
      'I am in control of my thoughts and feelings.',
    ];
  
    const [thoughtJournal, setThoughtJournal] = useState('');
    const [copingCards, setCopingCards] = useState(initialCopingCards);
    const [beliefExperiment, setBeliefExperiment] = useState('');
  
    const handleAddThought = () => {
        if (thoughtJournal.trim() !== '') {
          setCopingCards([...copingCards, thoughtJournal]);
          setThoughtJournal('');
        }
      };
      
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-300">
          <h1 className="text-2xl font-semibold mb-4 text-blue-600">Healthy Thinking</h1>
  
          {/* Thought Journal Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Thought Journal</h2>
            <textarea
              rows="5"
              value={thoughtJournal}
              onChange={(e) => setThoughtJournal(e.target.value)}
              placeholder="Write your thoughts here..."
              className="w-full p-2 border rounded"
            ></textarea>
            <button
              onClick={handleAddThought}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Add to Journal
            </button>
          </div>
  
          {/* Coping Cards Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Coping Cards</h2>
            <ul>
              {copingCards.map((card, index) => (
                <li key={index} className="mb-2">
                  {card}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Belief Experiment Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Belief Experiment</h2>
            <textarea
              rows="5"
              value={beliefExperiment}
              onChange={(e) => setBeliefExperiment(e.target.value)}
              placeholder="Write a thought to challenge your beliefs..."
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };
  
  export default HealthyThinking;
  