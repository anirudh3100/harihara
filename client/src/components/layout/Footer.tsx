import { Link } from "wouter";
import { projects } from "@/lib/data";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#1c2841] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/hariharalogo.png" 
              alt="Hari Hara Estates" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering excellence in real estate development with over 30 years of trusted experience. 
              Building dreams, creating communities, and delivering quality living spaces.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#00827F] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#00827F] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#00827F] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="#" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#00827F] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#00827F]">Quick Links</h3>
            <div className="grid gap-4">
              <Link href="/about">
                <motion.a 
                  whileHover={{ x: 4 }}
                  className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-2 text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  About Us
                </motion.a>
              </Link>
              <Link href="/projects">
                <motion.a 
                  whileHover={{ x: 4 }}
                  className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-2 text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Projects
                </motion.a>
              </Link>
              <Link href="/completed-projects">
                <motion.a 
                  whileHover={{ x: 4 }}
                  className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-2 text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Completed Projects
                </motion.a>
              </Link>
              <Link href="/news">
                <motion.a 
                  whileHover={{ x: 4 }}
                  className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-2 text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  News & Media
                </motion.a>
              </Link>
              <Link href="/contact">
                <motion.a 
                  whileHover={{ x: 4 }}
                  className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-2 text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Contact Us
                </motion.a>
              </Link>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#00827F]">Featured Projects</h3>
            <div className="grid gap-4">
              {projects.slice(0, 4).map((project) => (
                <Link key={project.id} href={`/${project.link}`}>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {project.title}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#00827F]">Contact Us</h3>
            <div className="space-y-4">
              <motion.a 
                whileHover={{ x: 4 }}
                href="https://maps.app.goo.gl/LM6yxQMqrP2auwDq5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00827F] transition-colors flex items-start gap-3 text-sm"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Harihara Estate, Opp. ISI<br />
                  St. No:8, Habsiguda, Telangana<br />
                  Hyderabad - 500007
                </span>
              </motion.a>
              <motion.a 
                whileHover={{ x: 4 }}
                href="https://wa.me/9066832832" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-3 text-sm"
              >
                <Phone className="w-5 h-5" />
                +91 9066832832
              </motion.a>
              <motion.a 
                whileHover={{ x: 4 }}
                href="mailto:info@hariharaestates.com" 
                className="text-gray-300 hover:text-[#00827F] transition-colors flex items-center gap-3 text-sm"
              >
                <Mail className="w-5 h-5" />
                info@hariharaestates.com
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hari Hara Estates. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-[#00827F] transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#00827F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#00827F] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}