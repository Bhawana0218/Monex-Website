import {React, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X} from 'lucide-react';
import Monex from '/src/assets/Monex-logo2.png';

const Navbar = () =>{
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const scrollToCTA = () => {
          setIsMenuOpen(false);
          if (window.location.pathname !== "/") {
           window.location.href = "/#cta";
          } else {
          document
          .getElementById("cta")
          ?.scrollIntoView({ behavior: "smooth" });
  }};

    return (
        <div>
            <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm border-b border-blue-800 z-50 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between items-center h-16">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <div>
                            <img src={Monex} alt="Monex Logo" className='w-18 h-16 '/>
                          </div>
                        </motion.div>
            
                        <div className="hidden md:flex items-center space-x-8">
                          <a href="home" className="hover:text-blue-400 transition-colors">Home</a>
                          <a href="services" className="hover:text-blue-400 transition-colors">Services</a>
                          <a href="tools" className="hover:text-blue-400 transition-colors">Tools</a>
                          <a href="about" className="hover:text-blue-400 transition-colors">About</a>
                          <a href="contact" className="hover:text-blue-400 transition-colors">Contact</a>
                          <button onClick={scrollToCTA}
                          className="bg-linear-to-r from-blue-600 to-cyan-600 px-6 font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
                          > Get Started </button>

                        </div>
                        <button 
                          className="md:hidden"
                          onClick={() => setIsMenuOpen(!isMenuOpen)}>
                          {isMenuOpen ? <X /> : <Menu />}
                        </button>
                      </div>
                    </div>
            
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-gray-800 border-t border-blue-800"
                      >
                        <div className="px-4 py-4 space-y-4">
                          <a href="home" className="block hover:text-blue-400">Home</a>
                          <a href="services" className="block hover:text-blue-400">Services</a>
                          <a href="tools" className="block hover:text-blue-400">Tools</a>
                          <a href="about" className="block hover:text-blue-400">About</a>
                          <a href="contact" className="block hover:text-blue-400">Contact</a>
                          <button onClick={scrollToCTA}
                           className="w-full bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-lg">
                             Get Started  </button>
                        </div>
                      </motion.div>
                    )}
                  </nav>
        </div>
    );
}
export default Navbar;