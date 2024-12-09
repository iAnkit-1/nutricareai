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
    <div className="flex flex-col space-y-2 my-2">
      {/* Searchable Select Dropdown */}
      <div>
        <input
        type="text"
          value={eatenFood}
          onChange={(e) => setEatenFood(e.target.value)}
          placeholder="Tell me what you have eaten today?"
          className="px-3 py-2 border rounded text-black w-full"
        />
      </div>

      {/* Quantity Input */}
      <div className="flex space-x-3">
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity (g/ml)"
          className="px-3 py-2 border rounded w-1/2 text-black"
        />
        <button
          onClick={handleAddFood}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FoodSelector;
