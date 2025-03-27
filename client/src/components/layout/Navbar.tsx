import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";

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

  return (
    <nav className="bg-[#1c2841] shadow-lg">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
