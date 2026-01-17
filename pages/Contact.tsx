
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import CloudDivider from '../components/CloudDivider';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header - No pt-24 on parent to allow navbar to sit on dark bg */}
      <section className="bg-[#0B172A] pt-32 md:pt-48 pb-0 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-white relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Join Our <span className="text-[#FF4D4D]">Family</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-12"
          >
            Ready to give your child the best start in life in Bahawalpur? Schedule a tour or request more information below.
          </motion.p>
        </div>
        <CloudDivider />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-[#0B172A] mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#F0F7FF] p-4 rounded-2xl text-[#4D96FF]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B172A]">Visit Us</p>
                      <p className="text-gray-500">Satellite Town, Bahawalpur City, Punjab, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#F0FFF4] p-4 rounded-2xl text-[#6BCB77]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B172A]">Call Us</p>
                      <p className="text-gray-500">+92 62 1234567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FFF0F0] p-4 rounded-2xl text-[#FF4D4D]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B172A]">Email Us</p>
                      <p className="text-gray-500">admissions@hearthome.edu.pk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B172A] p-8 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-4">Tour Hours</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between"><span>Mon - Fri</span> <span>8:30 - 10:30 AM</span></li>
                  <li className="flex justify-between"><span>Saturdays</span> <span>9:30 - 12:00 PM</span></li>
                  <li className="flex justify-between font-bold text-[#FFD93D]"><span>Fridays</span> <span>8:30 - 10:00 AM</span></li>
                  <li className="flex justify-between font-bold text-[#FF4D4D]"><span>Sundays</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#FDFCF8] p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="bg-[#6BCB77] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0B172A] mb-4">Message Received!</h3>
                    <p className="text-xl text-gray-600 mb-8">Thank you for your interest. Our admissions team in Bahawalpur will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-[#0B172A] text-white px-8 py-4 rounded-full font-bold"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0B172A] uppercase">Parent's Name</label>
                        <input required type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4D96FF]" placeholder="Ali Khan" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0B172A] uppercase">Child's Age</label>
                        <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4D96FF]">
                          <option>Under 2 Years</option>
                          <option>2-3 Years</option>
                          <option>3-4 Years</option>
                          <option>4+ Years</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B172A] uppercase">Email Address</label>
                      <input required type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4D96FF]" placeholder="ali@gmail.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B172A] uppercase">Phone Number</label>
                      <input required type="tel" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4D96FF]" placeholder="+92 300 1234567" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0B172A] uppercase">How can we help?</label>
                      <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4D96FF]" placeholder="Tell us about your child's needs..."></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-[#FF4D4D] hover:bg-[#ff3b3b] text-white py-5 rounded-full text-xl font-bold shadow-[0_10px_0_0_#d13d3d] transform transition active:translate-y-2 active:shadow-none"
                    >
                      Schedule My Tour
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
