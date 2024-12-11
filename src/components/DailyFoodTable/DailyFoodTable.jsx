import React from 'react';

const DailyFoodTable = ({ foodItems, onRemoveFood }) => {
  console.log(foodItems);
  
  return (
    <div className="my-0 text-white ">
      <h3 className="text-3xl font-bold text-center mb-5 text-blue-500">Daily Consumed Food</h3>
      <table className="w-full border text-center">
        <thead>
          <tr>
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
                <div className="flex justify-center">
                  <button
                    onClick={() => onRemoveFood(index)}
                    className="text-red-500 hover:text-red-700"
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
