import React, { useState } from 'react';
import { Heart, AlertTriangle, ChevronDown, ChevronUp, ExternalLink, Info, Shield, Zap, Clock } from 'lucide-react';

const HealthInfo = ({ plantHealthInfo }) => {
  const [expandedDisease, setExpandedDisease] = useState(null);

  if (!plantHealthInfo) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <div className="text-[#5E936C]">No health information available</div>
      </div>
    );
  }

  const toggleDisease = (id) => {
    if (expandedDisease === id) {
      setExpandedDisease(null);
    } else {
      setExpandedDisease(id);
    }
  };

  const formatProbability = (probability) => {
    return (probability * 100).toFixed(1);
  };

  // Check if there are any diseases with probability above a threshold (e.g., 10%)
  const hasSignificantDiseases = plantHealthInfo.diseases && 
    plantHealthInfo.diseases.some(disease => disease.probability > 0.1);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Health Status Header */}
      <div className={`p-6 text-white ${plantHealthInfo.isHealthy ? 'bg-[#5E936C]' : 'bg-[#D99E41]'}`}>
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-white/20 mr-4">
            {plantHealthInfo.isHealthy ? (
              <Heart size={24} />
            ) : (
              <AlertTriangle size={24} />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold">Plant Health Status</h2>
            <p className="text-lg mt-1">
              {plantHealthInfo.isHealthy ? 'Generally Healthy' : 'Needs Attention'}
            </p>
          </div>
        </div>
        <div className="w-full bg-white/30 rounded-full h-2 mt-4 overflow-hidden">
          <div 
            className={`h-full ${plantHealthInfo.isHealthy ? 'bg-white' : 'bg-[#E8FFD7]'} rounded-full`} 
            style={{ width: `${formatProbability(plantHealthInfo.probability)}%` }}
          ></div>
        </div>
        <p className="text-right text-sm mt-1">
          {formatProbability(plantHealthInfo.probability)}% confidence
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Always show healthy status message */}
        {plantHealthInfo.isHealthy && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Heart size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800">Your plant is generally healthy!</h3>
                <p className="text-green-600 mt-1">
                  The overall health assessment is positive, but check below for any minor issues detected.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Show disease information if any exist */}
        {plantHealthInfo.diseases && plantHealthInfo.diseases.length > 0 ? (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#3E5F44] mb-3 flex items-center">
                <AlertTriangle size={20} className="mr-2" /> 
                {plantHealthInfo.isHealthy ? 'Minor Issues Detected' : 'Detected Issues'}
              </h3>
              <p className="text-[#5E936C]">
                We've found {plantHealthInfo.diseases.length} potential issue{plantHealthInfo.diseases.length !== 1 ? 's' : ''} with your plant.
                {plantHealthInfo.isHealthy && ' These are minor and don\'t significantly affect overall plant health.'}
              </p>
            </div>

            <div className="space-y-4">
              {plantHealthInfo.diseases.map((disease, index) => (
                <div key={disease.id} className="border border-[#93DA97] rounded-xl overflow-hidden">
                  {/* Disease Header */}
                  <div 
                    className="bg-[#f8fdf4] p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDisease(disease.id)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#E8FFD7] rounded-lg flex items-center justify-center text-[#3E5F44] mr-4">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3E5F44] capitalize">{disease.name}</h4>
                        <div className="flex items-center mt-1">
                          <div className="w-20 h-2 bg-[#E8FFD7] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#5E936C] rounded-full" 
                              style={{ width: `${formatProbability(disease.probability)}%` }}
                            ></div>
                          </div>
                          <span className="text-[#5E936C] text-sm ml-2">
                            {formatProbability(disease.probability)}% probability
                          </span>
                        </div>
                        {plantHealthInfo.isHealthy && disease.probability < 0.2 && (
                          <span className="inline-block bg-[#E8FFD7] text-[#3E5F44] text-xs px-2 py-1 rounded-full mt-1">
                            Minor concern
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-[#5E936C]">
                      {expandedDisease === disease.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Expanded Disease Details */}
                  {expandedDisease === disease.id && (
                    <div className="p-4 bg-white">
                      {/* Description */}
                      {disease.details?.description && (
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-[#3E5F44] mb-2 flex items-center">
                            <Info size={16} className="mr-1" /> Description
                          </h5>
                          <p className="text-[#5E936C] text-sm">{disease.details.description}</p>
                        </div>
                      )}

                      {/* Common Names */}
                      {disease.details?.common_names && disease.details.common_names.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-[#3E5F44] mb-2">Also Known As</h5>
                          <div className="flex flex-wrap gap-2">
                            {disease.details.common_names.map((name, i) => (
                              <span key={i} className="bg-[#E8FFD7] text-[#3E5F44] px-3 py-1 rounded-full text-xs">
                                {name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Similar Images */}
                      {disease.similar_images && disease.similar_images.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-[#3E5F44] mb-2">Similar Cases</h5>
                          <div className="grid grid-cols-4 gap-3">
                            {disease.similar_images.slice(0, 2).map((image, i) => (
                              <div key={image.id} className="rounded-lg overflow-hidden border border-[#E8FFD7]">
                                <img 
                                  src={image.url} 
                                  alt={`Similar example ${i + 1}`}
                                  className="w-full h-60 object-cover"
                                />
                                <div className="p-2 bg-[#f8fdf4]">
                                  <p className="text-xs text-[#5E936C]">
                                    Similarity: {(image.similarity * 100).toFixed(1)}%
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* External Link */}
                      {disease.details?.url && (
                        <div>
                          <a 
                            href={disease.details.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#5E936C] hover:text-[#3E5F44] text-sm"
                          >
                            <ExternalLink size={14} className="mr-1" /> 
                            More information about {disease.name}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Treatment Recommendations - Show different advice based on health status */}
            <div className="mt-8 bg-[#f8fdf4] p-5 rounded-xl">
              <h3 className="text-lg font-semibold text-[#3E5F44] mb-3 flex items-center">
                <Zap size={20} className="mr-2" /> 
                {plantHealthInfo.isHealthy ? 'Preventative Care' : 'Recommended Actions'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
                    <Shield size={16} className="text-[#3E5F44]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3E5F44]">
                      {plantHealthInfo.isHealthy ? 'Prevention' : 'Immediate Steps'}
                    </h4>
                    <ul className="text-sm text-[#5E936C] list-disc list-inside mt-1">
                      {plantHealthInfo.isHealthy ? (
                        <>
                          <li>Maintain current care routine</li>
                          <li>Monitor for any changes</li>
                          <li>Ensure proper light and water</li>
                        </>
                      ) : (
                        <>
                          <li>Isolate the plant to prevent spread</li>
                          <li>Remove affected leaves or parts</li>
                          <li>Adjust watering schedule if needed</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
                    <Clock size={16} className="text-[#3E5F44]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3E5F44]">Monitoring</h4>
                    <ul className="text-sm text-[#5E936C] list-disc list-inside mt-1">
                      <li>Check regularly for changes</li>
                      <li>Monitor new growth</li>
                      <li>{plantHealthInfo.isHealthy ? 'Maintain current practices' : 'Consider treatment if condition worsens'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Additional note for healthy plants with minor issues */}
              {plantHealthInfo.isHealthy && hasSignificantDiseases && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-700 text-sm">
                    <strong>Note:</strong> While your plant is generally healthy, some issues were detected that may need attention if they persist or worsen.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          // No diseases detected
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#E8FFD7] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-[#3E5F44]" />
            </div>
            <h3 className="text-xl font-semibold text-[#3E5F44] mb-2">No issues detected!</h3>
            <p className="text-[#5E936C]">
              Your plant appears to be in perfect health with no detected diseases or problems.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthInfo;