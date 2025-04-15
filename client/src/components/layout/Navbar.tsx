import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, MapPin, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmartSearch from "../SmartSearch";

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
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-[#0d1d32]/80 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar with contact info */}
        

        {/* Main navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <img
                  src="/hariharalogo.png"
                  alt="Hari Hara Logo"
                  className="h-9 w-auto"
                />
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 mr-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                      location === item.path
                        ? "bg-[#00827F] text-white"
                        : isScrolled
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>

            {/* Search */}
            <div className="relative ml-2">
              {showSearch ? (
                <div className="flex items-center bg-white rounded-full shadow-md">
                  <div className="w-64">
                    <SmartSearch />
                  </div>
                  <button
                    onClick={() => setShowSearch(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  )}
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 ml-2 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-6 h-6", isScrolled ? "text-gray-700" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-700" : "text-white")} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-b-lg shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        location === item.path
                          ? "bg-[#00827F] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <div className="pt-2 pb-1 border-t border-gray-100 mt-3">
                  <a href="tel:+919066832832" className="flex items-center space-x-2 text-[#00827F] py-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 9066832832</span>
                  </a>
                  <div className="flex items-center space-x-2 text-[#00827F] py-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
