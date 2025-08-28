import React, { useState } from "react";
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
  Zap,
} from "lucide-react";
import { usePlantStore } from "../store/usePlantStore";
import GeneralInfo from "./GeneralInfo";
import HealthInfo from "./HealthInfo";
import ClassificationInfo from "./ClassificationInfo";

const PlantCard = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [expandedDisease, setExpandedDisease] = useState(null);
  const { plantInfo } = usePlantStore();
  console.log(plantInfo);

  const plantGeneralInfo = {
    name: plantInfo?.result.classification.suggestions[0].name,
    probability: plantInfo?.result.classification.suggestions[0].probability,
    similar_image:
      plantInfo?.result.classification.suggestions[0].similar_images[0].url,
    description:
      plantInfo?.result.classification.suggestions[0].details.wiki_description
        .value,
    class:
      plantInfo?.result.classification.suggestions[0].details.taxonomy.class,
    family:
      plantInfo?.result.classification.suggestions[0].details.taxonomy.family,
    genus:
      plantInfo?.result.classification.suggestions[0].details.taxonomy.genus,
    kingdom:
      plantInfo?.result.classification.suggestions[0].details.taxonomy.kingdom,
    order:
      plantInfo?.result.classification.suggestions[0].details.taxonomy.order,
    phylum:
      plantInfo?.result.classification.suggestions[0].details.taxonomy.phylum,
    wikiUrl: plantInfo?.result.classification.suggestions[0].details.url,
    lightCndn:
      plantInfo?.result.classification.suggestions[0].details
        .best_light_condition,
    soilType:
      plantInfo?.result.classification.suggestions[0].details.best_soil_type,
    commonNames:
      plantInfo?.result.classification.suggestions[0].details.common_names,
    commonUses:
      plantInfo?.result.classification.suggestions[0].details.common_uses,
    edibleParts:
      plantInfo?.result.classification.suggestions[0].details.edible_parts,
    propagationMethods:
      plantInfo?.result.classification.suggestions[0].details
        .propagation_methods,
  };

  const plantHealthInfo = {
    isHealthy: plantInfo?.result.is_healthy.binary,
    probability: plantInfo?.result.is_healthy.probability,
    diseases: plantInfo?.result.disease.suggestions, // array of dieases with details of that disease
  };

  const plantClassificationInfo = plantInfo?.result.classification.suggestions.map((tc) => ({
    name: tc.name,
    probability: tc.probability,
    class: tc.details.taxonomy.class,
    family: tc.details.taxonomy.family,
    kingdom: tc.details.taxonomy.kingdom,
    genus: tc.details.taxonomy.genus,
    order: tc.details.taxonomy.order,
    phylum: tc.details.taxonomy.phylum,
    similar_images: tc.similar_images
  }))




  console.log(plantClassificationInfo);
  

  const toggleDisease = (id) => {
    if (expandedDisease === id) {
      setExpandedDisease(null);
    } else {
      setExpandedDisease(id);
    }
  };

  // Tab components

  const Classification = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#3E5F44]">
        Taxonomic Classification
      </h3>

      <div className="bg-[#f8fdf4] p-5 rounded-xl">
        <div className="space-y-4">
          {Object.entries(plantData.classification).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between py-2 border-b border-[#E8FFD7] last:border-b-0"
            >
              <span className="text-[#5E936C] capitalize">{key}</span>
              <span className="text-[#3E5F44] font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#3E5F44] mb-3">
          About This Classification
        </h3>
        <p className="text-[#5E936C]">
          Leucojum vernum is part of the Amaryllidaceae family, which includes
          other spring-flowering bulbs like daffodils and snowdrops. The genus
          name "Leucojum" comes from the Greek words for "white" and "violet",
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

  return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 min-w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#3E5F44] mb-3">
            Plant Information Dashboard
          </h1>
          <p className="text-[#5E936C]">
            Comprehensive details about your plant's classification, health, and
            general information
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Navigation Tabs */}
          <div className="flex border-b border-[#E8FFD7]">
            <button
              onClick={() => setActiveTab("general")}
              className={`flex-1 py-4 font-medium flex items-center justify-center transition-all duration-200 ${
                activeTab === "general"
                  ? "text-[#3E5F44] border-b-2 border-[#3E5F44] bg-[#f8fdf4]"
                  : "text-[#5E936C] hover:text-[#3E5F44] hover:bg-[#f8fdf4]"
              }`}
            >
              <BookOpen size={18} className="mr-2" /> General Info
            </button>
            <button
              onClick={() => setActiveTab("classification")}
              className={`flex-1 py-4 font-medium flex items-center justify-center transition-all duration-200 ${
                activeTab === "classification"
                  ? "text-[#3E5F44] border-b-2 border-[#3E5F44] bg-[#f8fdf4]"
                  : "text-[#5E936C] hover:text-[#3E5F44] hover:bg-[#f8fdf4]"
              }`}
            >
              <Sparkles size={18} className="mr-2" /> Classification
            </button>
            <button
              onClick={() => setActiveTab("health")}
              className={`flex-1 py-4 font-medium flex items-center justify-center transition-all duration-200 ${
                activeTab === "health"
                  ? "text-[#3E5F44] border-b-2 border-[#3E5F44] bg-[#f8fdf4]"
                  : "text-[#5E936C] hover:text-[#3E5F44] hover:bg-[#f8fdf4]"
              }`}
            >
              <Heart size={18} className="mr-2" /> Health
            </button>
          </div>

          {/* Content Area with Gap */}
          <div className="p-6 mt-4">
            {activeTab === "general" && (
              <GeneralInfo plantGeneralInfo={plantGeneralInfo} />
            )}
            {activeTab === "classification" && <ClassificationInfo plantClassificationInfo={plantClassificationInfo} />}
            {activeTab === "health" && (
              <HealthInfo plantHealthInfo={plantHealthInfo} />
            )}
          </div>
        </div>

        {/* Footer Note */}
      </div>
    </div>
  );
};

export default PlantCard;
