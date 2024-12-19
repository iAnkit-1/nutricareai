import React, { useState } from 'react';

const FoodSelector = ({ onAddFood }) => {
  const [eatenFood, setEatenFood] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddFood = () => {
    if (eatenFood && quantity) {
      onAddFood({ name: eatenFood, quantity });
      console.log(eatenFood, quantity);

      setEatenFood('');
      setQuantity('');
    }
  };

  return (
    <div className="flex flex-col space-y-4 my-4">
      {/* Food Input */}
      <div>
        <input
          type="text"
          value={eatenFood}
          onChange={(e) => setEatenFood(e.target.value)}
          placeholder="What did you eat today?"
          className="px-3 py-2 border border-gray-300 rounded shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Quantity Input */}
      <div className="flex space-x-3">
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity (g/ml)"
          className="px-3 py-2 border border-gray-300 rounded shadow-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        <button
          onClick={handleAddFood}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FoodSelector;
