import React from "react";
import {
  Leaf,
  BookOpen,
  ExternalLink,
  Sun,
  Sprout,
  Trees,
  Sparkles,
} from "lucide-react";

const GeneralInfo = ({ plantGeneralInfo }) => {
  if (!plantGeneralInfo) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        <div className="text-[#5E936C]">No plant information available</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

      {/* Header with Image */}

      <div className="relative h-84 overflow-hidden">
        <img
          src={plantGeneralInfo.similar_image}
          alt={plantGeneralInfo.name}
          className="w-[100%] h-[100%] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          <h2 className="text-2xl font-bold">{plantGeneralInfo.name}</h2>
          <div className="flex items-center mt-2">
            <div className="w-24 h-2 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#93DA97] rounded-full"
                style={{
                  width: `${(plantGeneralInfo.probability * 100).toFixed(1)}%`,
                }}
              ></div>
            </div>
            <span className="ml-3 text-sm">
              {(plantGeneralInfo.probability * 100).toFixed(1)}% match
              confidence
            </span>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        {/* Common Names */}

        {plantGeneralInfo.commonNames &&
          plantGeneralInfo.commonNames.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#5E936C] mb-2">
                Also known as
              </h3>
              <div className="flex flex-wrap gap-2">
                {plantGeneralInfo.commonNames.map((name, index) => (
                  <span
                    key={index}
                    className="bg-[#E8FFD7] text-[#3E5F44] px-3 py-1.5 rounded-full text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

        {/* Description */}

        {plantGeneralInfo.description && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-[#5E936C] mb-2 flex items-center">
              <BookOpen size={16} className="mr-1" /> Description
            </h3>
            <p className="text-[#3E5F44] leading-relaxed">
              {plantGeneralInfo.description}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Taxonomy */}
          <div>
            <h3 className="text-sm font-medium text-[#5E936C] mb-3 flex items-center">
              <Sparkles size={16} className="mr-1" /> Classification
            </h3>
            <div className="bg-[#f8fdf4] p-4 rounded-xl">
              <div className="space-y-2">
                {plantGeneralInfo.kingdom && (
                  <div className="flex justify-between">
                    <span className="text-[#5E936C]">Kingdom</span>
                    <span className="text-[#3E5F44] font-medium">
                      {plantGeneralInfo.kingdom}
                    </span>
                  </div>
                )}
                {plantGeneralInfo.phylum && (
                  <div className="flex justify-between">
                    <span className="text-[#5E936C]">Phylum</span>
                    <span className="text-[#3E5F44] font-medium">
                      {plantGeneralInfo.phylum}
                    </span>
                  </div>
                )}
                {plantGeneralInfo.class && (
                  <div className="flex justify-between">
                    <span className="text-[#5E936C]">Class</span>
                    <span className="text-[#3E5F44] font-medium">
                      {plantGeneralInfo.class}
                    </span>
                  </div>
                )}
                {plantGeneralInfo.order && (
                  <div className="flex justify-between">
                    <span className="text-[#5E936C]">Order</span>
                    <span className="text-[#3E5F44] font-medium">
                      {plantGeneralInfo.order}
                    </span>
                  </div>
                )}
                {plantGeneralInfo.family && (
                  <div className="flex justify-between">
                    <span className="text-[#5E936C]">Family</span>
                    <span className="text-[#3E5F44] font-medium">
                      {plantGeneralInfo.family}
                    </span>
                  </div>
                )}
                {plantGeneralInfo.genus && (
                  <div className="flex justify-between">
                    <span className="text-[#5E936C]">Genus</span>
                    <span className="text-[#3E5F44] font-medium">
                      {plantGeneralInfo.genus}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* Growing Conditions */}
          <div>
            <h3 className="text-sm font-medium text-[#5E936C] mb-3 flex items-center">
              <Sprout size={16} className="mr-1" /> Growing Conditions
            </h3>
            <div className="space-y-3">
              {plantGeneralInfo.lightCndn && (
                <div className="flex items-start">
                  <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
                    <Sun size={16} className="text-[#3E5F44]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3E5F44]">Light</h4>
                    <p className="text-sm text-[#5E936C]">
                      {plantGeneralInfo.lightCndn}
                    </p>
                  </div>
                </div>
              )}

              {plantGeneralInfo.soilType && (
                <div className="flex items-start">
                  <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
                    <Trees size={16} className="text-[#3E5F44]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3E5F44]">Soil</h4>
                    <p className="text-sm text-[#5E936C]">
                      {plantGeneralInfo.soilType}
                    </p>
                  </div>
                </div>
              )}

              {plantGeneralInfo.edibleParts && (
                <div className="flex items-start">
                  <div className="bg-[#E8FFD7] p-2 rounded-lg mr-3">
                    <Leaf size={16} className="text-[#3E5F44]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3E5F44]">Edible Parts</h4>
                    <p className="text-sm text-[#5E936C]">
                      {plantGeneralInfo.edibleParts}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Common Uses */}
        {plantGeneralInfo.commonUses && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-[#5E936C] mb-2">
              Common Uses
            </h3>
            <p className="text-[#3E5F44]">{plantGeneralInfo.commonUses}</p>
          </div>
        )}

        {/* Propagation Methods */}
        {plantGeneralInfo.propagationMethods && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-[#5E936C] mb-2">
              Propagation Methods
            </h3>
            {plantGeneralInfo.propagationMethods.map((pm,index) => (
              <p className="text-[#3E5F44]" key={index}>
                {pm}
              </p>
            ))}
          </div>
        )}

        {/* Wikipedia Link */}
        {plantGeneralInfo.wikiUrl && (
          <div className="mt-6 pt-4 border-t border-[#E8FFD7]">
            <a
              href={plantGeneralInfo.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#5E936C] hover:text-[#3E5F44] transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              Learn more on Wikipedia
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;
