import React, { useState  } from 'react';
import { motion } from 'framer-motion';
import {ArrowRight,  CheckCircle,  Star, Play, Calendar, Clock, Award as AwardIcon } from 'lucide-react';
import { services, tools, testimonials, stats, features } from '/src/Components/data.jsx';
import {PerformanceDashboard} from '/src/Components/Dashboard.jsx';

const Home = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white">

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} >
              <div className="mb-4">
                <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"> Premium Financial Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Professional Financial</span>
                <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">  Excellence Delivered
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trusted by industry leaders worldwide. We deliver comprehensive financial solutions 
                that drive growth and ensure long-term success through cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta"  className="bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center group">
                   Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="border border-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center">
                  <Play className="mr-2 w-4 h-4" /> Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative" >
              <div className="bg-linear-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/30">
                <img  src="https://img.freepik.com/premium-photo/business-data-analysis-analytics-customers-insights-with-charts-abstract-blue-background-vector-illustration-generative-ai_438099-11790.jpg?w=360" 
                alt="Financial Dashboard"  className="w-full rounded-xl shadow-2xl"/>
                <div className="absolute -top-2 -right-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  +24.5% Growth
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Stats Section */}
<section className="py-20 border-y border-blue-800/40 bg-gray-950">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {stats.map((stat, index) => (
      <div key={index} className="relative">
        <div className="text-4xl font-bold text-white">
          {stat.number}
        </div>
        <p className="text-gray-400 text-sm mt-2">{stat.label}</p>

        {/* Divider */}
        {index !== stats.length - 1 && (
          <span className="hidden md:block absolute right-0 top-1/2 h-10 w-px bg-blue-800/40 -translate-y-1/2" />
        )}
      </div>
    ))}
  </div>
</section>


 {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className='text-blue-400'>Services</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end financial solutions tailored to your unique business requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border transition-all cursor-pointer ${
                  activeService === index 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'border-blue-500/30 hover:border-blue-500/50'
                }`}
                onClick={() => setActiveService(index)} >
                <div className={`text-blue-400 mb-4 ${ activeService === index ? 'text-cyan-400' : 'group-hover:text-cyan-400'  } transition-colors`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className={`text-sm mb-6 transition-all ${
                  activeService === index ? 'opacity-100' : 'opacity-0 h-0' }`}>
                  {service.details}
                </p>
                <button className="text-blue-400 hover:text-cyan-400 flex items-center group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Features Section */}
<section  id="features"
  className="py-24 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://618media.com/wp-content/uploads/2024/01/app-store-analytics-2-key-methods-for-leveraging-data-for-informed-aso-decisions.webp')",
  }}>
  <div className="absolute inset-0 bg-linear-to-t from-cyan-950/90 via-black/40 to-black/90 pointer-events-none" />


  <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }} className="relative" >
      {/* Accent Line */}
      <span className="absolute -left-6 top-2 h-20 w-1 bg-linear-to-b from-blue-500 to-blue-900 rounded-full" />
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Why <span className="text-cyan-400">Monex</span> Leads the Market
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        We combine intelligent technology, deep market insights, and automation
        to help you build wealth with confidence.
      </p>
      <ul className="mt-16 space-y-4 text-gray-300 text-lg">
        <li className="flex items-center  gap-3">
          <span className="w-2 h-2 bg-cyan-400 rounded-full" />
          Institutional-grade analytics
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-cyan-400 rounded-full" />
          Built for long-term investors
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-cyan-400 rounded-full" />
          Secure & scalable infrastructure
        </li>
      </ul>
    </motion.div>

    {/* RIGHT FEATURE CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          style={{ marginTop: index % 2 === 0 ? 0 : 30 }}
          className="
            relative group rounded-2xl p-6
            bg-gray-900 backdrop-blur
            border border-blue-800
            hover:border-blue-500
            transition-all
            hover:-translate-y-2
            hover:shadow-xl hover:shadow-blue-500/20 min-h-55 flex flex-col" >
          {/* Card Glow */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/60 to-cyan-500/60 opacity-0 group-hover:opacity-60 transition-opacity" />
          <div className="relative z-10">
            <div className="text-cyan-400 text-2xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-md">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

 {/* Tools Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-linear-to-r from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Powerful <span className="text-cyan-400">Financial Tools</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Advanced tools to manage, track, and optimize your investment portfolio effortlessly
      </p>
    </motion.div>

    {/* Tools Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={`
            relative group p-8 rounded-3xl border border-blue-800/30
            bg-gray-900/40 backdrop-blur-md
           
            cursor-pointer transition-all transform hover:-translate-y-2
            flex flex-col items-center text-center min-h-70
          `}
          style={{ marginTop: index % 2 === 0 ? 0 : 20 }} 
        >
          <motion.div
            className="text-6xl mb-6 text-cyan-400"
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tool.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 text-white">
            {tool.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm grow">
            {tool.description}
          </p>

          {/* CTA Hover Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
    </div>
</section>

      {/* Performance Chart Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative"
        style={{
              backgroundImage: "url('https://thesystemeguide.com/wp-content/uploads/2023/10/DALL%C2%B7E-2023-11-18-13.28.22-An-appealing-and-informative-image-for-the-topic-Analytics-and-Reporting-in-Systeme.io_.-The-composition-features-a-large-central-3D-pie-chart-and-b-1134x648.png')",
              backgroundPosition: "center",
               backgroundAttachment: "fixed",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",}}>

                  {/* Overlay to make content readable */}
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm pointer-events-none rounded-2xl"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4"><span className="text-cyan-300">Performance</span> Insights</h3>
                <p className="text-gray-300 mb-6">
                  Our advanced analytics platform provides real-time insights into market trends 
                  and investment opportunities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Real-time Market Data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Advanced Risk Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Automated Portfolio Rebalancing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Custom Reporting</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="flex space-x-4 mb-6">
                    <button 
                      onClick={() => setActiveTab('performance')}
                      className={`px-4 py-2 rounded-lg ${activeTab === 'performance' ? 'bg-cyan-600' : 'bg-gray-700'}`}>
                      Performance
                    </button>
                    <button 
                      onClick={() => setActiveTab('analytics')}
                      className={`px-4 py-2 rounded-lg ${activeTab === 'analytics' ? 'bg-cyan-600' : 'bg-gray-700'}`}>
                      Analytics
                    </button>
                  </div>  
                  <div className="h-64 bg-linear-to-r from-blue-900/20 to-cyan-900/20 rounded-lg flex justify-items-start">
                    <div className='ml-0 pb-5'>
                      <PerformanceDashboard/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className='text-cyan-400'>Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders who trust Monex with their financial future
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta"
  className="py-16 px-4 sm:px-6 lg:px-8 relative"
  style={{
    backgroundImage: "url('https://thesystemeguide.com/wp-content/uploads/2023/10/DALL%C2%B7E-2023-11-18-13.28.22-An-appealing-and-informative-image-for-the-topic-Analytics-and-Reporting-in-Systeme.io_.-The-composition-features-a-large-central-3D-pie-chart-and-b-1134x648.png')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}>
        <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-sm p-12 rounded-2xl border border-blue-500/30 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-r from-blue-900/60 to-cyan-900/50 backdrop-blur-sm p-12 rounded-2xl border border-blue-500/30 text-center"
          >
            <AwardIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your <span className='text-cyan-400'>Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join industry leaders who rely on Monex for their critical financial operations. 
              Experience the difference with our premium solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="border border-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center">
                <Clock className="mr-2 w-5 h-5" />
                Book Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
