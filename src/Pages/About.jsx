import {React} from 'react';
import { motion } from "framer-motion";
import {LineChart,  Line,XAxis, YAxis,Tooltip, ResponsiveContainer,} from "recharts";
import { ShieldCheck, TrendingUp, Users, Landmark, Target,} from "lucide-react";
import { growthData } from '/src/Components/data.jsx';
import BackgroundVideo from '/src/Components/BackgroundVideo.jsx';

const About = () => {
  return (
    <div 
     className="relative min-h-screen  overflow-hidden">
        
      <BackgroundVideo></BackgroundVideo>

         <div className="absolute inset-0 bg-black/5" 
         />
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
        
      {/* Background Glow */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-24">

        {/* TOP — INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Monex</span>
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Monex is a next-generation financial services platform helping
            individuals and businesses build, protect, and grow wealth through
            <span className="text-white font-medium">
              {" "}intelligent investing, transparent planning, and data-driven strategies
            </span>.
          </p>
        </motion.div>

        {/* MIDDLE — CONTENT + CHART */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — STORY + VALUES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-8 -mt-18 leading-relaxed">
              Founded with a vision to simplify complex finance, Monex bridges
              the gap between technology and financial expertise. Our platform
              empowers users to make confident decisions backed by real market
              insights and disciplined risk management.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-900 border border-blue-800 rounded-xl p-6">
                <Target className="text-cyan-400 mb-3" />
                <h4 className="font-semibold text-xl text-white mb-2">Our Mission</h4>
                <p className="text-1xl text-gray-400">
                  To make wealth creation accessible, transparent, and sustainable
                  for everyone.
                </p>
              </div>

              <div className="bg-gray-900 border border-blue-800 rounded-xl p-6">
                <Landmark className="text-cyan-400 mb-3" />
                <h4 className="font-semibold text-xl text-white mb-2">Our Vision</h4>
                <p className="text-1xl text-gray-400">
                  To become a globally trusted financial partner driven by innovation
                  and integrity.
                </p>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-blue-800 rounded-xl p-5">
                <ShieldCheck className="text-cyan-400 mb-3" />
                <h4 className="font-semibold text-xl text-white mb-1">Secure by Design</h4>
                <p className="text-1xl text-gray-400">
                  Enterprise-grade security & compliance standards.
                </p>
              </div>

              <div className="bg-gray-900 border border-blue-800 rounded-xl p-5">
                <TrendingUp className="text-cyan-400 mb-3" />
                <h4 className="font-semibold text-xl text-white mb-1">Proven Growth</h4>
                <p className="text-1xl text-gray-400">
                  Consistent performance across market cycles.
                </p>
              </div>

              <div className="bg-gray-900 border border-blue-800 rounded-xl p-5">
                <Users className="text-cyan-400 mb-3" />
                <h4 className="font-semibold text-xl text-white mb-1">Client-Centric</h4>
                <p className="text-1xl text-gray-400">
                  Strategies tailored to real financial goals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — GROWTH CHART */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              bg-gray-900 backdrop-blur-lg
              p-8 rounded-3xl
              border border-blue-800
              shadow-xl shadow-blue-500
            "
          >
            <h3 className="text-xl text-gray-100 font-semibold mb-2">
              Growth & Trust Metrics
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Reflecting our expanding client base and portfolio value
            </p>

            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={growthData}>
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #1f2937",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">10K+</div>
                <p className="text-xs text-gray-400">Active Clients</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">₹500Cr+</div>
                <p className="text-xs text-gray-400">Assets Managed</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                <p className="text-xs text-gray-400">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
};
export default About;


