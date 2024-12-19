import React from 'react';

const DailyFoodTable = ({ foodItems, onRemoveFood }) => {
  console.log(foodItems);

  return (
    <div className="my-4">
      <h3 className="text-2xl font-bold text-center mb-5 text-blue-600">Daily Consumed Food</h3>
      <table className="w-full border border-gray-300 text-center bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border border-gray-300">Food Item</th>
            <th className="p-2 border border-gray-300">Quantity (g/ml)</th>
            <th className="p-2 border border-gray-300">Remove</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border border-gray-300">{item.name}</td>
              <td className="p-2 border border-gray-300">{item.quantity}</td>
              <td className="p-2 border border-gray-300">
                <div className="flex justify-center">
                  <button
                    onClick={() => onRemoveFood(index)}
                    className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyFoodTable;
