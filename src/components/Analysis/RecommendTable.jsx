import React from "react";

const RecommendTable = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) {
    return <p className="text-gray-800">No recommendations available.</p>;
  }

  return (
    <div className="mt-6 mb-5 p-4 border border-blue-300 rounded bg-blue-100 text-gray-800">
      <h4 className="text-xl font-bold mb-2">Recommendations</h4>
      <ul className="list-disc pl-6">
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendTable;
