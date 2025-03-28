import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Building2, Users, Trophy, Clock, Download, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import BrochureForm from "@/components/BrochureForm";

export default function SriSaiViradhya() {
  const [activeTab, setActiveTab] = useState('amenities');
  const plans = [
    "/srisaiviradhya/3dplans/1.jpeg",
    "/srisaiviradhya/3dplans/2.jpeg",
    "/srisaiviradhya/3dplans/3.jpeg",
    "/srisaiviradhya/3dplans/4.jpeg",
    "/srisaiviradhya/3dplans/5.jpeg",
    "/srisaiviradhya/3dplans/6.jpeg",
    "/srisaiviradhya/3dplans/7.jpeg",
    "/srisaiviradhya/3dplans/8.jpeg",
    "/srisaiviradhya/3dplans/9.jpeg",
    "/srisaiviradhya/3dplans/10.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef5db] to-white">
      {/* Floating CTAs */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
  {/* Download Brochure Button */}
  <BrochureForm
    projectName="Sri Sai Viradhya"
    brochureUrl="/srisaikakatiya/Hariharas-Sri-Sai-Kakatiya-Brochure.pdf"
  />

  {/* Enquire Now Button with Phone Number */}
  <a href="tel:+919066832832">
    <Button className="bg-[#1c2841] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#2a3b5c] transition-colors flex items-center gap-2">
      <Phone className="w-5 h-5" />
      Enquire Now
    </Button>
  </a>
</div>


      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#1c2841]">
        {/* Background Image and Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/srisaiviradhya/background.jpg')] bg-cover bg-center opacity-300" />
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
              { icon: Ruler, title: "Size of Flats", value: "1820 - 2359 Sft" },
              { icon: Calendar, title: "TS RERA PR NO", value: "P02200003663" },
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
      <section className="py-14 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* YouTube Video on the Left */}
      <div className="relative">
        <iframe 
          className="w-full h-64 md:h-80 rounded-xl border-4 border-[#c8a16e]" 
          src="https://www.youtube.com/embed/uD3f_q1xzDQ" 
          
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Description on the Right */}
      <div>
        <h2 className="text-4xl font-bold text-[#c8a16e] mb-4">
          Experience the Lifestyle Meant for You
        </h2>
        <p className="text-[#1c2841] text-lg leading-relaxed mb-4">
          Imagine coming home to your perfect sanctuary at Sri Sai Viradhya in Uppal. 
          It’s more than just a residence; it’s a haven where luxury meets convenience, 
          nestled just 5 minutes from Uppal Metro Station.
        </p>
        <p className="text-[#1c2841] text-lg leading-relaxed">
          With premium construction quality and thoughtful design, each corner of your 
          home exudes warmth and elegance. Be part of this vibrant community, where your 
          dream home awaits.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Why you should consider Hari Hara's Sri Sai Viradhya */}
<section className="py-20 bg-[#fef5db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
  <h2 className="text-3xl font-bold text-[#1c2841] mb-8 relative">
    Why you should consider Hari Hara's Sri Sai Viradhya
    <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#00827f] rounded-full"></div>
  </h2>
  <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-2 flex items-center">
    <span className="text-[#00827f] text-xl mr-2">●</span> HMDA and RERA approved
  </p>
  <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-2 flex items-center">
    <span className="text-[#00827f] text-xl mr-2">●</span> 250 meters away from Hyderabad-Warangal highway             
  </p>
  <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-2 flex items-center">
    <span className="text-[#00827f] text-xl mr-2">●</span> Well connected to schools, colleges, offices, retail & shopping
  </p>
  <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-2 flex items-center">
    <span className="text-[#00827f] text-xl mr-2">●</span> 20 minutes drive to Infosys Pocharam
  </p>
  <p className="text-lg text-[#1c2841]/80 leading-relaxed mb-2 flex items-center">
    <span className="text-[#00827f] text-xl mr-2">●</span> Well developed social infrastructure all around
  </p>
</div>

            <div className="grid grid-cols-1 gap-4">
              {[
                "/srisaiviradhya/main.jpeg"
              ].map((image, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Sri Sai Viradhya ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Floor Plans */}
      <section className="py-10 bg-[#fef5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-12">
          3D Floor Plans
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default (Mobile)
          breakpoints={{
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Larger Tablets
            1280: { slidesPerView: 4 }  // Desktops (4 images at a time)
          }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="pb-10"
        >
          {plans.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href={img} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={`3D Plan ${index + 1}`} className="w-full h-50 object-cover cursor-pointer" />
    </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
        { img: "/srisaiviradhya/Amenities/swimmingpool.jpg" },
        { img: "/srisaiviradhya/Amenities/Gym.png" },
        { img: "/srisaiviradhya/Amenities/Security.png" },
        { img: "/srisaiviradhya/Amenities/meeting.jpg" },
        { img: "/srisaiviradhya/Amenities/indoor.png" },
        { img: "/srisaiviradhya/Amenities/outdoorgames.jpg" }
      ].map((amenity, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <img src={amenity.img} alt={`Amenity ${index + 1}`} className="w-full h-55 object-cover" />
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
                        <strong>Corridors:</strong> Granite flooring as per architect design
                      </span>,
                      <span>
                        <strong>Staircase:</strong> Tandur Polished stone
                      </span>,
                    ],
                  },
                  {
                    title: "WALLS",
                    image: "/icons/walls.png",
                    items: [
                      <span>
                        <strong>Structure:</strong> Cement blocks with 8" thick external walls and 4" thick internal walls.
                      </span>,
                      <span>
                        <strong>Internal:</strong> Smooth cement plastering finish.
                      </span>,
                      <span>
                        <strong>External:</strong> Double coat cement plastering finish.
                      </span>,
                    ],
                  },
                  
                  
                  {
                    title: "Bathrooms",
                    image: "/icons/walls.png",
                    items: [
                        <span><strong>Wash basins</strong> in all bathrooms</span>,
                        <span><strong>Diverter and Shower</strong> in all bathrooms</span>,
                        <span><strong>wall-mounted WC</strong> in alltoilets of reputed make</span>,
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
                      <span><strong>Concealed copper wiring</strong> of reputed </span>,
                      <span><strong>Power outlets</strong> for air conditioners in the living room and all bedrooms</span>,
                      <span><strong>Power outlet</strong> for cooking range chimney, refrigerator, microwave oven, and mixer/grinder in kitchen</span>,
                      <span><strong>Power supply</strong> for each unit</span>,
                      <span><strong>Miniature Circuit Breakers (MCB)</strong> for each distribution board of reputed make</span>,
                      <span><strong>Switches</strong> of reputed make</span>,
                    ],
                  },
                  {
                    title: "WINDOWS & GRILLS",
                    image: "/icons/windows.png",
                    items: [
                      <span>
                        <strong>Windows:</strong> UPVC sliding windows with plain glass & mosquito mesh.
                      </span>,
                      <span>
                        <strong>Grills:</strong> Aesthetically designed, Mild Steel (MS) grills with powder coat finish.
                      </span>,
                    ],
                  },
                  {
                    title: "DOORS",
                    image: "/icons/doors.png",
                    items: [
                      <span>
                        <strong>Main Door:</strong> Teakwood frame and hardwood teak veneer shutter with polish and SS hardware of reputed make.
                      </span>,
                      <span>
                        <strong>Bedroom Doors:</strong> Teakwood frame and flush door shutter with laminate finish and SS hardware of reputed make.
                      </span>,
                      <span>
                        <strong>Toilet & Utility Doors:</strong> Teakwood frame and flush door with PU polish and SS hardware of reputed make.
                      </span>,
                      <span>
                        <strong>Balcony:</strong> UPVC sliding doors with plain glass & mosquito mesh of reputed make.
                      </span>,
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
                    image: "/icons/power.png",
                    items: [
                      <span>
                        <strong>Flats:</strong> 100% DG backup for lights and fans (excluding ACs, geysers, and other heavy appliances).
                      </span>,
                      <span>
                        <strong>Common Areas & Utility:</strong> 100% DG backup for common areas and service/utility areas.
                      </span>,
                    ],
                  }
,                  
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
                    title: "CAR WASH UTILITY",
                    image: "/icons/car-wash.png",
                    items: [
                      <span>
                        <strong>Facility:</strong> Provision for Car Wash facility in each cellar parking area.
                      </span>,
                    ],
                  },
                  {
                    title: "ELECTRIC CHARGING STATION",
                    image: "/icons/charging.png",
                    items: [
                      <span>
                        <strong>Facility:</strong> Public Electric Charging Station will be provided at a feasible location in the car parking area.
                      </span>,
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1c2841] text-center mb-16 relative inline-block">
            Location Advantage
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00827f] rounded-full"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Schools",
                items: [
                  "Kiran International School (5 min)",
                  "Global Indian International School (5 min)",
                  "Kendriya Vidyalaya (10 min)",
                  "Siddhartha Public School (5 min)",
                  "Sri Chaitanya Techno School (5 min)"
                ]
              },
              {
                title: "Offices",
                items: [
                  "Infosys (25 min)",
                  "Genpact (15 min)",
                  "Survey Of India (10 min)",
                  "NGRI (15 min)"
                ]
              },
              {
                title: "Stores",
                items: [
                  "Big Bazaar (2 min)",
                  "Asian Cine Square (10 min)",
                  "Decathon Sports (2 min)",
                  "Metro Super Market (10 min)"
                ]
              },
              {
                title: "Hospitals",
                items: [
                  "Spark Hospitals (15 min)",
                  "Ankura Hospital (2 min)",
                  "Aditya Hospital (5 min)",
                  "Apex Hospital (5 min)"
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
          onClick={() => setActiveTab("floorPlan")}
          className={`px-8 py-3 rounded-full transition-colors ${
            activeTab === "floorPlan"
              ? "bg-[#00827f] text-white"
              : "text-[#1c2841] hover:bg-gray-100"
          }`}
        >
          Floor Plan
        </button>
      </div>
    </div>

    {/* Content */}
    {activeTab === "masterPlan" ? (
      <div className="flex flex-col items-center">
        
        <a href="/srisaiviradhya/Masterplan.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/srisaiviradhya/Masterplan.jpg"
            alt="Master Plan"
            className="w-full max-w-3xl rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </a>
        <p className="text-gray-600 text-center mt-4 max-w-2xl">
          The master plan showcases the complete layout of the community, highlighting key amenities, green spaces, and infrastructure.
        </p>
      </div>
    ) : (
      <div className="flex flex-col items-center">
        
        <a href="/srisaiviradhya/floorplan.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/srisaiviradhya/floorplan.jpg"
            alt="Floor Plan"
            className="w-full max-w-3xl rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </a>
        <p className="text-gray-600 text-center mt-4 max-w-2xl">
          This <strong>3 BHK Flat</strong> is designed with spacious interiors, modern aesthetics, and efficient space utilization.
        </p>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60915.8314257972!2d78.588122!3d17.400292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f297b3bd1fb%3A0x7e3480c2190d0c25!2sSri%20Sai%20Viradhya!5e0!3m2!1sen!2sus!4v1743114158759!5m2!1sen!2sus"
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