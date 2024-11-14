import React, { useState } from 'react';
import Select from 'react-select';
import { indianFoodItems } from '../../assets/foodItems';

const FoodSelector = ({ onAddFood }) => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState('');

  const handleAddFood = () => {
    if (selectedFood && quantity) {
      onAddFood({ name: selectedFood.value, quantity });
      setSelectedFood(null);
      setQuantity('');
    }
  };

  // Format options for react-select
  const foodOptions = indianFoodItems.map(item => ({
    value: item.name,
    label: item.name,
  }));
  

  return (
    <div className="flex flex-col space-y-4 my-4">
      {/* Searchable Select Dropdown */}
      <div>
        <Select
          value={selectedFood}
          onChange={setSelectedFood}
          options={foodOptions}
          getOptionLabel={(e) => (
            <div className="flex items-center text-black">
              <span>{e.label}</span>
            </div>
          )}
          placeholder="Search and select food item"
          className="w-full"
        />
      </div>

      {/* Quantity Input */}
      <div className="flex space-x-3">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity (g/ml)"
          className="px-3 py-2 border rounded w-1/2 text-black"
        />
        <button
          onClick={handleAddFood}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FoodSelector;
