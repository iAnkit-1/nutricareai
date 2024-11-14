import React, { useState } from 'react';
import FoodSelector from '../FoodSelector/FoodSelector';
import DailyFoodTable from '../DailyFoodTable/DailyFoodTable';

const FoodIntakeTracker = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddFood = (food) => {
    setFoodItems((prevFoodItems) => [...prevFoodItems, food]);
  };

  const handleRemoveFood = (index) => {
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (foodItems.length === 0) {
      alert('Please add food items before submitting!');
      return;
    }

    // Prepare data for backend
    const foodData = foodItems
      .filter((item) => item.quantity > 0 && item.name)  // Ensure valid quantity and name
      .map((item) => ({
        name: item.name,
        quantity: item.quantity,
      }));

    // Send data to backend
    setLoading(true); // Set loading state
    try {
      const response = await fetch('YOUR_BACKEND_URL/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ foodData }),
      });

      setLoading(false); // Reset loading state

      if (response.ok) {
        const result = await response.json();
        console.log('Analysis Result:', result);
        // You can add logic to display results if needed
      } else {
        console.error('Failed to send data');
        alert('Failed to send data. Please try again later.');
      }
    } catch (error) {
      setLoading(false); // Reset loading state
      console.error('Error:', error);
      alert('Error occurred while sending data. Please try again later.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-black shadow-md rounded text-white">
      <h2 className="text-xl font-bold mb-4">Track Your Daily Food Intake</h2>

      {/* Food Selector Component */}
      <FoodSelector onAddFood={handleAddFood} />

      <div className="mb-10"></div>

      {/* Daily Food Table */}
      
      <DailyFoodTable foodItems={foodItems} onRemoveFood={handleRemoveFood} />

      {/* Submit Button to send data to backend */}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        disabled={loading || foodItems.length === 0}
      >
        {loading ? 'Analyzing...' : 'Analyze Nutrition'}
      </button>
    </div>
  );
};

export default FoodIntakeTracker;
