import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";

const completedProjects = [
  {
    id: 1,
    title: "Sri Sai Soukya",
    image: "/completedprojects/sri-sai-soukya.jpeg",
    location: "Uppal, Hyderabad",
    year: "2020"
  },
  {
    id: 2,
    title: "Sri Sai Anandamai",
    image: "/completedprojects/sri-sai-anandamai.jpeg",
    location: "Uppal, Hyderabad",
    year: "2020"
  },
  {
    id: 3,
    title: "Siri Residency",
    image: "/completedprojects/siri-residency.jpeg",
    location: "Tarnaka, Hyderabad",
    year: "2016"
  },
  {
    id: 4,
    title: "Sri Sai Elite",
    image: "/completedprojects/sri-sai-elite.jpeg",
    location: "Hitech-city, Hyderabad",
    year: "2015"
  },
  {
    id: 5,
    title: "Sri Sai Classic",
    image: "/completedprojects/sri-sai-classic.jpeg",
    location: "Hitech-city, Hyderabad",
    year: "2015"
  },
  {
    id: 6,
    title: "Sri Sai Nest",
    image: "/completedprojects/sri-sai-nest.jpeg",
    location: "Madhapur, Hyderabad",
    year: "2011"
  },
  {
    id: 7,
    title: "Sri Sai Pragati Pride",
    image: "/completedprojects/sri-sai-pragati-pride.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "2010"
  },
  {
    id: 8,
    title: "Sri Sai Orchid",
    image: "/completedprojects/sri-sai-orchid.jpeg",
    location: "East Maredpally, Hyderabad",
    year: "2009"
  },
  {
    id: 9,
    title: "Sri Sai Land Mark",
    image: "/completedprojects/sri-sai-landmark.jpeg",
    location: "ST.NO.8, Habsiguda, Hyderabad",
    year: "2006"
  },
  {
    id: 10,
    title: "Sri Sai Heights",
    image: "/completedprojects/sri-sai-heights.jpeg",
    location: "ST.NO.8, Habsiguda, Hyderabad",
    year: "2005"
  },
  {
    id: 11,
    title: "Sri Sai Paradise",
    image: "/completedprojects/Sri-Sai-Paradise-1-768x512.jpeg",
    location: "ST.NO.8, Habsiguda, Hyderabad",
    year: "2004"
  },
  {
    id: 12,
    title: "Sri Sai Vihar",
    image: "/completedprojects/Sri-Sai-Vihar.jpeg",
    location: "Nacharam, Hyderabad",
    year: "2003"
  },
  {
    id: 13,
    title: "Sri Sai Towers",
    image: "/completedprojects/Sri-Sai-Towers.jpg",
    location: "Habsiguda, Hyderabad",
    year: "2003"
  },
  {
    id: 14,
    title: "Sri Sai Garden",  
    image: "/completedprojects/Sri-Sai-Garden.jpeg",
    location: "Ramantapur, Hyderabad",
    year: "2001"
  },
  {
    id: 15,
    title: "Sri Sai Residency",
    image: "/completedprojects/Sri-Sai-Residency-1-768x511.jpeg",
    location: "Maheshwari Nagar, Habsiguda, Hyderabad",
    year: "2001"
  },
  {
    id: 16,
    title: "Sri Sai Residency",
    image: "/completedprojects/Sri-Sai-Ashrey1-1-768x492.jpeg",
    location: "Ravindra Nagar, Habsiguda, Hyderabad",
    year: "2000"
  },
  {
    id: 17,
    title: "Sri Sai Enclave",
    image: "/completedprojects/Sri-Sai-Enclave-1-768x496.jpeg",
    location: "ST.NO.8, Habsiguda, Hyderabad",
    year: "2000"
  },
  {
    id: 18,
    title: "Sri Sai Nest",
    image: "/completedprojects/Sri-Sai-Nest-2-1.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "1999"
  },
  {
    id: 19,
    title: "Sri Sai Avenue",
    image: "/completedprojects/Sri-Sai-Avenue-1-768x479.jpeg",
    location: "Ramanthapur, Hyderabad",
    year: "1999"
  },
  {
    id: 20,
    title: "Sri Sai Apartments",
    image: "/completedprojects/Sri-Sai-Apartments-A-B-1-300x200.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "1998"
  },
  {
    id: 21,
    title: "Sri Sai Arcade",
    image: "/completedprojects/Sri-Sai-Arcade-1-300x192.jpeg",
    location: "ST.NO.8, Habsiguda, Hyderabad",
    year: "1996"
  },
  {
    id: 22,
    title: "Sri Sai Nivas",
    image: "/completedprojects/Sri-Sai-Nivas-1-253x300.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "1996"
  },
  {
    id: 23,
    title: "Sri Sai Sadan",
    image: "/completedprojects/Sri-Ram-Sadan-1-252x300.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "1994"
  },
  {
    id: 24,
    title: "Hari Hara Apartments",
    image: "/completedprojects/Hari-Hara-Apartments-229x300.jpeg",
    location: "Sai Chitra Nagar, Ramanthapur, Hyderabad",
    year: "1993"
  }
];

const completedCommercialProjects = [
  {
    id: 1,
    title: "H Square",
    image: "/completedprojects/h-square.jpeg",
    location: "Uppal, Hyderabad",
    year: "2019"
  },
  {
    id: 2,
    title: "H Arena",
    image: "/completedprojects/h-arena.jpeg",
    location: "Medipally, Hyderabad",
    year: "2016"
  },
  {
    id: 3,
    title: "Padmavathi Shopping Mall",
    image: "/completedprojects/padmavati-shopping.jpeg",
    location: "Ameerpet, Hyderabad",
    year: "2010"
  },
  {
    id: 4,
    title: "Hari Hara Arcade",
    image: "/completedprojects/hari-hara-arcade.jpeg",
    location: "Ameerpet, Hyderabad",
    year: "2010"
  },
  {
    id: 5,
    title: "Hari Hara Estates",
    image: "/completedprojects/Hari-Hara-Estates-683x1024-1.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "2006"
  },
  {
    id: 6,
    title: "Syndicate bank Building",
    image: "/completedprojects/Syndicate-Bank1-768x581.jpeg",
    location: "Habsiguda, Hyderabad",
    year: "1998"
  },
  {
    id: 7,
    title: "Megha Junior College",
    image: "/completedprojects/Megha-Junior-College1-768x468.jpeg",
    location: "Ramantapur, Hyderabad",
    year: "1997"
  }
];

export default function CompletedProjects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-[#0B2447] via-[#19376D] to-[#146C94]">
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl font-bold mb-6">Completed Projects</h1>
            <p className="text-xl text-white/90">
              Explore our successfully delivered projects that showcase our expertise
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Residential Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Residential Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200 overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Commercial Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Commercial Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedCommercialProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200 overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
} 