import React from "react";
import { usePlantStore } from "../store/usePlantStore.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
 
const HistoryPage = () => {
  const {history} = usePlantStore();
  
  return (
   <div className="min-h-screen">
    <Navbar />
     <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#3E5F44]">Search History</h2>

      {history.length === 0 ? (
        <p className="text-gray-500">No plant searches yet.</p>
      ) : (
        <div className="space-y-4">
          {history.map((plant, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-2xl border border-gray-100 hover:shadow-md transition"
            >
              {/* Plant Image */}

              {plant?.result?.classification.suggestions[0].similar_images?.length > 0 && (
                <img
                  src={plant?.result.classification.suggestions[0].similar_images[0].url}
                  alt={plant?.result.classification.suggestions[0].name}
                  className="w-32 h-32 object-cover rounded-lg mb-3"
                />
              )}

              {/* Plant Name */}

              <h3 className="text-lg font-semibold text-[#2C4A37]">
                {plant?.result.classification.suggestions[0].name || "Unknown Plant"}
              </h3>

              {/* Extra Info */}

              <p className="text-sm text-gray-600">
                Family Name:{" "}
                <span className="italic">
                  {plant?.result.classification.suggestions[0].details.taxonomy.family || "N/A"}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Uses: {plant?.result.classification.suggestions[0].details.common_uses || "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
   </div>
  );
};

export default HistoryPage;