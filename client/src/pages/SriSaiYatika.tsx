import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Building2, Users, Trophy, Clock, Download, Phone, Mail } from "lucide-react";
import { useState } from "react";
import BrochureForm from "@/components/BrochureForm";

export default function SriSaiYatika() {
  const [activeTab, setActiveTab] = useState('amenities');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef5db] to-white">
      {/* Floating CTAs */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        {/* Download Brochure Button */}
        <BrochureForm
          projectName="Sri Sai Yatika"
          brochureUrl="/srisaikakatiya/Hariharas-Sri-Sai-Kakatiya-Brochure.pdf"
        />

        {/* Enquire Now Button */}
        <Button className="bg-[#1c2841] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#2a3b5c] transition-colors flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Enquire Now
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#1c2841]">
        {/* Background Image and Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/srisaiyatika/background.png')] bg-cover bg-center opacity-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2841]/80 to-[#1c2841]/60" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Logo */}


          {/* Phone Number - Bottom Right */}
          <div className="absolute bottom-5 right-8">
            <a href="tel:+919066832832" className="text-white text-xl font-medium flex items-center gap-2 hover:text-blue-100 transition-colors">
              <Phone className="w-5 h-5" />
              +91 9066 832 832
            </a>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              { icon: Building2, title: "Project In", value: "2 Acres" },
              { icon: MapPin, title: "Location", value: "Uppal" },
              { icon: Home, title: "Type", value: "3 BHK" },
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
                Explore Unmatched Luxury
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#00827f] rounded-full"></div>
              </h2>
              <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-8">
                Welcome to Sri Sai Yatika, where luxury meets serenity across 2.85 acres of prime real estate. Rising majestically with 10 floors, Sri Sai Yatika offers a range of 3BHK homes, ranging from 1635 sq. ft. to 2435 sq. ft., each meticulously designed for your comfort and convenience.              </p>
              <p className="text-lg text-[#1c2841]/80 leading-relaxed">
                At the heart of Sri Sai Yatika lies its exclusive 15000 sq. ft Club House, serving as the crowning jewel of this prestigious community. Designed to cater to your every need, the Club House is a sanctuary for pleasure and relaxation, offering a host of amenities to enrich your lifestyle.

                Experience the epitome of luxury living at Sri Sai Yatika. where every detail has been thoughtfully curated to elevate your living experience              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "/srisaiyatika/MAIN.png"
              ].map((image, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Sri Sai Yatika ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-12">
            Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Swimming pool", img: "/srisaiyatika/Amenities/swimmingpool.jpg" },
              { name: "Gym", img: "/srisaiyatika/Amenities/gym.jpg" },
              { name: "Badminton Court", img: "/srisaiyatika/Amenities/bandminton.jpg" },
              { name: "Mini Theatre", img: "/srisaiyatika/Amenities/minitheatre.jpg" },
              { name: "Indoor games", img: "/srisaiyatika/Amenities/indoor.jpg" },
              { name: "Multipurpose Hall", img: "/srisaiyatika/Amenities/multipurposehall.jpg" }
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
                className={`px-8 py-3 rounded-full transition-colors ${activeTab === 'amenities'
                    ? 'bg-[#00827f] text-white'
                    : 'text-[#1c2841] hover:bg-gray-100'
                  }`}
              >
                Flat Specifications
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-8 py-3 rounded-full transition-colors ${activeTab === 'specifications'
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
                    image: "/icons/flooring.png",
                    items: [
                      <span><strong>Living, Drawing:</strong> 1200mm x 600mm Vitrified Tiles of reputed make.</span>,
                      <span><strong>Kitchen, Bedroom:</strong> 800mm x 800mm size Double Charged Vitrified Tiles of reputed make.</span>,
                      <span><strong>Bathrooms, Balcony, Utility:</strong> Anti-skid Vitrified/Ceramic Tiles of reputed make.</span>,
                      <span><strong>Corridors, Staircase:</strong> Granite flooring as per architect design, Tandoor Polished Stone.</span>,
                    ],
                  },
                  {
                    title: "WALLS",
                    image: "/icons/walls.png",
                    items: [
                      <span><strong>Structure:</strong> 8″ thick external walls and 4″ thick internal walls with solid cement bricks.</span>,
                      <span><strong>Internal Walls:</strong> Smooth Cement Plastering Finish.</span>,
                      <span><strong>External Walls:</strong> Double coat Cement Plastering Finish.</span>,
                    ],
                  },
                  {
                    title: "BATHROOMS",
                    image: "/icons/bathrooms.png",
                    items: [
                      <span>Wash basins in all bathrooms.</span>,
                      <span>Diverter and Shower in all bathrooms.</span>,
                      <span>EWC of reputed make for all bathrooms.</span>,
                      <span>Premium CP fittings of reputed make.</span>,
                      <span>Power provision for geysers in all bathrooms.</span>,
                    ],
                  },
                  {
                    title: "KITCHEN",
                    image: "/icons/kitchen.png",
                    items: [
                      <span>Provision for Modular Kitchen.</span>,
                      <span>Provision for Water Purifier, Chimney, and Ignition Stove.</span>,
                      <span>Provision for Bore Water Connection in Kitchen and Utility Area.</span>,
                      <span>Provision for Washing Machine in Utility Area.</span>,
                    ],
                  },
                  {
                    title: "WINDOWS & GRILLS",
                    image: "/icons/windows.png",
                    items: [
                      <span><strong>Windows:</strong> UPVC Sliding Windows with Plain Glass & Mosquito Mesh of reputed make.</span>,
                      <span><strong>Grills:</strong> Aesthetically designed, Mild Steel (MS) Grills with Powder Coat Finish.</span>,
                    ],
                  },
                  {
                    title: "DOORS",
                    image: "/icons/doors.png",
                    items: [
                      <span><strong>Main Door:</strong> Teakwood Frame and Hardwood Teak Veneer Shutter with Polish and SS Hardware of reputed make.</span>,
                      <span><strong>Bathroom Doors:</strong> Teakwood Doors and Flush Door Shutter with PU Polish and SS Hardware of reputed make.</span>,
                      <span><strong>Balconies:</strong> UPVC Sliding Doors with Plain Glass & Mosquito Mesh of reputed make.</span>,
                      <span><strong>Internal Doors:</strong> Teakwood Frame and Flush Door Shutter with both sides Laminated and SS Hardware of reputed make.</span>,
                    ],
                  },
                  {
                    title: "ELECTRICAL",
                    image: "/icons/electrical.png",
                    items: [
                      <span>Concealed Copper Wiring of reputed make.</span>,
                      <span>Power outlets for Air Conditioners in all Bedrooms.</span>,
                      <span>Power outlets for Cooking Range Chimney, Refrigerator, Microwave Oven, Mixer/Grinder in Kitchen.</span>,
                      <span>Power supply for each unit.</span>,
                      <span>Miniature Circuit Breakers (MCB) for each Distribution Board, of reputed make.</span>,
                      <span>Switches of reputed make.</span>,
                    ],
                  },
                  {
                    title: "TV & TELEPHONE",
                    image: "/icons/tv.png",
                    items: [
                      <span>One TV/Data Point in the Living Room/Drawing Room and Master Bedroom.</span>,
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
                      <span>DG backup for all lights and fans (excluding heavy appliances like ACs, geysers, washing machines, and dishwashers).</span>,
                      <span>100% DG backup for common areas and service/utility areas.</span>,
                    ],
                  },
                  {
                    title: "LIFTS",
                    image: "/icons/lift.png",
                    items: [
                      <span>High-speed automatic passenger/service lifts with a rescue device of reputed make.</span>,
                      <span>Lift lobby with Vitrified Tiles / Granite.</span>,
                    ],
                  },
                  {
                    title: "FIRE & SAFETY",
                    image: "/icons/fire-safety.png",
                    items: [
                      <span>Fire alarms, hydrants, and sprinklers as per fire regulation norms.</span>,
                    ],
                  },
                  {
                    title: "CAR WASH UTILITY",
                    image: "/icons/car-wash.png",
                    items: [
                      <span>Provision for a Car Wash Facility in each cellar parking area.</span>,
                    ],
                  },
                  {
                    title: "ELECTRIC CHARGING STATION",
                    image: "/icons/charging-station.png",
                    items: [
                      <span>A public electric charging station provided at a feasible location in the car parking area.</span>,
                    ],
                  },
                  {
                    title: "PARKING",
                    image: "/icons/parking.png",
                    items: [
                      <span>Entire parking is designed to suit the requisite number of car parks at stilt and cellar levels as per the sanctioned plan.</span>,
                    ],
                  },
                  {
                    title: "SECURITY",
                    image: "/icons/security.png",
                    items: [
                      <span>Sophisticated round-the-clock security system.</span>,
                      <span>Surveillance cameras at the main security gate, entrance lobby of all wings, clubhouse, passenger lifts, children’s play area, and other appropriate common areas.</span>,
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-16 relative inline-block">
            Location Advantage
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00827f] rounded-full"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Schools & Colleges",
                items: [
                  "Princeton Institute of Engineering and Technologies – 1 min",
                  "Anurag University – 2 mins",
                  "Narayana Junior College – 3 mins",
                  "Rotterdam International Schools – 2 mins",
                  "Nalla Malla Reddy Engineering Colleges – 7 mins"
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
              <div key={index} className="bg-[#f0f0f0] rounded-2xl p-6">
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
      <section className="py-16 bg-[#FEF5DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setActiveTab("masterPlan")}
                className={`px-6 py-2 rounded-full transition-colors ${activeTab === "masterPlan"
                    ? "bg-[#00827f] text-white"
                    : "text-[#1c2841] hover:bg-gray-100"
                  }`}
              >
                Master Plan
              </button>
              <button
                onClick={() => setActiveTab("floorPlans")}
                className={`px-6 py-2 rounded-full transition-colors ${activeTab === "floorPlans"
                    ? "bg-[#00827f] text-white"
                    : "text-[#1c2841] hover:bg-gray-100"
                  }`}
              >
                Floor Plans
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === "masterPlan" ? (
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-[#1c2841] mb-3">Master Plan</h3>
              <a
                href="/srisaiyatika/layout.png"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-2xl"
              >
                <img
                  src="/srisaiyatika/layout.png"
                  alt="Master Plan"
                  className="w-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                />
              </a>
              <p className="text-gray-600 text-center mt-3 max-w-lg">
                Explore the complete community layout, featuring thoughtfully designed infrastructure, green spaces, and essential amenities.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-[#1c2841] text-center mb-5">Floor Plans</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <a
                    href="/srisaiyatika/floorplan1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md"
                  >
                    <img
                      src="/srisaiyatika/floorplan1.png"
                      alt="Odd Floors Plan"
                      className="w-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <p className="text-gray-600 text-center mt-3 max-w-md">
                    Floor plan for <strong>1st, 4th, 7th, and 10th</strong> floors, featuring an efficient layout for comfortable and spacious living.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href="/srisaiyatika/floorplan2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md"
                  >
                    <img
                      src="/srisaiyatika/floorplan2.png"
                      alt="Even Floors Plan"
                      className="w-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <p className="text-gray-600 text-center mt-3 max-w-md">
                    Floor plan for <strong>2nd, 3rd, 5th, 6th, 8th, and 9th</strong> floors, designed for optimal space utilization and modern aesthetics.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>




      {/* Google Maps Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-8">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60915.633176284275!2d78.58823!3d17.400887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f0044451235%3A0xe103fa9988f2b014!2sHari%20Hara&#39;s%20Sri%20Sai%20Yathika!5e0!3m2!1sen!2sus!4v1743115827078!5m2!1sen!2sus"
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