import supabase from "/src/supabase-client-msg";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
   full_name: "",
  email: "",
  investment_goal: "Wealth Growth",
  message: "",
  });

   const handleChange = (e) => {
   const { name, value } = e.target;

    setFormData((prev) => ({
    ...prev,
    [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);

    const { error } = await supabase
    .from("Monex")
    .insert([formData]);

  if (error) {
    console.error(error);
    toast.error("Failed to send message. Please try again.");
  } else {
    toast.success("Message sent successfully! Our team will contact you soon.");
    setFormData({
      full_name: "",
      email: "",
      investment_goal: "Wealth Growth",
      message: "",
    });
  }
  setLoading(false);
};

  return (
    <section id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')" }} />
      <div className="absolute inset-0 bg-linear-to-b
       from-blue-950/80 via-cyan-500/30 to-blue-950/70" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"> Let’s Talk About Your{" "}
            <span className="text-cyan-400">Financial Future</span> </h2>
          <p className="text-lg text-gray-100 font-semibold mb-10 max-w-xl">
            Connect with Monex experts to get personalized investment guidance,
            portfolio optimization, and secure financial planning. </p>

          <div className="space-y-6 text-gray-200">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400 w-5 h-5" /> <span>support@monex.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400 w-5 h-5" /> <span>+91 99999 99999</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400 w-5 h-5" /> <span>Uttarakhand, India</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM — SOLID DARK (NO BLUR) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" bg-gray-950/95 p-8 md:p-10 rounded-3xl border border-blue-800/40 shadow-2xl shadow-blue-500/20 " >
          <h3 className="text-2xl font-semibold mb-6"> Request a Free Consultation </h3>
       <form onSubmit={handleSubmit} className="space-y-6">
        <div>
         <label className="text-sm font-medium text-gray-300"> Full Name </label>
         <input type="text" required onChange={handleChange}  value={formData.full_name} name="full_name"  placeholder="Full Name"
         className=" w-full mt-2  bg-slate-900/90  border border-slate-600  rounded-lg px-4 py-3  text-white placeholder-gray-500  focus:outline-none
        focus:border-cyan-400  focus:ring-2 focus:ring-cyan-400/30 transition "/> </div>
        {/* Email */}
      <div>
       <label className="text-sm font-medium text-gray-300"> Email Address </label>
       <input  type="email"  required value={formData.email} onChange={handleChange} name="email" placeholder="abc@gmail.com"
       className="  w-full mt-2  bg-slate-900/90 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition " /> </div>

     {/* Investment Goal */}
     <div>
     <label className="text-sm font-medium text-gray-300">  Investment Goal </label>
     <select name="investment_goal" value={formData.investment_goal} onChange={handleChange}
      className="  w-full mt-2  bg-slate-900/90  border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none  focus:border-cyan-400
        focus:ring-2 focus:ring-cyan-400/30 transition " >
      <option>Wealth Growth</option>
      <option>Retirement Planning</option>
      <option>Tax Saving</option>
      <option>Portfolio Review</option>
      </select>
    </div>

       {/* Message */}
      <div>
       <label className="text-sm font-medium text-gray-300"> Message </label>
       <textarea  rows="4" required name="message" value={formData.message} onChange={handleChange}
          placeholder="Tell us about your financial goals..." className=" w-full mt-2 bg-slate-900/90
          border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition  resize-none " />
      </div>

     {/* Submit Button */}
       <button type="submit"  disabled={loading} className=" w-full flex items-center justify-center gap-2
         bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-3 rounded-xl
         shadow-lg shadow-cyan-500/20 transition-all duration-300 disabled:opacity-60 " > {loading ? "Sending..." : "Send Message"}
         <Send className="w-4 h-4" />
       </button>
     </form>
        </motion.div>
      </div>
    </section>
    );
};

export default Contact;
