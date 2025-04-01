import { Link } from "wouter";
import { projects } from "@/lib/data";
import { PhoneIcon } from "lucide-react";
import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c2841] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00827f]">About Us</h3>
            <p className="text-sm text-gray-300">
            We are independent developers working with a commitment to professionalism and reliability. 
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00827f]">Our Projects</h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link href={`/${project.link}`}>
                    <a className="text-sm text-gray-300 hover:text-[#00827f] transition-colors">
                      {project.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00827f]">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-[#00827f] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00827f] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-4 text-[#00827f]">Contact</h3>
  <address className="text-sm text-gray-300 not-italic space-y-2">
    <p>Harihara Estate, Opp. ISI</p>
    <p>St. No:8, Habsiguda, Telangana</p>
    <p>Hyderabad - 500007</p>
    
    {/* WhatsApp Link */}
    <a 
      href="https://wa.me/911234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-[#00827f] transition-colors flex items-center gap-1"
    >
      <PhoneIcon className="w-4 h-4" /> {/* Optional icon */}
      Phone: +91 1234567890
    </a>
    
    {/* Email Link */}
    <a 
      href="mailto:info@hariharaestates.com" 
      className="hover:text-[#00827f] transition-colors flex items-center gap-1"
    >
      <MailIcon className="w-4 h-4" /> {/* Optional icon */}
      info@hariharaestates.com
    </a>
  </address>
</div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00827f]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#00827f] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00827f] transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center text-gray-300">
            © {new Date().getFullYear()} Real Estate Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}