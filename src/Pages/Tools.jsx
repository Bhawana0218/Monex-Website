import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {Calculator,TrendingUp, PieChart, IndianRupee,  BarChart3, Shield, Search, ChevronRight,} from 'lucide-react';
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.15,
    },
  },
};

const Tools = () => {
  const [activeTool, setActiveTool] = useState('calculator');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      id: 'calculator',
      name: 'Investment Calculator',
      category: 'planning',
      icon: <Calculator className="w-8 h-8" />,
      description: 'Calculate returns on your investments',
      features: ['Compound interest', 'ROI calculator', 'Time value'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'market-analyzer',
      name: 'Market Analyzer',
      category: 'analysis',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Real-time market analysis tools',
      features: ['Technical indicators', 'Price alerts', 'Volume data'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'portfolio-tracker',
      name: 'Portfolio Tracker',
      category: 'management',
      icon: <PieChart className="w-8 h-8" />,
      description: 'Track and manage your portfolio',
      features: ['Asset allocation', 'Performance metrics', 'Risk analysis'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'risk-assessment',
      name: 'Risk Assessment',
      category: 'analysis',
      icon: <Shield className="w-8 h-8" />,
      description: 'Assess investment risks',
      features: ['Volatility analysis', 'Beta calculation', 'Correlation'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'currency-calculator',
      name: 'Currency Converter',
      category: 'planning',
      icon: <IndianRupee className="w-8 h-8" />,
      description: 'Foreign exchange rate calculator',
      features: ['Live rates', 'Historical data', 'Cross pairs'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'dividend-tracker',
      name: 'Dividend Tracker',
      category: 'management',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Track dividend income',
      features: ['Yield calculations', 'Payment dates', 'Growth analysis'],
      color: 'from-blue-600 to-cyan-500'
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (toolId) => {
    setActiveTool(toolId);
    toast.success(`Loading ${tools.find(t => t.id === toolId)?.name}`, {
      description: "Your financial tools are ready to use"
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-700 via-blue-900 to-indigo-900 "> 

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/022/144/287/large_2x/growth-strategy-business-graph-analysis-concept-on-finance-chart-data-diagram-3d-background-wallpaper-ai-generated-photo.jpg')" }}>
        <div className="absolute inset-0 "></div>
        <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="show"
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-3">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Professional <span className="text-cyan-400">Financial Tools</span> 
        </h1>
            </h1>
            <p className="text-xl text-black mb-0 max-w-3xl mx-auto mt-6 backdrop-blur-sm">
               Advanced tools powered by cutting-edge technology to help you make informed financial decisions
            </p>
          </motion.div>
        </motion.div>

      </section>
      {/* Tools Section */}
      <section className="py-14 bg-linear-to-b from-indigo-900 via-blue-900 to-gray-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/25 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Categories</option>
              <option value="planning">Planning</option>
              <option value="analysis">Analysis</option>
              <option value="management">Management</option>
            </select>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => handleToolClick(tool.id)}
              >
                <div className="bg-blue-950 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${tool.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400 mb-4">{tool.description}</p>
                  <div className="space-y-2 mb-4">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 mr-2 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-all flex items-center justify-center">
                    Launch Tool
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;


