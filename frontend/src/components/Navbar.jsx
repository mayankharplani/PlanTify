import React from "react";
import {Leaf,History,Sparkles,BookOpen} from "lucide-react"

const Navbar = () => {
  return (
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#3E5F44] text-[#E8FFD7] w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
            <Leaf size={28} />
          </div>
          <h1 className="text-2xl font-bold text-[#3E5F44]">PlanTify</h1>
        </div>

        <nav className="flex lg:space-x-8 md:space-x-6 space-x-4">
          <a
            href="/"
            className="text-[#5E936C] font-medium hover:text-[#3E5F44] transition-colors flex items-center"
          >
            <Sparkles size={18} className="mr-1" /> Identify
          </a>
          <a
            href="/history"
            className="text-[#5E936C] font-medium hover:text-[#3E5F44] transition-colors flex items-center"
          >
            <History size={18} className="mr-1" /> History
          </a>
        </nav>
      </header>
  );
};

export default Navbar;
