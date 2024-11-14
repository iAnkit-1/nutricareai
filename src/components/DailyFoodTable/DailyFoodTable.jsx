import React from 'react';

const DailyFoodTable = ({ foodItems, onRemoveFood }) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold">Daily Consumed Food</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Food Item</th>
            <th className="p-2 border">Quantity (g/ml)</th>
            <th className="p-2 border">Remove</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.quantity}</td>
              <td className="p-2 border">
                <button onClick={() => onRemoveFood(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyFoodTable;
