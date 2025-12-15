import React from 'react';
import { Globe, Users, Shield, Phone, Mail, MapPin } from 'lucide-react';
import Monex from '/src/assets/Monex-logo2.png';
const Footer = () =>{
    return (
        <footer className="bg-black border-t border-blue-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto ml-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={Monex} alt="Monex Logo" className='h-28 w-32 ' />
             </div>
              <p className="text-gray-400 text-lg mb-4">
                Professional financial services for a secure and prosperous future.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-7 h-7 text-gray-400 hover:text-blue-300 cursor-pointer transition-colors" />
                <Users className="w-7 h-7 text-gray-400 hover:text-blue-300 cursor-pointer transition-colors" />
                <Shield className="w-7 h-7 text-gray-400 hover:text-blue-300 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-blue-300 transition-colors">Investment Management</a></li>
                <li><a href="#services" className="hover:text-blue-300 transition-colors">Risk Assessment</a></li>
                <li><a href="#tools" className="hover:text-blue-300 transition-colors">Wealth Planning</a></li>
                <li><a href="#tools" className="hover:text-blue-300 transition-colors">Portfolio Analysis</a></li>
                <li><a href="#services" className="hover:text-blue-300 transition-colors">Corporate Finance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-blue-300 transition-colors">About Us</a></li>
                <li><a href="#about" className="hover:text-blue-300 transition-colors">Our Team</a></li>
                <li><a href="#contact" className="hover:text-blue-300 transition-colors">Careers</a></li>
                <li><a href="#about" className="hover:text-blue-300 transition-colors">News</a></li>
                <li><a href="#about" className="hover:text-blue-300 transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@monex.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Financial Nainital, Uttarakhand</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800/50 mt-8 pt-8 text-center text-gray-400">
            <p className="text-lg">&#169; 2025 Monex Financial Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
     