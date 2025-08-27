import React, { useState, useRef } from "react";
import {
  Camera,
  Leaf,
  BookOpen,
  History,
  ChevronRight,
  Upload,
  X,
  Sparkles,
  Search,
  Zap,
  Cloud,
} from "lucide-react";
import { usePlantStore } from "../store/usePlantStore";

const MainPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const { isLoading, plantInfo, getInfo } = usePlantStore();
  const uploadRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mock plant data
  const plantData = {
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    commonNames: ["Swiss Cheese Plant", "Split-leaf Philodendron"],
    description:
      "A species of flowering plant native to tropical forests of southern Mexico. Known for its large, glossy leaves with natural holes.",
    care: {
      water:
        "Water every 1-2 weeks, allowing soil to dry out between waterings",
      light: "Thrives in bright, indirect light",
      humidity: "Prefers high humidity environments",
      temperature: "Ideal temperature between 65-85°F (18-30°C)",
    },
    health: "Healthy",
    toxicity: "Toxic to pets if ingested",
  };

  const handleSubmit = () => {
    console.log(selectedImage)
  }

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const resetImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage); // cleanup
    }
    setSelectedImage(null);
  };

  const handleScroll = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  return (
    <div className="min-h-screen   font-sans text-[#2c3e30]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#3E5F44] text-[#E8FFD7] w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
            <Leaf size={28} />
          </div>
          <h1 className="text-2xl font-bold text-[#3E5F44]">PlanTify</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-[#5E936C] font-medium hover:text-[#3E5F44] transition-colors flex items-center"
          >
            <Sparkles size={18} className="mr-1" /> Identify
          </a>
          <a
            href="#"
            className="text-[#5E936C] font-medium hover:text-[#3E5F44] transition-colors flex items-center"
          >
            <History size={18} className="mr-1" /> History
          </a>
          <a
            href="#"
            className="text-[#5E936C] font-medium hover:text-[#3E5F44] transition-colors flex items-center"
          >
            <BookOpen size={18} className="mr-1" /> About Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E5F44] mb-6">
            Discover the World of Plants
          </h2>
          <p className="text-xl text-[#5E936C] mb-10 leading-relaxed">
            Identify plants instantly by uploading a photo. Learn about plant
            care, species, and more with our advanced plant recognition
            technology.
          </p>
          <button
            // onClick={() => document.getElementById('file-upload').click()}
            onClick={handleScroll}
            className="bg-gradient-to-r from-[#3E5F44] to-[#5E936C] text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center mx-auto space-x-3 hover:from-[#5E936C] hover:to-[#3E5F44] transition-all shadow-lg transform hover:-translate-y-1"
          >
            {/* <Camera size={22} /> */}
            <span>Scan a Plant</span>
            <Zap size={18} className="ml-1" />
          </button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </section>

        {/* Scanner Section */}
        <section ref={uploadRef} className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Upload Area */}
            <div className="flex-1 bg-gradient-to-br from-[#5E936C] to-[#93DA97] rounded-2xl p-8 text-white shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl p-3 mb-4">
                  <Upload size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Upload Plant Image</h3>
                <p className="opacity-90">
                  Drag & drop or click to upload a clear photo of a plant
                </p>
              </div>
              
              <div
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition 
        ${
          isDragging
            ? "border-green-500 bg-green-50"
            : "border-gray-400 bg-gray-100"
        }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-input").click()}
              >
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  accept="image/*"
                  onChange={handleChange}
                />

                {selectedImage ? (
                  <div className="relative inline-block">
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="max-h-72 mx-auto rounded-lg shadow-md"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        resetImage();
                      }}
                      className="absolute -top-3 -right-3 bg-white text-red-500 p-1.5 rounded-full shadow-md hover:bg-gray-200"
                    >
                      <X />
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-6xl mb-4">🌿</div>
                    <p className="text-gray-600">
                      Drag & drop or click to upload
                    </p>
                  </div>
                )}
              </div>
              {
                selectedImage ? <div className="flex items-center justify-center">
                <button 
                onClick={handleSubmit}
                className="mt-8 w-auto bg-white text-[#5E936C] px-5 py-2 rounded-xl cursor-pointer">Submit</button>
              </div> : <p></p>
              }
            </div>

            {/* Results Area */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#3E5F44] mb-6 flex items-center">
                <Search size={24} className="mr-2" /> Plant Information
              </h3>

              {showResults ? (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-full sm:w-40 h-40 bg-gradient-to-r from-[#c1dfc4] to-[#93DA97] rounded-2xl flex items-center justify-center text-[#3E5F44] font-bold shadow-md">
                      Plant Image
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-[#3E5F44]">
                        {plantData.name}
                      </h4>
                      <p className="text-[#5E936C] italic mb-3">
                        {plantData.scientificName}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {plantData.commonNames.map((name, index) => (
                          <span
                            key={index}
                            className="bg-[#E8FFD7] text-[#3E5F44] px-3 py-1.5 rounded-full text-sm font-medium"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#f8fdf4] p-5 rounded-2xl">
                      <h5 className="text-lg font-semibold text-[#3E5F44] mb-3 flex items-center">
                        <Leaf size={20} className="mr-2" /> Description
                      </h5>
                      <p className="text-[#5E936C]">{plantData.description}</p>
                    </div>

                    <div className="bg-[#f8fdf4] p-5 rounded-2xl">
                      <h5 className="text-lg font-semibold text-[#3E5F44] mb-3">
                        Plant Health
                      </h5>
                      <div className="inline-flex items-center bg-[#E8FFD7] text-[#3E5F44] px-4 py-2 rounded-full font-medium">
                        {plantData.health}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f8fdf4] p-5 rounded-2xl">
                    <h5 className="text-lg font-semibold text-[#3E5F44] mb-3">
                      Care Instructions
                    </h5>
                    <ul className="space-y-3">
                      {Object.entries(plantData.care).map(([key, value]) => (
                        <li key={key} className="flex items-start">
                          <div className="w-2 h-2 bg-[#93DA97] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <span className="text-[#5E936C]">
                            <span className="font-medium capitalize">
                              {key}:
                            </span>{" "}
                            {value}
                          </span>
                        </li>
                      ))}
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[#93DA97] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-[#5E936C]">
                          <span className="font-medium">Toxicity:</span>{" "}
                          {plantData.toxicity}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 opacity-30">🔍</div>
                  <p className="text-[#5E936C]">
                    Your results will appear here after scanning
                  </p>
                  <p className="text-sm text-[#93DA97] mt-2">
                    We support identification of over 20,000 plant species
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-[#3E5F44] text-center mb-4">
            Why Choose PlantScan?
          </h3>
          <p className="text-[#5E936C] text-center max-w-2xl mx-auto mb-12">
            Our advanced AI technology makes plant identification simple and
            accurate for everyone
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles size={28} />,
                title: "Accurate Identification",
                description:
                  "Our AI technology accurately identifies thousands of plant species from around the world.",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Plant Care Guide",
                description:
                  "Get detailed information about plant care, watering needs, sunlight requirements, and more.",
              },
              {
                icon: <History size={28} />,
                title: "Scan History",
                description:
                  "Keep track of all your previous plant scans and create your personal plant collection.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white"
              >
                <div className="w-16 h-16 bg-[#E8FFD7] rounded-xl flex items-center justify-center text-[#3E5F44] mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#3E5F44] mb-3">
                  {feature.title}
                </h4>
                <p className="text-[#5E936C] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gradient-to-r from-[#E8FFD7] to-[#d0f0b6] rounded-2xl p-10 shadow-inner mb-16">
          <h3 className="text-3xl font-bold text-[#3E5F44] text-center mb-4">
            How It Works
          </h3>
          <p className="text-[#5E936C] text-center max-w-2xl mx-auto mb-14">
            Identify any plant in just three simple steps
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {[
              {
                step: "1",
                title: "Take a Photo",
                description:
                  "Capture a clear picture of a plant you want to identify",
              },
              {
                step: "2",
                title: "Upload & Scan",
                description:
                  "Our AI analyzes the image to identify the plant species",
              },
              {
                step: "3",
                title: "Get Results",
                description:
                  "Receive detailed information about the plant and care instructions",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center flex-1 flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-3xl font-bold text-[#3E5F44] mb-6 shadow-md">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-[#3E5F44] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#5E936C]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E5F44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            <div className="max-w-md">
              <div className="flex items-center space-x-3 mb-5">
                <Leaf size={28} />
                <span className="text-2xl font-bold">PlantScan</span>
              </div>
              <p className="text-[#E8FFD7] mb-6">
                Identify plants with a snap. The most accurate plant recognition
                app.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold">in</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h5 className="font-semibold mb-5 text-lg">Product</h5>
                <ul className="space-y-3 text-[#E8FFD7]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Examples
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-5 text-lg">Company</h5>
                <ul className="space-y-3 text-[#E8FFD7]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-5 text-lg">Support</h5>
                <ul className="space-y-3 text-[#E8FFD7]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#5E936C] pt-8 text-center text-[#E8FFD7]">
            <p>© 2023 PlantScan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
