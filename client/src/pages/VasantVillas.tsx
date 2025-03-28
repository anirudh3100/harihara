import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Building2, Users, Trophy, Clock, Download, Phone, Mail } from "lucide-react";
import { useState } from "react";
import BrochureForm from "@/components/BrochureForm";

export default function VasantVillas() {
  const [activeTab, setActiveTab] = useState('amenities');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef5db] to-white">
      {/* Floating CTAs */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        {/* Download Brochure Button */}
        <BrochureForm
          projectName="Vasant Villas"
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
          <div className="absolute inset-0 bg-[url('/vasantvillas/background.jpg')] bg-cover bg-center opacity-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2841]/80 to-[#1c2841]/60" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Logo */}
          

          {/* Phone Number - Bottom Right */}
          <div className="absolute bottom-5 right-8">
            <a href="tel:+918609696969" className="text-white text-xl font-medium flex items-center gap-2 hover:text-blue-100 transition-colors">
              <Phone className="w-5 h-5" />
              +91 8609 69 69 69
            </a>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              { icon: Building2, title: "Project In", value: "6 Acres" },
              { icon: MapPin, title: "Location", value: "Keesara" },
              { icon: Home, title: "Type", value: "4 BHK Villas" },
              { icon: Ruler, title: "Size of Villas", value: "187 & 223 Sq Yds" },
              { icon: Calendar, title: "TS RERA PR NO", value: "P02200005914" },
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
                Your Haven of Luxury
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#00827f] rounded-full"></div>
              </h2>
              <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-8">
                Live like royalty in these opulent 4BHK triplex villas nestled in the heart of Keesara where every detail is designed to cater to your desires. From luxurious amenities to sustainable features, Vasant Villas offers a living experience like no other.
              </p>
              <p className="text-lg text-[#1c2841]/80 leading-relaxed">
                This prestigious project spans 6 acres of lush landscapes and comprises 69 exquisite triplex villas. As you enter, be greeted by an awe-inspiring sight that sets the tone for the grandeur that awaits within. The serene green surroundings add a touch of tranquility to your everyday life, making every moment a breath of fresh air.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "/vasantvillas/main.png"
              ].map((image, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Vasant Villas ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
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

    {/* Full-width Image */}
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src="/vasantvillas/amenities.png"
        alt="Amenity"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>

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
                      image: "/icons/flooring.png",
                      items: [
                        <span><strong>Living, Dining Area & Staircase:</strong> Imported Marble.</span>,
                        <span><strong>Family Lounge, Pooja Room, Foyer Areas, Kitchen, Bedrooms & Dressing Areas:</strong> 800x1600mm Vitrified Tiles of reputed make.</span>,
                        <span><strong>Multi-Purpose Hall:</strong> Wooden Laminated Flooring.</span>,
                        <span><strong>Bathrooms/Balcony/Deck Area/Store Room/Laundry/Utility Floor:</strong> Anti-skid vitrified tiles of reputed make.</span>,
                      ],
                    },
                    {
                      title: "DADOING",
                      image: "/icons/dadoing.png",
                      items: [
                        <span><strong>Kitchen:</strong> Ceramic tiles up to 2’-0” height above the kitchen countertop, of reputed make.</span>,
                        <span><strong>Bathrooms:</strong> Ceramic tiles of reputed make, up to 7’-0” height.</span>,
                        <span><strong>Utilities:</strong> Ceramic tiles of reputed make, up to 3’-0” height.</span>,
                      ],
                    },
                    {
                      title: "BATHROOMS",
                      image: "/icons/bathrooms.png",
                      items: [
                        <span>Washbasins in all bathrooms and powder rooms.</span>,
                        <span>Diverter and Shower in all bathrooms except Powder Rooms.</span>,
                        <span>EWC for all bathrooms and powder rooms of reputed make.</span>,
                        <span>Premium CP fittings.</span>,
                        <span>Power provision for geysers in all bathrooms.</span>,
                      ],
                    },
                    {
                      title: "KITCHEN",
                      image: "/icons/kitchen.png",
                      items: [
                        <span><strong>Platform:</strong> Granite platform with stainless steel sink and swinging spout of reputed make.</span>,
                      ],
                    },
                    {
                      title: "ELECTRICAL",
                      image: "/icons/electrical.png",
                      items: [
                        <span>Concealed copper wiring of reputed make.</span>,
                        <span>Power outlets for air conditioners in the living room, family lounge, multipurpose hall, and all bedrooms.</span>,
                        <span>Power outlet for cooking range chimney, refrigerator, microwave oven, mixer/grinder, and water purifier.</span>,
                        <span>Power outlet for dishwasher in utility & washing machine in laundry.</span>,
                        <span>Power supply for each unit.</span>,
                        <span>Miniature Circuit Breakers (MCB) for each distribution board, of reputed make.</span>,
                        <span>Switches of reputed make.</span>,
                      ],
                    },
                    {
                      title: "PAINTING",
                      image: "/icons/painting.png",
                      items: [
                        <span><strong>External:</strong> Textured or putty with 2 coats of exterior emulsion paint.</span>,
                        <span><strong>Internal:</strong> Premium Emulsion Paint of reputed make with roller finishing over luppam finish.</span>,
                      ],
                    },
                    {
                      title: "WALLS",
                      image: "/icons/walls.png",
                      items: [
                        <span><strong>Structure:</strong> 8’’ thick external walls and 4” thick internal walls with Cement Blocks.</span>,
                        <span><strong>Internal:</strong> Smooth cement plastering finish.</span>,
                        <span><strong>External:</strong> Double coat cement plastering finish.</span>,
                      ],
                    },
                    {
                      title: "DOORS",
                      image: "/icons/doors.png",
                      items: [
                        <span><strong>Main Door:</strong> Teakwood frame and hardwood teak veneer shutter with polish and SS hardware of reputed make.</span>,
                        <span><strong>Internal Doors:</strong> Teakwood frame and Flush door shutter with both sides Laminate and SS hardware of reputed make.</span>,
                        <span><strong>Bathroom Doors:</strong> Teakwood frame and Flush door shutter with PU Polish and SS hardware of reputed make.</span>,
                        <span><strong>Balcony:</strong> UPVC sliding doors with plain glass & mosquito mesh of reputed make.</span>,
                      ],
                    },
                    {
                      title: "WINDOWS & GRILLS",
                      image: "/icons/windows.png",
                      items: [
                        <span><strong>Windows:</strong> UPVC sliding windows with plain glass & mosquito mesh of reputed make.</span>,
                        <span><strong>Grills:</strong> Aesthetically designed, Mild Steel (MS) grills with powder coat finish.</span>,
                      ],
                    },
                    {
                      title: "UTILITY & WASH",
                      image: "/icons/utility.png",
                      items: [
                        <span><strong>Utility:</strong> Water inlet/outlet point for dishwasher and tap point for general washing.</span>,
                        <span><strong>Laundry:</strong> Water inlet/outlet point for washing machine.</span>,
                      ],
                    },
                    {
                      title: "SMART HOME PROVISIONS",
                      image: "/icons/smart-home.png",
                      items: [
                        <span>One bathroom occupancy sensor in the Master Bedroom and powder room on the Ground Floor.</span>,
                        <span>One standalone biometric lock at the main door.</span>,
                        <span>One standalone video door phone.</span>,
                      ],
                    },
                  
                  
                  {
                    title: "DADOING",
                    image: "/icons/dadoing.png",
                    items: [
                      <span>
                        <strong>Kitchen:</strong> Ceramic tiles up to 2’-0” height above the kitchen countertop, of reputed make.
                      </span>,
                      <span>
                        <strong>Bathrooms:</strong> Ceramic tiles of reputed make, up to 7’-0” height.
                      </span>,
                      <span>
                        <strong>Utilities:</strong> Ceramic tiles of reputed make, up to 3’-0” height.
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
                    <span>DG backup for all lights, fans, and power points excluding heavy appliances like ACs, washing machines, dishwashers, and geysers.</span>,
                    <span>100% DG backup for all common areas.</span>,
                  ],
                },
                {
                  title: "BILLING SYSTEMS",
                  image: "/icons/billing.png",
                  items: [
                    <span>Prepaid Billing System for Electricity, DG, Water, and Maintenance.</span>,
                  ],
                },
                {
                  title: "SECURITY",
                  image: "/icons/security.png",
                  items: [
                    <span>Sophisticated round-the-clock security system.</span>,
                    <span>Intercom facility in all units, connecting to Security.</span>,
                    <span>CC Cameras in appropriate common areas and the Club House.</span>,
                    <span>Solar fencing along the boundary.</span>,
                  ],
                },
                {
                  title: "STRUCTURE",
                  image: "/icons/structure.png",
                  items: [
                    <span>RCC Framed Structure designed to withstand wind and seismic loads.</span>,
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
                  "Reqelford International School- 18 min",
                  "Davis High School- 5 min",
                  "Serenity High School- 12 min",
                  "Gowthami Junior College- 4 min",
                  "KLR Degree College- 4 min",
                  "Geethanjali College of Technology- 7 min"
                ]
              },
              {
                title: "Offices",
                items: [
                  "ECIL- 24 min",
                  "NFC- 26 min",
                  "Hindustan Cables Limited- 28 min",
                  "Kushaiguda Industrial Area- 22 min",
                  "Uppal Industrial Area- 43 min"
                ]
              },
              {
                title: "Centres Of Contiguity",
                items: [
                  "ECIL X Roads- 12 min",
                  "Dr AS Rao Nagar- 14 min",
                  "Sainikpuri- 16 min",
                  "Neredmet- 20 min",
                  "Yapral- 31 min",
                  "Shamirpet- 17 min"
                ]
              },
              {
                title: "Hospitals",
                items: [
                  "ESI Hospital- 23 min",
                  "Nithin Hospital- 3 min",
                  "Sai Rushi Hospital – 3 min",
                  "Thulasi Hospital ( ECIL X Roads): 12 min",
                  "Thatha Hospital ( Dr. AS Rao Nagar)- 14 min",
                  "Shreyas Hospital (Dr AS Rao Nagar) – 14 min"
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
    {/* Tabs */}
    <div className="flex justify-center mb-12">
      <div className="bg-white rounded-full p-1 shadow-md">
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

    {/* Content */}
    {activeTab === "masterPlan" ? (
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-[#1c2841] mb-4">Master Plan</h3>
        <a
          href="/vasantvillas/masterplan.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-3xl"
        >
          <img
            src="/vasantvillas/masterplan.jpg"
            alt="Master Plan"
            className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </a>
        <p className="text-gray-600 text-center mt-4 max-w-2xl">
          The master plan showcases the complete layout of the community, highlighting key amenities, green spaces, and infrastructure.
        </p>
      </div>
    ) : (
      <div>
        <h3 className="text-2xl font-semibold text-[#1c2841] text-center mb-6">Floor Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <a
              href="/vasantvillas/west-facing-villa.png"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src="/vasantvillas/WEST.png"
                alt="West Facing Villa"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-600 text-center mt-4 max-w-md">
              <span>The <strong>West Facing Villa</strong> features a spacious layout with modern interiors, ensuring a comfortable and stylish living experience.</span>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="/vasantvillas/east-facing-villa.png"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src="/vasantvillas/EAST.png"
                alt="East Facing Villa"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-600 text-center mt-4 max-w-md">
             <span>The <strong>East Facing Villa</strong> is designed to maximize natural light and ventilation, offering an elegant and energy-efficient home.</span>
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
</section>



      {/* Google Maps Section */}
      <section className="py-24 bg-[#fef5db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-8">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60882.85148754472!2d78.638371!3d17.499004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d7a45e98be7%3A0x470d0841689b623!2sGodumakunta%2C%20Secunderabad%2C%20Telangana%20501301%2C%20India!5e0!3m2!1sen!2sus!4v1743113196713!5m2!1sen!2sus"
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