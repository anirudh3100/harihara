import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
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

  return (
    <nav className="bg-[#1c2841] shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <img 
                  src="/hariharalogo.png" 
                  alt="Hari Hara Logo" 
                  className="h-12 w-auto hover:opacity-90 transition-opacity"
                />
              </a>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location === item.path
                        ? "bg-[#00827f] text-white"
                        : "text-white hover:bg-[#3B5998] hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-[#3B5998] rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      location === item.path
                        ? "bg-[#00827f] text-white"
                        : "text-white hover:bg-[#3B5998] hover:text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
