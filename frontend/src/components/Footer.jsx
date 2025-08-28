import React from 'react'
import {Leaf} from "lucide-react"

const Footer = () => {
  return (
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
  )
}

export default Footer