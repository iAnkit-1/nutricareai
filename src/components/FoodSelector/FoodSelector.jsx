import React, { useState } from 'react';
import { indianFoodItems } from '../../assets/foodItems';

const FoodSelector = ({ onAddFood }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddFood = () => {
    if (selectedFood && quantity) {
      onAddFood({ name: selectedFood, quantity });
      setSelectedFood('');
      setQuantity('');
    }
  };

  return (
    <div className="flex space-x-3 my-4">
      <input
        list="foodList"
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
        placeholder="Search food item"
        className="px-3 py-2 border rounded w-1/2"
      />
      <datalist id="foodList">
        {indianFoodItems.map((item) => (
          <option key={item.id} value={item.name} />
        ))}
      </datalist>
      
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity (g/ml)"
        className="px-3 py-2 border rounded w-1/4"
      />
      
      <button onClick={handleAddFood} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </div>
  );
};

export default FoodSelector;
