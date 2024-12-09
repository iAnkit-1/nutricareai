import React from "react";
import { idealValue } from "../../assets/idealValue";
import html2pdf from "html2pdf.js";

const AnalysisTable = ({ anaresult }) => {
  // Check if anaresult is available and contains data
  if (!anaresult || Object.keys(anaresult).length === 0) {
    return <p className="text-white">No analysis data available.</p>; // Show fallback if no data
  }

  const nutrients = [
    "Calories", "Fat", "Carbohydrates", "Protein", "Fiber", "Sugar",
    "Cholesterol", "Sodium", "Potassium", "Vitamin A", "Vitamin C",
    "Vitamin D", "Vitamin E", "Vitamin K", "Vitamin B6", "Vitamin B12",
    "Calcium", "Iron", "Magnesium", "Phosphorus", "Zinc"
  ];

  // Function to calculate the status (Low, Normal, High)
  const calculateStatus = (nutrient, consumed) => {
    if (consumed > idealValue[nutrient]) {
      return "High";
    } else if (consumed < idealValue[nutrient] * 0.8) {
      return "Low";
    } else {
      return "Normal";
    }
  };

  // Function to assign color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Low":
        return "bg-red-700"; // Red for Low
      case "Normal":
        return "bg-green-500"; // Green for Normal
      case "High":
        return "bg-yellow-600"; // Yellow for High
      default:
        return "bg-gray-500"; // Default color
    }
  };

  // Function to round off floating-point numbers to two decimal places
  const roundOff = (value) => {
    return typeof value === "number" && !Number.isInteger(value)
      ? parseFloat(value.toFixed(2))
      : value;
  };

  // Calculate total consumed for each nutrient
  const totalConsumed = nutrients.reduce((totals, nutrient) => {
    let sum = 0;
    Object.keys(anaresult).forEach(foodItem => {
      const consumed = anaresult[foodItem][nutrient];
      if (consumed !== undefined) {
        sum += consumed;
      }
    });
    totals[nutrient] = sum;
    return totals;
  }, {});

  // Function to handle the download of the analysis table as a PDF
  const downloadTable = () => {
    const currentDate = new Date().toLocaleString(); // Get current date and time
    const element = document.getElementById("analysis-table");

    // Add the current date and time to the PDF
    const options = {
      margin: 1,
      filename: `Nutritional_Analysis_${currentDate}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3, logging: true, dpi: 300 },  // Increased scale for better resolution
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };

    html2pdf()
      .from(element)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        // Get the total height of the table
        const pageHeight = pdf.internal.pageSize.height;
        const tableHeight = element.offsetHeight;

        // Check if table height exceeds page height
        if (tableHeight > pageHeight) {
          // Add a new page to ensure all content fits
          let currentPosition = 0;

          // Split the content into multiple pages if needed
          while (currentPosition < tableHeight) {
            const page = pdf.addPage();
            const splitHeight = Math.min(pageHeight, tableHeight - currentPosition);
            pdf.html(element, { margin: [0, 0, 0, splitHeight] });
            currentPosition += splitHeight;
          }
        }

        // Save the PDF with the current date in the filename
        pdf.save(`Nutritional_Analysis_${currentDate}.pdf`);
      });
  };

  return (
    <div className="ml-0 my-4 text-white">
      <h3 className="text-3xl font-semibold text-center mb-5">Nutritional Analysis</h3>
      <div id="analysis-table">
        <table className="w-full border text-center">
          <thead>
            <tr>
              <th className="p-2 border bg-slate-900">Food Item</th>
              {nutrients.map((nutrient, index) => (
                <th key={index} className="p-2 border text-blue-500">{nutrient}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(anaresult).map((foodItem, index) => (
              <tr key={index}>
                <td className="p-2 border font-semibold text-blue-500">{foodItem}</td>
                {nutrients.map((nutrient, idx) => (
                  <td key={idx} className="p-2 border odd:bg-zinc-900">
                    {anaresult[foodItem][nutrient] !== undefined
                      ? roundOff(anaresult[foodItem][nutrient])
                      : "N/A"}
                  </td>
                ))}
              </tr>
            ))}

            {/* Add the Total Consumed row */}
            <tr>
              <td className="p-2 border font-semibold bg-slate-900">Total Consumed</td>
              {nutrients.map((nutrient, idx) => (
                <td key={idx} className="p-2 border font-bold text-blue-500 bg-zinc-900">
                  {roundOff(totalConsumed[nutrient])}
                </td>
              ))}
            </tr>

            {/* Add the Ideal row */}
            <tr>
              <td className="p-2 border text-orange-500 font-semibold bg-slate-900">Ideal</td>
              {nutrients.map((nutrient, idx) => (
                <td key={idx} className="p-2 border font-bold bg-orange-700">
                  {idealValue[nutrient]}
                </td>
              ))}
            </tr>

            {/* Add the Status row */}
            <tr>
              <td className="p-2 border font-semibold bg-slate-900">Status</td>
              {nutrients.map((nutrient, idx) => {
                const status = calculateStatus(nutrient, totalConsumed[nutrient]);
                return (
                  <td key={idx} className={`p-2 border ${getStatusColor(status)}`}>
                    {status}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={downloadTable}
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download Analysis as PDF
        </button>
      </div>
    </div>
  );
};

export default AnalysisTable;
  