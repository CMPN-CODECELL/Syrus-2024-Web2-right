// GeneralWorry.js
"use client"
import React, { useState } from 'react';

const GeneralWorry = () => {
  const [selectedOption, setSelectedOption] = useState('intro');

  const options = [
    { id: 'intro', label: 'Intro' },
    { id: 'signs', label: 'Signs' },
    { id: 'tips', label: 'Tips' },
  ];

  const reasonsForWorry = [
    { id: 1, title: 'Health', description: 'Concerns about personal health and well-being.' },
    { id: 2, title: 'Work', description: 'Stress related to job responsibilities and performance.' },
    { id: 3, title: 'Relationships', description: 'Worries about personal relationships with others.' },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex justify-center'>
      <div className='w-[700px] min-w-700 h-[100vh] flex justify-center'>
          <div className="bg-blue-500 text-white text-center py-8">
      <h1 className="text-3xl font-bold">General Worry</h1>
      <div className="flex justify-center mt-4 space-x-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`py-2 px-4 focus:outline-none ${
              selectedOption === option.id ? 'bg-blue-700' : 'bg-blue-500'
            } hover:bg-blue-700 transition duration-300`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {selectedOption === 'intro' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction to General Worry</h2>
            <p>Most people worry once in a while, like before a final exam or big presentation. However, some people worry excessively about different aspects of their lives.. They're constantly building up negative scenarios in their heads and assuming the worst is going to happen. Worry becomes a problem when it's hard to shut off and leaves people feeling anxious, overwhelmed, or exhausted. Or, it gets in the way of daily life. If this sounds like you, worry could be a problem.</p>
          </div>
        )}
        {selectedOption === 'signs' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Signs of General Worry</h2>
            <p>There may be times when your worries don't completely consume you, but you still feel anxious even when there's no apparent reason. For example, you may feel intense worry about your safety or that of your loved ones, or you may have a general sense that something bad is about to happen.

Your anxiety, worry or physical symptoms cause you significant distress in social, work or other areas of your life. Worries can shift from one concern to another and may change with time and age.
</p>
          </div>
        )}
        {selectedOption === 'tips' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Tips for Managing General Worry</h2>
            <p><ol className="list-decimal list-inside">
      <li>Check in with yourself</li>
      <li>Recognize and avoid common thinking traps</li>
      <li>Learn to develop more balanced thoughts</li>
      <li>Identify key coping statements to help ride out worries</li>
      <li>Test out your beliefs about uncertainty</li>
      <li>Dial down the physical symptoms of anxiety</li>
      <li>Learn to face uncertainty head-on</li>
      <li>Stop avoiding uncertainty and get out of your comfort zone</li>
      <li>Take care of yourself</li>
      <li>Get help when needed</li>
    </ol></p>
          </div>
        )}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Common Reasons for Worry</h2>
        <div className="flex justify-center space-x-4">
          {reasonsForWorry.map((reason) => (
            <div key={reason.id} className="flex-shrink-0 w-48 p-4 bg-blue-300 hover:bg-blue-400 rounded-md transition duration-300">
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default GeneralWorry;
