import React, { useState } from 'react';

// Import your dataset
import { indianFoodItems } from '../../assets/foodItems';

const NutritionAnalysis = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foodQuantity, setFoodQuantity] = useState({});
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFoodSelection = (food) => {
    if (!selectedFoods.includes(food.name)) {
      setSelectedFoods([...selectedFoods, food.name]);
    }
  };

  const handleQuantityChange = (foodName, quantity) => {
    setFoodQuantity({ ...foodQuantity, [foodName]: quantity });
  };

  const handleSubmit = async () => {
    const foodData = selectedFoods.map((foodName) => ({
      name: foodName,
      quantity: parseFloat(foodQuantity[foodName] || 0),
    }));

    try {
      const response = await fetch('/analyze-nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foodData),
      });

      const result = await response.json();
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing nutrition:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nutrition Analysis</h1>
      
      {/* Food List */}
      <div className="grid grid-cols-2 gap-4">
        {indianFoodItems.map((food) => (
          <div
            key={food.id}
            className="p-2 border rounded hover:bg-gray-200 cursor-pointer"
            onClick={() => handleFoodSelection(food)}
          >
            {food.name}
          </div>
        ))}
      </div>

      {/* Selected Foods */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Selected Foods</h2>
        {selectedFoods.length === 0 && <p>No food selected.</p>}
        {selectedFoods.map((foodName) => (
          <div key={foodName} className="flex items-center mb-2">
            <span className="mr-4">{foodName}</span>
            <input
              type="number"
              min="0"
              className="border p-1 rounded"
              placeholder="Quantity (grams)"
              onChange={(e) => handleQuantityChange(foodName, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        Analyze Nutrition
      </button>

      {/* Analysis Result */}
      {analysisResult && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Analysis Result</h2>
          <div>
            <h3 className="text-lg font-bold">Deficient:</h3>
            <ul>
              {analysisResult.deficient.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Excess:</h3>
            <ul>
              {analysisResult.excess.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Balanced:</h3>
            <ul>
              {analysisResult.balanced.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionAnalysis;
