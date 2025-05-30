import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Building2, Users, Trophy, Clock, Download, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BrochureForm from "@/components/BrochureForm";
import { motion } from "framer-motion";

export default function SriSaiKakatiya() {
  const [activeTab, setActiveTab] = useState('overview');
  const plans = [
    "/srisaikakatiya/BLOCK-A-TYPICAL-FLOOR-PLAN.png",
    "/srisaikakatiya/BLOCK-B-TYPICAL-FLOOR-PLAN.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <BrochureForm
          projectName="Sri Sai Kakatiya"
          brochureUrl="/srisaikakatiya/Hariharas-Sri-Sai-Kakatiya-Brochure.pdf"
        />
        <a href="tel:+919066832832">
          <Button className="bg-[#00827F] hover:bg-[#00827F]/90 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Enquire Now
          </Button>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/srisaikakatiya/main.png"
            alt="Sri Sai Kakatiya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2447]/80 via-[#19376D]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sri Sai Kakatiya
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover luxury living in Kompally. Premium 2 & 3 BHK apartments designed for modern families.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">Kompally, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Home className="w-5 h-5 text-white" />
                <span className="text-white">2 & 3 BHK Premium Apartments</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-white" />
                <span className="text-white">Ready to Move</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: Building2, title: "Project Area", value: "1.5 Acres" },
              { icon: MapPin, title: "Location", value: "Kompally" },
              { icon: Home, title: "Type", value: "2 & 3 BHK" },
              { icon: Ruler, title: "Size Range", value: "1150 - 1750 Sft" },
              { icon: Calendar, title: "RERA No.", value: "P02200002341" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#00827F]/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-[#00827F]" />
                </div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">{item.title}</h3>
                <p className="text-xl font-bold text-[#0B2447]">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['overview', 'amenities', 'floor plans', 'location', 'gallery'].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-lg capitalize ${
                  activeTab === tab 
                    ? 'bg-[#00827F] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#0B2447] mb-8">
                  Experience Modern Living
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sri Sai Kakatiya is a premium residential project spread across 1.5 acres in the heart of Kompally. 
                    The project offers thoughtfully designed 2 & 3 BHK apartments with modern amenities and excellent connectivity.
                  </p>
                  <div className="space-y-4">
                    {[
                      "HMDA and RERA approved",
                      "Close to Outer Ring Road",
                      "Near to schools and hospitals",
                      "15 minutes to IT corridor",
                      "Premium specifications",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#00827F]" />
                        <p className="text-gray-600">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/srisaikakatiya/masterplan.jpg"
                  alt="Master Plan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Floor Plans Section */}
      {activeTab === 'floor plans' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0B2447] text-center mb-12">
              3D Floor Plans
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="pb-12"
            >
              {plans.map((img, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  >
                    <a href={img} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={img} 
                        alt={`Floor Plan ${index + 1}`} 
                        className="w-full aspect-square object-cover"
                      />
                    </a>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* Amenities Section */}
      {activeTab === 'amenities' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0B2447] text-center mb-12">
              World-Class Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Swimming Pool",
                  image: "/srisaikakatiya/Amenities/swimmingpool.jpg",
                  description: "Temperature controlled swimming pool with kids' pool"
                },
                {
                  title: "Modern Gym",
                  image: "/srisaikakatiya/Amenities/Gym.png",
                  description: "State-of-the-art fitness center with modern equipment"
                },
                {
                  title: "24/7 Security",
                  image: "/srisaikakatiya/Amenities/Security.png",
                  description: "Round-the-clock security with CCTV surveillance"
                },
                {
                  title: "Club House",
                  image: "/srisaikakatiya/Amenities/meeting.jpg",
                  description: "Multi-purpose hall for community gatherings"
                },
                {
                  title: "Indoor Games",
                  image: "/srisaikakatiya/Amenities/indoor.png",
                  description: "Table tennis, carrom, chess, and more"
                },
                {
                  title: "Outdoor Sports",
                  image: "/srisaikakatiya/Amenities/outdoorgames.jpg",
                  description: "Children's play area and sports facilities"
                }
              ].map((amenity, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{amenity.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeTab === 'gallery' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0B2447] text-center mb-12">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "/srisaikakatiya/gallery/1.jpeg",
                "/srisaikakatiya/gallery/2.jpeg",
                "/srisaikakatiya/gallery/3.jpeg",
                "/srisaikakatiya/gallery/4.jpeg",
                "/srisaikakatiya/gallery/5.jpeg",
                "/srisaikakatiya/gallery/6.jpeg",
                "/srisaikakatiya/gallery/7.jpeg",
                "/srisaikakatiya/gallery/8.jpeg",
                "/srisaikakatiya/gallery/9.jpeg"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <a href={image} target="_blank" rel="noopener noreferrer">
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location Section */}
      {activeTab === 'location' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0B2447] text-center mb-12">
              Prime Location
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8862986757307!2d78.49340661486825!3d17.516859988007547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f7b6d08d3a9%3A0x4c4c4c4c4c4c4c4c!2sSri%20Sai%20Kakatiya!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Schools & Colleges",
                    items: [
                      "Delhi Public School - 5 mins",
                      "Oakridge International - 10 mins",
                      "JNTU - 15 mins",
                      "St. Martin's Engineering College - 10 mins"
                    ]
                  },
                  {
                    title: "IT Hubs & Offices",
                    items: [
                      "Kompally IT Park - 5 mins",
                      "Genpact - 15 mins",
                      "TCS - 20 mins",
                      "Tech Mahindra - 25 mins"
                    ]
                  },
                  {
                    title: "Shopping & Entertainment",
                    items: [
                      "Metro Mall - 5 mins",
                      "Asian Cinemas - 10 mins",
                      "More Supermarket - 2 mins",
                      "Central Mall - 15 mins"
                    ]
                  },
                  {
                    title: "Healthcare",
                    items: [
                      "KIMS Hospital - 10 mins",
                      "Medicover Hospital - 5 mins",
                      "Apollo Clinic - 15 mins",
                      "Rainbow Hospital - 10 mins"
                    ]
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-[#0B2447] mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00827F]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0B2447] mb-6">
                Key Distances
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Metro Station", distance: "10 mins" },
                  { title: "ORR", distance: "5 mins" },
                  { title: "Airport", distance: "30 mins" },
                  { title: "City Center", distance: "25 mins" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">{item.title}</p>
                      <p className="text-lg font-semibold text-[#0B2447]">{item.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0B2447] via-[#19376D] to-[#146C94]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Modern Living?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Schedule a visit to Sri Sai Kakatiya and discover your dream home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#19376D] hover:bg-white/90 px-8 py-6">
              Schedule a Visit
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 