
import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import CloudDivider from './CloudDivider';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B172A] pt-0 text-white">
      <CloudDivider color="#0B172A" flip={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-[#FF4D4D] p-1.5 rounded-xl">
                <Heart className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Heart Home <span className="text-[#FFD93D]">School</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Providing a nurturing environment in Bahawalpur where children grow emotionally, socially, and intellectually through the power of play and gentle guidance.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD93D] hover:text-[#0B172A] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-[#FFD93D]">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'About Us', 'Programs', 'Admissions', 'Contact'].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-[#FFD93D]">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-[#6BCB77] shrink-0" size={20} />
                <span>Satellite Town, Bahawalpur City, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-[#4D96FF] shrink-0" size={20} />
                <span>+92 62 1234567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-[#FF4D4D] shrink-0" size={20} />
                <span>admissions@hearthome.edu.pk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-[#FFD93D]">Newsletter</h4>
            <p className="text-gray-400 mb-6">Stay updated with our school news and events in Bahawalpur!</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#FFD93D]"
              />
              <button className="bg-[#FFD93D] text-[#0B172A] font-bold py-3 rounded-full hover:bg-yellow-400 transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Heart Home School. All Rights Reserved.</p>
          <p className="mt-2">
            Developed by{' '}
            <a 
              href="https://www.zararmalik.online/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FFD93D] hover:text-white transition-colors font-medium"
            >
              Zarar Malik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
