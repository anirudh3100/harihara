import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Completed Projects", path: "/completed-projects" },
  { label: "News & Media", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <a className="flex items-center">
                <img 
                  src="/hariharalogo.png" 
                  alt="Hari Hara Logo" 
                  className="h-14 w-auto"
                />
              </a>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-6">
            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#00827F]">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 9066832832</span>
              </div>
              <div className="flex items-center space-x-2 text-[#00827F]">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Hyderabad, India</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.a
                    whileHover={{ y: -2 }}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      location === item.path
                        ? "bg-[#00827F] text-white shadow-md"
                        : isScrolled 
                          ? "text-gray-700 hover:text-[#00827F] hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </motion.a>
                </Link>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#00827F]" />
              ) : (
                <Menu className="h-6 w-6 text-[#00827F]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
                {/* Contact Info - Mobile */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-2 text-[#00827F] mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">+91 1234567890</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#00827F]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Hyderabad, India</span>
                  </div>
                </div>

                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        location === item.path
                          ? "bg-[#00827F] text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#00827F]"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
