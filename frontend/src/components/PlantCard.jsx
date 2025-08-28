import React, { useState } from 'react';
import {
  Leaf,
  Heart,
  BookOpen,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Info,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  CheckCircle,
  XCircle,
  Droplets,
  Sun,
  Thermometer,
  Zap
} from 'lucide-react';
import { usePlantStore } from '../store/usePlantStore';
import GeneralInfo from './GeneralInfo';

const PlantCard = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [expandedDisease, setExpandedDisease] = useState(null);
  const {plantInfo} = usePlantStore()
  console.log(plantInfo)


  const plantGeneralInfo = {
    name: plantInfo?.result.classification.suggestions[0].name ,
    probability: plantInfo?.result.classification.suggestions[0].probability,
    similar_image:  plantInfo?.result.classification.suggestions[0].similar_images[0].url,
    description: plantInfo?.result.classification.suggestions[0].details.wiki_description.value,
    class: plantInfo?.result.classification.suggestions[0].details.taxonomy.class,
    family: plantInfo?.result.classification.suggestions[0].details.taxonomy.family,
    genus: plantInfo?.result.classification.suggestions[0].details.taxonomy.genus,
    kingdom: plantInfo?.result.classification.suggestions[0].details.taxonomy.kingdom,
    order: plantInfo?.result.classification.suggestions[0].details.taxonomy.order,
    phylum: plantInfo?.result.classification.suggestions[0].details.taxonomy.phylum,
    wikiUrl: plantInfo?.result.classification.suggestions[0].details.url,
    lightCndn: plantInfo?.result.classification.suggestions[0].details.best_light_condition,
    soilType: plantInfo?.result.classification.suggestions[0].details.best_soil_type,
    commonNames: plantInfo?.result.classification.suggestions[0].details.common_names,
    commonUses: plantInfo?.result.classification.suggestions[0].details.common_uses,
    edibleParts: plantInfo?.result.classification.suggestions[0].details.edible_parts,
    propagationMethods: plantInfo?.result.classification.suggestions[0].details.propagation_methods,
  }

  console.log(plantGeneralInfo)
  // Sample plant data

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

  // Tab components
  const GeneralInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="w-32 text-[#5E936C]">Family</div>
              <div className="text-[#3E5F44] font-medium">{plantInfo?.result.classification.suggestions[0].details.taxonomy.family}</div>
            </div>
            <div className="flex">
              <div className="w-32 text-[#5E936C]">Origin</div>
              <div className="text-[#3E5F44] font-medium flex items-center">
                <MapPin size={14} className="mr-1" /> {plantData.general.origin}
              </div>
            </div>
            <div className="flex">
              <div className="w-32 text-[#5E936C]">Lifespan</div>
              <div className="text-[#3E5F44] font-medium flex items-center">
                <Clock size={14} className="mr-1" /> {plantData.general.lifespan}
              </div>
            </div>
            <div className="flex">
              <div className="w-32 text-[#5E936C]">Size</div>
              <div className="text-[#3E5F44] font-medium">{plantData.general.size}</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">Common Names</h3>
          <div className="flex flex-wrap gap-2">
            {plantData.general.commonNames.map((name, index) => (
              <span key={index} className="bg-[#E8FFD7] text-[#3E5F44] px-3 py-1.5 rounded-full text-sm">
                {name}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold text-[#3E5F44] mt-5 mb-3">Toxicity</h3>
          <div className="flex items-start text-[#5E936C]">
            <AlertTriangle size={16} className="mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
            <span>{plantData.general.toxicity}</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">Description</h3>
        <p className="text-[#5E936C] leading-relaxed">{plantData.general.description}</p>
      </div>
      
      <div className="bg-[#f8fdf4] p-5 rounded-xl">
        <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">Care Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
              <Droplets size={20} className="text-[#3E5F44]" />
            </div>
            <div>
              <h4 className="font-medium text-[#3E5F44]">Water</h4>
              <p className="text-sm text-[#5E936C]">Keep soil consistently moist during growth period</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
              <Sun size={20} className="text-[#3E5F44]" />
            </div>
            <div>
              <h4 className="font-medium text-[#3E5F44]">Light</h4>
              <p className="text-sm text-[#5E936C]">Partial shade to full sun</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
              <Thermometer size={20} className="text-[#3E5F44]" />
            </div>
            <div>
              <h4 className="font-medium text-[#3E5F44]">Temperature</h4>
              <p className="text-sm text-[#5E936C]">Hardy in zones 4-9</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
              <Shield size={20} className="text-[#3E5F44]" />
            </div>
            <div>
              <h4 className="font-medium text-[#3E5F44]">Soil</h4>
              <p className="text-sm text-[#5E936C]">Well-draining, humus-rich soil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Classification = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#3E5F44]">Taxonomic Classification</h3>
      
      <div className="bg-[#f8fdf4] p-5 rounded-xl">
        <div className="space-y-4">
          {Object.entries(plantData.classification).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-[#E8FFD7] last:border-b-0">
              <span className="text-[#5E936C] capitalize">{key}</span>
              <span className="text-[#3E5F44] font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">About This Classification</h3>
        <p className="text-[#5E936C]">
          Leucojum vernum is part of the Amaryllidaceae family, which includes other spring-flowering bulbs like
          daffodils and snowdrops. The genus name "Leucojum" comes from the Greek words for "white" and "violet",
          referring to the flower color and scent of some species.
        </p>
      </div>
      
      <div className="bg-[#E8FFD7] p-5 rounded-xl">
        <a 
          href="https://en.wikipedia.org/wiki/Leucojum_vernum" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-[#3E5F44] font-medium"
        >
          <ExternalLink size={16} className="mr-2" />
          Learn more about Leucojum vernum on Wikipedia
        </a>
      </div>
    </div>
  );

  const HealthInformation = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
            <Heart size={32} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-800">Plant Health Status: {plantData.health.status}</h3>
            <p className="text-green-600">Last checkup: {plantData.health.lastCheckup}</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">Detected Issues</h3>
        
        {plantData.health.issues.length > 0 ? (
          <div className="space-y-4">
            {plantData.health.issues.map((issue, index) => (
              <div key={issue.id} className="border border-[#93DA97] rounded-xl overflow-hidden">
                <div 
                  className="bg-[#f8fdf4] p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDisease(issue.id)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#E8FFD7] rounded-lg flex items-center justify-center text-[#3E5F44] mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3E5F44] capitalize">{issue.name}</h4>
                      <div className="flex items-center mt-1">
                        <div className="w-24 h-2 bg-[#E8FFD7] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#5E936C] rounded-full" 
                            style={{ width: `${formatProbability(issue.probability)}%` }}
                          ></div>
                        </div>
                        <span className="text-[#5E936C] text-sm ml-2">
                          {formatProbability(issue.probability)}% probability
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#5E936C]">
                    {expandedDisease === issue.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {expandedDisease === issue.id && (
                  <div className="p-4 bg-white">
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-[#3E5F44] mb-2 flex items-center">
                        <Info size={16} className="mr-1" /> Description
                      </h5>
                      <p className="text-[#5E936C] text-sm">{issue.details.description}</p>
                    </div>

                    {issue.details.common_names && issue.details.common_names.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-[#3E5F44] mb-2">Also Known As</h5>
                        <div className="flex flex-wrap gap-2">
                          {issue.details.common_names.map((name, i) => (
                            <span key={i} className="bg-[#E8FFD7] text-[#3E5F44] px-3 py-1 rounded-full text-xs">
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-[#3E5F44] mb-2">Similar Images</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {issue.similar_images.map((image, i) => (
                          <div key={image.id} className="rounded-lg overflow-hidden border border-[#E8FFD7]">
                            <img 
                              src={image.url_small} 
                              alt={`Similar example ${i + 1}`}
                              className="w-full h-32 object-cover"
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

                    {issue.details.url && (
                      <div>
                        <a 
                          href={issue.details.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#5E936C] hover:text-[#3E5F44] text-sm"
                        >
                          <ExternalLink size={14} className="mr-1" /> 
                          More information about {issue.name}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <p className="text-green-700">No health issues detected! Your plant appears to be in excellent condition.</p>
          </div>
        )}
      </div>
      
      <div className="bg-[#f8fdf4] p-5 rounded-xl">
        <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">Care Recommendations</h3>
        <p className="text-[#5E936C] mb-4">{plantData.health.nextRecommendation}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
              <Zap size={20} className="text-[#3E5F44]" />
            </div>
            <div>
              <h4 className="font-medium text-[#3E5F44]">Immediate Action</h4>
              <p className="text-sm text-[#5E936C]">Check soil moisture level</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
              <Clock size={20} className="text-[#3E5F44]" />
            </div>
            <div>
              <h4 className="font-medium text-[#3E5F44]">Next Schedule</h4>
              <p className="text-sm text-[#5E936C]">Fertilize in 2 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 min-w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#3E5F44] mb-3">Plant Information Dashboard</h1>
          <p className="text-[#5E936C]">Comprehensive details about your plant's classification, health, and general information</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#E8FFD7]">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex-1 py-4 font-medium flex items-center justify-center transition-all duration-200 ${activeTab === 'general' ? 'text-[#3E5F44] border-b-2 border-[#3E5F44] bg-[#f8fdf4]' : 'text-[#5E936C] hover:text-[#3E5F44] hover:bg-[#f8fdf4]'}`}
            >
              <BookOpen size={18} className="mr-2" /> General Info
            </button>
            <button
              onClick={() => setActiveTab('classification')}
              className={`flex-1 py-4 font-medium flex items-center justify-center transition-all duration-200 ${activeTab === 'classification' ? 'text-[#3E5F44] border-b-2 border-[#3E5F44] bg-[#f8fdf4]' : 'text-[#5E936C] hover:text-[#3E5F44] hover:bg-[#f8fdf4]'}`}
            >
              <Sparkles size={18} className="mr-2" /> Classification
            </button>
            <button
              onClick={() => setActiveTab('health')}
              className={`flex-1 py-4 font-medium flex items-center justify-center transition-all duration-200 ${activeTab === 'health' ? 'text-[#3E5F44] border-b-2 border-[#3E5F44] bg-[#f8fdf4]' : 'text-[#5E936C] hover:text-[#3E5F44] hover:bg-[#f8fdf4]'}`}
            >
              <Heart size={18} className="mr-2" /> Health
            </button>
          </div>

          {/* Content Area with Gap */}
          <div className="p-6 mt-4">
            {activeTab === 'general' && <GeneralInfo plantGeneralInfo={plantGeneralInfo} />}
            {activeTab === 'classification' && <Classification />}
            {activeTab === 'health' && <HealthInformation />}
          </div>
        </div>

        {/* Footer Note */}
      </div>
    </div>
  );
};

export default PlantCard;