import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Building2, Users, Trophy, Clock, Download, Phone, Mail } from "lucide-react";
import { useState } from "react";

import BrochureForm from "@/components/BrochureForm";

export default function SriSaiKakatiya() {
  const [activeTab, setActiveTab] = useState('amenities');
  


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef5db] to-white">
      {/* Floating CTAs */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        {/* Download Brochure Button */}
        <BrochureForm
          projectName="Sri Sai Kakatiya"
          brochureUrl="/srisaikakatiya/Hariharas-Sri-Sai-Kakatiya-Brochure.pdf"
        />

        {/* Enquire Now Button */}
        <Button className="bg-[#1c2841] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#2a3b5c] transition-colors flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Enquire Now
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#1c2841]">
        {/* Background Image and Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/srisaikakatiya/background.jpg')] bg-cover bg-center opacity-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2841]/80 to-[#1c2841]/60" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Logo */}
          <img
            src="/hariharalogo.png"
            alt="Hari Hara Logo"
            className="h-32 w-auto mb-8"
          />

          {/* Phone Number - Bottom Right */}
          <div className="absolute bottom-5 right-8">
            <a href="tel:+919343345345" className="text-white text-xl font-medium flex items-center gap-2 hover:text-blue-100 transition-colors">
              <Phone className="w-5 h-5" />
              +91 9343 345 345
            </a>
          </div>
        </div>
      </section>


      
      {/* Project Highlights */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              { icon: Building2, title: "Project In", value: "3 Acres" },
              { icon: MapPin, title: "Location", value: "Pocharam" },
              { icon: Home, title: "Type", value: "2 & 3 BHK" },
              { icon: Ruler, title: "Size of Flats", value: "1335 to 1600 sft" },
              { icon: Calendar, title: "TS RERA PR NO", value: "P02200005594" },
            ].map((item, index) => (
              <div key={index} className="bg-[#fef5db] rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#00827f]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-[#00827f]" />
                </div>
                <h3 className="text-md font-semibold text-[#1c2841] mb-1">{item.title}</h3>
                <p className="text-lg font-bold text-[#00827f]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
    

      {/* Project Description */}
      <section className="py-20 bg-[#fef5db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1c2841] mb-8 relative">
                One of the best Gated Communities near you with 2bhk and 3bhk flats for sale
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#00827f] rounded-full"></div>
              </h2>
              <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-8">
                Hari Hara's Sri Sai Kakatiya instantly captivates with its unique presence in Pocharam, boasting dramatic views along Hyderabad-Warangal NH 163 and an iconic eastern skyline.
              </p>
              <p className="text-lg text-[#1c2841]/80 leading-relaxed">
                This exclusive residence features 360 elegant flats across two 15-story towers, offering panoramic vistas and private terraces that showcase the area's beauty. The design marries a rich personality with sleek functionality, making every aspect of living here a testament to luxurious and thoughtful architecture.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "/srisaikakatiya/main.png"
              ].map((image, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Sri Sai Kakatiya ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
{/* youtubes */}
      <section className="py-14 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* YouTube Video on the Left */}
      <div className="relative">
        <iframe 
          className="w-full h-64 md:h-80 rounded-xl border-4 border-[#c8a16e]" 
          src="https://www.youtube.com/embed/Ecev2vDX3Ag" 
          
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Description on the Right */}
      <div>
        <h2 className="text-4xl font-bold text-[#c8a16e] mb-4">
        The Ways of Royalty A Perfect Blend of Luxury and Comfort
        </h2>
        <p className="text-[#1c2841] text-lg leading-relaxed mb-4">
        Discover the ultimate living experience at Sri Sai Kakatiya Gated Community in Pocharam – where luxury meets convenience, and every moment feels like a dream come true.


        </p>
        <p className="text-[#1c2841] text-lg leading-relaxed">
        Choose from a selection of 2BHK and 3BHK flats thoughtfully designed to cater to your every need. With world-class amenities and a serene environment, Sri Sai Kakatiya offers the perfect blend of comfort and sophistication.


        </p>
      </div>

    </div>
  </div>
</section>


      {/* Amenities Section */}
      <section className="py-24 bg-[#fef5db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-12">
            Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Swimming pool", img: "/srisaikakatiya/amenities/Swimmingpool.png" },
              { name: "Basketball court", img: "/srisaikakatiya/amenities/Basketballcourt.png" },
              { name: "Children's Play Area", img: "/srisaikakatiya/amenities/Childrenplayarea.png" },
              { name: "Badminton court", img: "/srisaikakatiya/amenities/badmintoncourt.png" },
              { name: "Dining hall", img: "/srisaikakatiya/amenities/Dinninghall.png" },
              { name: "wallking track", img: "/srisaikakatiya/amenities/Walkingtrack.png" }  
            ].map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img src={amenity.img} alt={amenity.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#00827f]">{amenity.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Flat specifications & Building specifications */}
      <section className="py-24 bg-[#fef5db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1">
              <button
                onClick={() => setActiveTab('amenities')}
                className={`px-8 py-3 rounded-full transition-colors ${
                  activeTab === 'amenities'
                    ? 'bg-[#00827f] text-white'
                    : 'text-[#1c2841] hover:bg-gray-100'
                }`}
              >
                Flat Specifications
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-8 py-3 rounded-full transition-colors ${
                  activeTab === 'specifications'
                    ? 'bg-[#00827f] text-white'
                    : 'text-[#1c2841] hover:bg-gray-100'
                }`}
              >
                Building Specifications
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {activeTab === 'amenities' ? (
              // Flat Specifications Section
              <div className="space-y-6">
                {[
                  {
                    title: "FLOORING",
                    image: "/icons/structure.png",
                    items: [
                      <span>
                        <strong>Living/drawing, dining, all bedrooms & kitchen:</strong> 800 x 800 mm sized double-charged vitrified tiles of reputed
                      </span>,
                      <span>
                        <strong>Bathrooms/balcony/utility:</strong> Anti-skid vitrified/ceramic tiles of reputed make
                      </span>,
                      <span>
                        <strong>Corridors:</strong> Granite flooring / Full body vitrified tiles as per Architect's design
                      </span>,
                      <span>
                        <strong>Staircase:</strong> Tandur Polished stone
                      </span>,
                    ],
                  },
                  
                  {
                    title: "Bathrooms",
                    image: "/icons/walls.png",
                    items: [
                        <span><strong>Wash basins</strong> in all bathrooms</span>,
                        <span><strong>Diverter and Shower</strong> in all bathrooms</span>,
                        <span><strong>EWC</strong> for all bathrooms of reputed make</span>,
                        <span><strong>CP fittings</strong> of reputed make</span>,
                        <span><strong>Power provision</strong> for geysers in all bathrooms</span>,
                      ],
                    
                    
                  },
                  {
                    title: "KITCHEN UTILITIES",
                    image: "/icons/kitchen.png",
                    items: [
                      <span>
                        <strong>Granite countertop</strong> with a single bowl stainless steel sink with bore water connection along with provision for <strong>water purifier</strong> and <strong>washing machine</strong>
                      </span>,
                    ],
                  },
                  {
                    title: "ELECTRICAL",
                    image: "/icons/electrical.png",
                    items: [
                      <span><strong>Concealed copper wiring</strong> of reputed make</span>,
                      <span><strong>Power outlets</strong> for air conditioners in the living room and all bedrooms</span>,
                      <span><strong>Power outlet</strong> for cooking range chimney, refrigerator, microwave oven, and mixer/grinder in kitchen</span>,
                      <span><strong>Power supply</strong> for each unit</span>,
                      <span><strong>Miniature Circuit Breakers (MCB)</strong> for each distribution board of reputed make</span>,
                      <span><strong>Switches</strong> of reputed make</span>,
                    ],
                  },
                  {
                    title: "PAINTING",
                    image: "/icons/painting.png",
                    items: [
                      <span><strong>External:</strong> Textured or putty with two coats of exterior emulsion paint</span>,
                      <span><strong>Internal:</strong> Premium Emulsion Paint of reputed make with roller finishing over luppam finish</span>,
                    ],
                  },
                  
                  
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-[#00827f] mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-[#1c2841]/80 flex items-start">
                            <span className="text-[#00827f] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <img src={section.image} alt={section.title} className="w-16 h-16 ml-6" />
                  </div>
                ))}
              </div>
            ) : (
              // Building Specifications Section
              <div className="space-y-6">
                {[
                  {
                    title: "POWER BACKUP",
                    image: "/icons/power-backup.png",
                    items: [
                      <span><strong>DG backup</strong> for lights and fans (excluding ACs and geysers) (maximum of 12 points per flat)</span>,
                      <span><strong>100% DG backup</strong> for common areas and service/utility areas</span>,
                    ],
                  },
                  {
                    title: "LIFTS",
                    image: "/icons/lifts.png",
                    items: [
                      <span><strong>High-speed automatic passenger/service lifts</strong> with rescue devices of reputed make</span>,
                      <span><strong>Lift lobby</strong> with vitrified tiles/granite as per Architect's design</span>,
                    ],
                  },
                  {
                    title: "FIRE & SAFETY",
                    image: "/icons/fire-safety.png",
                    items: [
                      <span>Fire alarms, hydrants, and sprinklers installed as per the <strong>Fire Department regulations and norms</strong></span>,
                    ],
                  },
                  {
                    title: "PARKING",
                    image: "/icons/parking.png",
                    items: [
                      <span>Entire parking designed to suit the <strong>requisite number of car parks</strong> at stilt and basement(s)</span>,
                    ],
                  },
                  {
                    title: "SECURITY",
                    image: "/icons/security.png",
                    items: [
                      <span><strong>Sophisticated round-the-clock security system</strong></span>,
                      <span>Surveillance cameras installed at the <strong>Security Main Gate</strong>, the entrance to each tower, passenger lifts, children's play area, and appropriate common areas</span>,
                    ],
                  },
                  
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-[#00827f] mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-[#1c2841]/80 flex items-start">
                            <span className="text-[#00827f] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <img src={section.image} alt={section.title} className="w-16 h-16 ml-6" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Location & Connectivity */}
      {/* Location Advantage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-16 relative inline-block">
            Location Advantage
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00827f] rounded-full"></div>
          </h2>

          {/* Two-Column Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Schools & Colleges",
                items: [
                  "Princeton Institute of Engineering and Technologies – 1 min",
                  "Anurag University – 2 mins",
                  "Narayana Junior College – 3 mins",
                  "Rotterdam International Schools – 2 mins",
                  "Nalla Malla Reddy Engineering Colleges – 7 mins",
                ]
              },
              {
                title: "Offices",
                items: [
                  "Infosys SEZ Campus – 10 mins",
                  "Singapore Township – 6 mins",
                  "Genpact – Pocharam – 8 mins",
                  "Mind Space – Pocharam – 10 mins"
                ]
              },
              {
                title: "Restaurants & Malls",
                items: [
                  "Hotel Tulip Grand – 3 mins",
                  "Red Bucket Biryani – 2 mins",
                  "Grill 9 Restaurant – 4 mins",
                  "Parampara Family Restaurant – 2 mins",
                  "Asian Mukta A2 Cinemas, MJR Square – 1 min",
                  "Bhagyanagar Nandanavanam Park – 4 mins"
                ]
              },
              {
                title: "Hospitals",
                items: [
                  "Vajra Hospitals – 2 mins",
                  "Shri Wazra Multi Speciality Hospital – 5 mins",
                  "Neelima Hospital – 3 mins",
                  "Cure Hospitals – 1 min"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-[#fef5db] rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-[#00827f] mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-[#1c2841]/80">
                      <span className="text-[#00827f] mr-2">⭐</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Master and Floor Plans */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1">
              <button
                onClick={() => setActiveTab("masterPlan")}
                className={`px-8 py-3 rounded-full transition-colors ${
                  activeTab === "masterPlan"
                    ? "bg-[#00827f] text-white"
                    : "text-[#1c2841] hover:bg-gray-100"
                }`}
              >
                Master Plan
              </button>
              <button
                onClick={() => setActiveTab("floorPlans")}
                className={`px-8 py-3 rounded-full transition-colors ${
                  activeTab === "floorPlans"
                    ? "bg-[#00827f] text-white"
                    : "text-[#1c2841] hover:bg-gray-100"
                }`}
              >
                Floor Plans
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {activeTab === "masterPlan" ? (
              <>
                {/* Master Plan Images */}
                <a href="/srisaikakatiya/masterplan.jpg" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/srisaikakatiya/masterplan.jpg"
                    alt="Master Plan 1"
                    className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <a href="/srisaikakatiya/masterplan.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/srisaikakatiya/masterplan.png"
                    alt="Master Plan 2"
                    className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </>
            ) : (
              <>
                {/* Floor Plan Images */}
                <a href="/srisaikakatiya/BLOCK-A-TYPICAL-FLOOR-PLAN.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/srisaikakatiya/BLOCK-A-TYPICAL-FLOOR-PLAN.png"
                    alt="Floor Plan 1"
                    className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <a href="/srisaikakatiya/BLOCK-B-TYPICAL-FLOOR-PLAN.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/srisaikakatiya/BLOCK-B-TYPICAL-FLOOR-PLAN.png"
                    alt="Floor Plan 2"
                    className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </>
            )}
          </div>

        </div>
      </section>


      {/* Google Maps Section */}
      <section className="py-24 bg-[#fef5db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-8">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d60907.197662611165!2d78.647786!3d17.426186!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzM0LjMiTiA3OMKwMzgnNTIuMCJF!5e0!3m2!1sen!2sus!4v1743101349735!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      

      


      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-16 relative inline-block">
              Enquire Now
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00827f] rounded-full"></div>
            </h2>
            <div className="bg-[#fef5db] rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1c2841] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00827f] focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c2841] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00827f] focus:border-transparent"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c2841] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00827f] focus:border-transparent"
                    placeholder="Your Phone Number"
                  />
                </div>
                <Button className="w-full bg-[#00827f] text-white hover:bg-[#006c6a] rounded-lg py-6 text-lg font-medium">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 