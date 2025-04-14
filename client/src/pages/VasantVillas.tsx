import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Building2, Users, Trophy, Clock, Download, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BrochureForm from "@/components/BrochureForm";

const VasantVillas = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const plans = [
    "/vasantvillas/EAST.png",
    "/vasantvillas/WEST.png",
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Contact Buttons */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        <BrochureForm
          projectName="Sri Sai Yatika"
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
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/vasantvillas/main2.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl font-bold">Vasant Villas</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl">Luxury Living Redefined</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <span className="rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
                3 & 4 BHK Villas
              </span>
              <span className="rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
                Gated Community
              </span>
              <span className="rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
                Premium Location
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 shadow-lg md:grid-cols-5"
        >
          <div className="group space-y-2">
            <div className="text-sm text-gray-500">Project Area</div>
            <div className="text-lg font-semibold">4.5 Acres</div>
          </div>
          <div className="group space-y-2">
            <div className="text-sm text-gray-500">Location</div>
            <div className="text-lg font-semibold">Kompally</div>
          </div>
          <div className="group space-y-2">
            <div className="text-sm text-gray-500">Project Type</div>
            <div className="text-lg font-semibold">Residential</div>
          </div>
          <div className="group space-y-2">
            <div className="text-sm text-gray-500">Size Range</div>
            <div className="text-lg font-semibold">2400-3200 Sq.ft</div>
          </div>
          <div className="group space-y-2">
            <div className="text-sm text-gray-500">RERA Number</div>
            <div className="text-lg font-semibold">P02200002481</div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['overview', 'amenities', 'floor plans', 'location', 'gallery'].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-lg capitalize ${activeTab === tab
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

      {/* Content Sections */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Experience Luxury Living</h2>
                <p className="text-gray-600">
                  Vasant Villas offers an exclusive collection of 3 & 4 BHK villas designed for those who appreciate the finer things in life. Set in a pristine environment, each villa is crafted with attention to detail and premium materials.
                </p>
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/x23cHKnqIaI"
                    title="Project Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Project Highlights</h3>
                <div className="grid gap-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="font-semibold">Premium Location</div>
                    <p className="text-sm text-gray-600">
                      Strategically located in Kompally with easy access to major IT hubs
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="font-semibold">Modern Amenities</div>
                    <p className="text-sm text-gray-600">
                      State-of-the-art facilities for a comfortable lifestyle
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="font-semibold">Quality Construction</div>
                    <p className="text-sm text-gray-600">
                      Built with premium materials and modern construction techniques
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floor Plans Section */}
        {activeTab === "floor plans" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">3D Floor Plans</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="h-[600px] w-full rounded-xl"
            >
              {plans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={plan}
                    alt={`Floor Plan ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Amenities Section */}
        {activeTab === "amenities" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">World-Class Amenities</h2>
            <div className="grid grid-cols-1">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/vasantvillas/amenities.png"
                  alt=""
                  className="h-200 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                </div>
              </div>
            </div>
          </div>
        )}


        {/* Gallery Section */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Project Gallery</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() =>
                    setSelectedImage(`/vasantvillas/gallery/${index + 1}.png`)
                  }
                >
                  <img
                    src={`/vasantvillas/gallery/${index + 1}.png`}
                    alt={`Gallery Image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}


        {/* Location Section */}
        {activeTab === "location" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Prime Location</h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30442.248436467526!2d78.636123!3d17.494092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d7a45e98be7%3A0x470d0841689b623!2sGodumakunta%2C%20Secunderabad%2C%20Telangana%20501301%2C%20India!5e0!3m2!1sen!2sus!4v1744632263538!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold">Schools & Colleges</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>DPS School - 2 km</li>
                  <li>Ryan International - 3 km</li>
                  <li>JNTU - 5 km</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold">IT Hubs & Offices</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Raheja Mindspace - 8 km</li>
                  <li>HITEC City - 10 km</li>
                  <li>Financial District - 12 km</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold">Shopping & Entertainment</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Forum Mall - 4 km</li>
                  <li>Inorbit Mall - 6 km</li>
                  <li>PVR Cinemas - 5 km</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold">Healthcare</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Apollo Hospital - 3 km</li>
                  <li>KIMS Hospital - 5 km</li>
                  <li>Rainbow Hospital - 4 km</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#00827F] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Ready to Experience Luxury Living?
              </h2>
              <p className="text-white/80">
                Schedule a visit or download our brochure to learn more
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-white text-[#00827F] hover:bg-white/90">
                Schedule a Visit
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VasantVillas; 