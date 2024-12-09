import React from "react";
import { idealValue } from "../../assets/idealValue";

const AnalysisTable = ({ anaresult }) => {
  // Check if anaresult is available before trying to access its keys
  if (!anaresult) {
    return <p>No analysis data available.</p>;  // Show a fallback message if result is null or undefined
  }

  // Calculate status based on comparison with ideal values
    const calculateStatus = (nutrient, consumed) => {
        if (consumed > idealValue[nutrient]) {
        return "High";
        } else if (consumed < idealValue[nutrient] * 0.8) {
        return "Low";
        } else {
        return "Normal";
        }
    };

  const nutrients = [
    "Calories", "Fat", "Carbohydrates", "Protein", "Fiber", "Sugar", 
    "Cholesterol", "Sodium", "Potassium", "Vitamin A", "Vitamin B", 
    "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K", "Vitamin B6", 
    "Vitamin B12", "Calcium", "Iron", "Magnesium", "Phosphorus", "Zinc"
  ];

  return (
    <div className="my-4 text-white">
      <h3 className="text-lg font-semibold text-center">Nutritional Analysis</h3>
      {Object.keys(anaresult).length > 0 ? (
        Object.keys(anaresult).map((foodItem, index) => (
          <div key={index} className="my-6">
            <h4 className="text-md font-semibold text-center mb-2">{foodItem}</h4>
            <table className="w-full border text-center">
              <thead>
                <tr>
                  <th className="p-2 border">Nutrient</th>
                  <th className="p-2 border">Consumed</th>
                  <th className="p-2 border">Ideal</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(anaresult[foodItem]).map((nutrient, idx) => {
                  const consumed = anaresult[foodItem][nutrient];
                  const ideal = idealValue[nutrient] || "N/A"; // Ideal value or N/A if not defined
                  const status = ideal !== "N/A" ? calculateStatus(nutrient, consumed) : "Unknown";

                  return (
                    <tr key={idx}>
                      <td className="p-2 border">{nutrient}</td>
                      <td className="p-2 border">{consumed}</td>
                      <td className="p-2 border">{ideal}</td>
                      <td className="p-2 border">{status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No food items in the result.</p>  // Fallback if result is an empty object
      )}
    </div>
  );
};

export default AnalysisTable;