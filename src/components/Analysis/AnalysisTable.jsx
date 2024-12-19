import React, { useState } from "react";
import { idealValue } from "../../assets/idealValue";
import html2pdf from "html2pdf.js";
import RecommendTable from "./RecommendTable";  

const AnalysisTable = ({ anaresult }) => {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!anaresult || Object.keys(anaresult).length === 0) {
    return <p className="text-white">No analysis data available.</p>;
  }

  const nutrients = [
    "Calories", "Fat", "Carbohydrates", "Protein", "Fiber", "Sugar",
    "Cholesterol", "Sodium", "Potassium", "Vitamin A", "Vitamin C",
    "Vitamin D", "Vitamin E", "Vitamin K", "Vitamin B6", "Vitamin B12",
    "Calcium", "Iron", "Magnesium", "Phosphorus", "Zinc",
  ];

  const calculateStatus = (nutrient, consumed) => {
    if (consumed * 0.1 > idealValue[nutrient]) {
      return "High";
    } else if (consumed < idealValue[nutrient] * 0.6) {
      return "Low";
    } else {
      return "Normal";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Low":
        return "bg-red-700";
      case "Normal":
        return "bg-green-500";
      case "High":
        return "bg-yellow-600";
      default:
        return "bg-gray-500";
    }
  };

  const roundOff = (value) => {
    return typeof value === "number" && !Number.isInteger(value)
      ? parseFloat(value.toFixed(2))
      : value;
  };

  const totalConsumed = nutrients.reduce((totals, nutrient) => {
    let sum = 0;
    Object.keys(anaresult).forEach((foodItem) => {
      const consumed = anaresult[foodItem][nutrient];
      if (consumed !== undefined) {
        sum += consumed;
      }
    });
    totals[nutrient] = sum;
    return totals;
  }, {});

  const downloadTable = () => {
    const currentDate = new Date().toLocaleString();
    const element = document.getElementById("analysis-table");

    const options = {
      margin: 1,
      filename: `Nutritional_Analysis_${currentDate}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3, logging: true, dpi: 300 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  const handleGetRecommendations = async () => {
    // Extract nutrients with 'Low' and 'High' statuses
    const lowHighItems = nutrients.reduce((acc, nutrient) => {
      const status = calculateStatus(nutrient, totalConsumed[nutrient]);
      if (status === "Low" || status === "High") {
        acc[nutrient] = status;
      }
      return acc;
    }, {});

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lowHighItems }),
      });

      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        setRecommendations(data.Recommendations);
        console.log("Recommendations:", data);
      } else {
        console.error("Failed to fetch recommendations.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching recommendations:", error);
    }
  };

  // Function to speak the recommendations
  const speakRecommendations = () => {
    if (recommendations && recommendations.length > 0) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = recommendations.join(". ");
      speech.lang = "en-US";
      speech.volume = 1; // Max volume
      speech.rate = 1; // Normal speed
      speech.pitch = 1; // Normal pitch

      // Optionally, you can set a female voice
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female"));
      if (femaleVoice) {
        speech.voice = femaleVoice;
      }

      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="ml-0 my-4 text-white">
      <h3 className="text-3xl font-semibold text-center mb-5">Nutritional Analysis</h3>
      <div id="analysis-table">
        <table className="w-full border text-center">
          <thead>
            <tr>
              <th className="p-2 border text-red-500">Nutrient</th>
              {Object.keys(anaresult).map((foodItem, index) => (
                <th key={index} className="p-2 border text-blue-500">{foodItem}</th>
              ))}
              <th className="p-2 border text-red-500">Consumed</th>
              <th className="p-2 border text-red-500">Std.</th>
              <th className="p-2 border text-red-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {nutrients.map((nutrient, index) => (
              <tr key={index}>
                <td className="p-2 border font-semibold text-blue-500">{nutrient}</td>
                {Object.keys(anaresult).map((foodItem, idx) => (
                  <td key={idx} className="p-2 border">
                    {anaresult[foodItem][nutrient] !== undefined
                      ? roundOff(anaresult[foodItem][nutrient])
                      : "N/A"}
                  </td>
                ))}
                <td className="p-2 border font-bold text-blue-500">
                  {roundOff(totalConsumed[nutrient])}
                </td>
                <td className="p-2 border font-bold bg-orange-800">
                  {idealValue[nutrient]}
                </td>
                <td className={`p-2 border ${getStatusColor(calculateStatus(nutrient, totalConsumed[nutrient]))}`}>
                  {calculateStatus(nutrient, totalConsumed[nutrient])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4 space-x-4">
        <button
          onClick={downloadTable}
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download Analysis as PDF
        </button>
        <button
          onClick={handleGetRecommendations}
          className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          disabled={loading}
        >
          {loading ? "Fetching Recommendations..." : "Get Recommendations"}
        </button>
        <button
          onClick={speakRecommendations}
          className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          disabled={loading || !recommendations}
        >
          Speak Recommendations
        </button>
      </div>

      {/* Pass recommendations to RecommendTable component */}
      <RecommendTable recommendations={recommendations} />
    </div>
  );
};

export default AnalysisTable;
