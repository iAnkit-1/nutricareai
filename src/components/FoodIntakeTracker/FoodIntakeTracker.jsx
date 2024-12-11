import React, { useState } from 'react';
import FoodSelector from '../FoodSelector/FoodSelector';
import DailyFoodTable from '../DailyFoodTable/DailyFoodTable';
import AnalysisTable from '../Analysis/AnalysisTable';

const FoodIntakeTracker = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

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
      .filter((item) => item.quantity > 0 && item.name) // Ensure valid quantity and name
      .map((item) => ({
        name: item.name,
        quantity: item.quantity,
      }));

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodItems),
      });

      setLoading(false);

      if (response.ok) {
        const result = await response.json();
        console.log('Analysis Result:', result);
        setResult(result);
      } else {
        console.error('Failed to send data from frontend');
      }
    } catch (error) {
      setLoading(false); // Reset loading state
      console.error('Error fetching analysis:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Centered content */}
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">Track Your Daily Food Intake</h2>

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

      
      {result && (
        <div className="my-40 text-white flex items-center justify-center h-screen">
          <AnalysisTable anaresult={result} />
        </div>
      )}
    </div>
  );
};

export default FoodIntakeTracker;
