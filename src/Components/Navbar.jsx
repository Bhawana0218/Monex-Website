import {React, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';
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
                          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                          <Link to="/calculator" className="hover:text-blue-400 transition-colors">Calculator</Link>
                          <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
                          <Link to="/tools" className="hover:text-blue-400 transition-colors">Tools</Link>
                          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
                          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
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
                           <Link to="/" className="block hover:text-blue-400"  onClick={() => setIsMenuOpen(false)}>Home</Link>
                           <Link to="/calculator" className="block hover:text-blue-400"  onClick={() => setIsMenuOpen(false)}>Calculator</Link>
                          <Link to="/services" className="block hover:text-blue-400"  onClick={() => setIsMenuOpen(false)}>Services</Link>
                          <Link to="/tools" className="block hover:text-blue-400"  onClick={() => setIsMenuOpen(false)}>Tools</Link>
                          <Link to="/about" className="block hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</Link>
                          <Link to="/contact" className="block hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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