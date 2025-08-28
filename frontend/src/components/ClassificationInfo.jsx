import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, BarChart3, Image, Layers,ChevronDown,ChevronUp } from 'lucide-react';

const ClassificationInfo = ({ plantClassificationInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedTaxonomy, setExpandedTaxonomy] = useState(false);

  if (!plantClassificationInfo || plantClassificationInfo.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <div className="text-[#5E936C]">No classification information available</div>
      </div>
    );
  }

  const currentClassification = plantClassificationInfo[currentIndex];

  const nextClassification = () => {
    setCurrentIndex(prev => 
      prev === plantClassificationInfo.length - 1 ? 0 : prev + 1
    );
  };

  const prevClassification = () => {
    setCurrentIndex(prev => 
      prev === 0 ? plantClassificationInfo.length - 1 : prev - 1
    );
  };

  const formatProbability = (probability) => {
    return (probability * 100).toFixed(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header with Navigation */}
      <div className="bg-[#3E5F44] p-6 text-white relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Sparkles size={24} className="mr-2" />
            Plant Classification
          </h2>
          
          {plantClassificationInfo.length > 1 && (
            <div className="flex items-center">
              <button 
                onClick={prevClassification}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors mr-2"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm mx-2">
                {currentIndex + 1} of {plantClassificationInfo.length}
              </span>
              <button 
                onClick={nextClassification}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">{currentClassification.name}</h3>
            <p className="text-[#E8FFD7]">Scientific classification</p>
          </div>
          
          <div className="text-right">
            <div className="flex items-center justify-end">
              <div className="w-20 h-2 bg-white/30 rounded-full overflow-hidden mr-2">
                <div 
                  className="h-full bg-[#93DA97] rounded-full" 
                  style={{ width: `${formatProbability(currentClassification.probability)}%` }}
                ></div>
              </div>
              <span className="font-semibold">{formatProbability(currentClassification.probability)}%</span>
            </div>
            <p className="text-sm text-[#E8FFD7]">Match confidence</p>
          </div>
        </div>

        {/* Indicators for multiple classifications */}
        {plantClassificationInfo.length > 1 && (
          <div className="flex justify-center mt-4 space-x-1">
            {plantClassificationInfo.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Taxonomy Information */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setExpandedTaxonomy(!expandedTaxonomy)}
          >
            <h3 className="text-lg font-semibold text-[#3E5F44] flex items-center">
              <Layers size={20} className="mr-2" />
              Taxonomic Classification
            </h3>
            <div className="text-[#5E936C]">
              {expandedTaxonomy ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {expandedTaxonomy && (
            <div className="mt-4 bg-[#f8fdf4] p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentClassification.kingdom && (
                  <div className="flex justify-between items-center py-2 border-b border-[#E8FFD7]">
                    <span className="text-[#5E936C] font-medium">Kingdom</span>
                    <span className="text-[#3E5F44] font-semibold">{currentClassification.kingdom}</span>
                  </div>
                )}
                
                {currentClassification.phylum && (
                  <div className="flex justify-between items-center py-2 border-b border-[#E8FFD7]">
                    <span className="text-[#5E936C] font-medium">Phylum</span>
                    <span className="text-[#3E5F44] font-semibold">{currentClassification.phylum}</span>
                  </div>
                )}
                
                {currentClassification.class && (
                  <div className="flex justify-between items-center py-2 border-b border-[#E8FFD7]">
                    <span className="text-[#5E936C] font-medium">Class</span>
                    <span className="text-[#3E5F44] font-semibold">{currentClassification.class}</span>
                  </div>
                )}
                
                {currentClassification.order && (
                  <div className="flex justify-between items-center py-2 border-b border-[#E8FFD7]">
                    <span className="text-[#5E936C] font-medium">Order</span>
                    <span className="text-[#3E5F44] font-semibold">{currentClassification.order}</span>
                  </div>
                )}
                
                {currentClassification.family && (
                  <div className="flex justify-between items-center py-2 border-b border-[#E8FFD7]">
                    <span className="text-[#5E936C] font-medium">Family</span>
                    <span className="text-[#3E5F44] font-semibold">{currentClassification.family}</span>
                  </div>
                )}
                
                {currentClassification.genus && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#5E936C] font-medium">Genus</span>
                    <span className="text-[#3E5F44] font-semibold">{currentClassification.genus}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Similar Images */}
        {currentClassification.similar_images && currentClassification.similar_images.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#3E5F44] mb-4 flex items-center">
              <Image size={20} className="mr-2" />
              Similar Plant Images
            </h3>
            
            <div className="grid grid-cols-3 gap-8">
              {currentClassification.similar_images.slice(0, 4).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-[#E8FFD7]">
                  <img 
                    src={image.url || image.url} 
                    alt={`Similar plant example ${index + 1}`}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-3 bg-[#f8fdf4]">
                    <p className="text-xs text-[#5E936C] text-center">
                      Similarity: {image.similarity ? (image.similarity * 100).toFixed(1) + '%' : 'Reference image'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confidence Comparison for multiple classifications */}
        {plantClassificationInfo.length > 1 && (
          <div className="bg-[#f8fdf4] p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-[#3E5F44] mb-3 flex items-center">
              <BarChart3 size={20} className="mr-2" />
              Classification Confidence
            </h3>
            
            <div className="space-y-3">
              {plantClassificationInfo.map((classification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`flex-1 ${currentIndex === index ? 'font-semibold text-[#3E5F44]' : 'text-[#5E936C]'}`}>
                    {classification.name}
                  </span>
                  <div className="w-24 h-2 bg-[#E8FFD7] rounded-full overflow-hidden ml-2">
                    <div 
                      className="h-full bg-[#5E936C] rounded-full" 
                      style={{ width: `${formatProbability(classification.probability)}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-sm font-medium text-[#3E5F44] w-12 text-right">
                    {formatProbability(classification.probability)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassificationInfo;