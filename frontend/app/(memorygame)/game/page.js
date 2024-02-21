// MemoryGame.js
"use client"
import React, { useState, useEffect } from 'react';

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MemoryGame = () => {
  const symbols = ['🌟', '🌈', '🎈', '🎉'];
  const initialCards = [...symbols, ...symbols].map((symbol, index) => ({ id: index, value: symbol, flipped: false }));

  const [cards, setCards] = useState(shuffleArray(initialCards));
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [message, setMessage] = useState('');

  const handleCardClick = (index) => {
    if (flippedIndexes.length === 2) {
      return;
    }

    const newCards = cards.map((card, i) => (i === index ? { ...card, flipped: true } : card));
    setCards(newCards);
    setFlippedIndexes([...flippedIndexes, index]);
    setFlippedCount(flippedCount + 1);
  };

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = flippedIndexes;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setFlippedIndexes([]);
      } else {
        setTimeout(() => {
          const resetCards = cards.map((card, i) => (i === firstIndex || i === secondIndex ? { ...card, flipped: false } : card));
          setCards(resetCards);
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  }, [flippedIndexes, cards]);

  useEffect(() => {
    if (flippedCount === cards.length) {
      setMessage("Congratulations! You've matched all the cards. 🎉");
    }
  }, [flippedCount, cards]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-4">Memory Game</h1>
        {message && <p className="text-green-600 font-bold mb-4">{message}</p>}
        <div className="grid grid-cols-3 gap-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`h-[200px] w-[200px] bg-gray-500 text-white rounded cursor-pointer transition duration-300 transform hover:scale-105 ${
                card.flipped ? 'bg-white text-black' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <span style={{ fontSize: '400%' }}>{card.flipped ? card.value : '?'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
