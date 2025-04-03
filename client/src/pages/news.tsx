import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { news } from "@/lib/data";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-[#0B2447] via-[#19376D] to-[#146C94]">
        <div className="absolute inset-0 bg-[url('/images/news-hero.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl font-bold mb-6">News & Media</h1>
            <p className="text-xl text-white/90">
              Stay updated with our latest news, events, and industry insights
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Corporate Film Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qzuHRrZwYks"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Corporate Film - Sri Hari Hara Real Estate
              </h2>
              <p className="text-lg text-gray-600 mt-2">Igloo Ideas</p>
            </div>
          </div>
        </motion.section>

        {/* Success Stories Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Dr_62XHFjS4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Success Story Of Sri Sai Hari Hara Estates M.D Yadava Reddy
                </h3>
                <p className="text-gray-600 mt-2">Disha TV</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/EPKtOw46Q3c"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Credai Property Show 2019 - Hari Hara Estates
                </h3>
                <p className="text-gray-600 mt-2">Disha TV</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Showcases Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Project Showcases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/yEYq6MACdbE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Harihara Estates Projects | Sri Sai Soukya Luxurious Gated Community @ Uppal
                </h3>
                <p className="text-gray-600 mt-2">HYBIZTV HD</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4W9zeE692bc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Premium gated Community in Uppal Harihara Estates | SBI Property Show 2019
                </h3>
                <p className="text-gray-600 mt-2">HYBIZTV HD</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Awards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="/newsimage.jpeg"
                  alt="Times Realty Icons"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900">Times Realty Icons</h3>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
