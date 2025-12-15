import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {financialservices} from '/src/Components/data';

const ServiceCard = ({ icon: Icon, title, description, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-linear-to-br from-indigo-700 via-blue-900 to-indigo-900 text-white shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className="w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl text-gray-900 font-bold mb-3">{title}</h3>
      <p className="text-white/90">{description}</p>

      {/* Decorative background effect */}
      <motion.div
        className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
    </motion.div>
  );
};

const Services = () => {
  const handleNotify = (serviceName) => {
    toast.success(`${serviceName} service selected!`);
  };


  return (
    <div className="relative py-24 px-6 sm:px-10 lg:px-20 bg-linear-to-b from-gray-900 via-indigo-900 to-gray-900 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our <span className="text-cyan-400">Financial Services</span> 
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
          Discover our premium financial financialservices designed to help you manage,
          invest, and grow your wealth with confidence.
        </p>
      </motion.div>

      {/* financialservices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {financialservices.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            onClick={() => handleNotify(service.title)}
            delay={index * 0.2}
          />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-28 text-center relative z-10"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Elevate Your <span className="text-cyan-400">Finances</span>?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Connect with our experts today and take the first step towards
          achieving your financial goals with personalized solutions.
        </p>
        <Link
          to="/contact"
          className="relative inline-block px-10 py-4 font-semibold text-white bg-linear-to-r from-blue-500 via-blue-500 to-cyan-500 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        > Get Started
        </Link>
      </motion.div>
    </div>
  );
};

export default Services;

