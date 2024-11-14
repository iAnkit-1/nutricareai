import React, { useState } from 'react';
import FoodSelector from '../FoodSelector/FoodSelector';
import DailyFoodTable from '../DailyFoodTable/DailyFoodTable';

const FoodIntakeTracker = () => {
  const [foodItems, setFoodItems] = useState([]);

  const handleAddFood = (food) => {
    setFoodItems([...foodItems, food]);
  };

  const handleRemoveFood = (index) => {
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    // Prepare data for backend
    const foodData = foodItems.map(item => ({
      name: item.name,
      quantity: item.quantity
    }));

    // Send data to backend
    try {
      const response = await fetch('YOUR_BACKEND_URL/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ foodData }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Analysis Result:', result);
        // You can add logic to display results if needed
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Track Your Daily Food Intake</h2>

      <FoodSelector onAddFood={handleAddFood} />

      <DailyFoodTable foodItems={foodItems} onRemoveFood={handleRemoveFood} />

      {/* Submit Button to send data to backend */}
      <button 
        onClick={handleSubmit} 
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Analyze Nutrition
      </button>
    </div>
  );
};

export default FoodIntakeTracker;
