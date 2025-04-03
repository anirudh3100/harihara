import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Link } from "wouter";
import { Building2, Users, Trophy, Clock, Search, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BrochureForm from "@/components/BrochureForm";

// Custom hook for autoplay
function useAutoplay(interval: number = 5000) {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(intervalId);
  }, [api, interval]);

  return setApi;
}

export default function Home() {
  const setApi = useAutoplay(8000);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    console.log("Search triggered with:", { searchQuery, selectedLocation, selectedType });
    
    const filtered = projects.filter(project => {
      const matchesQuery = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = selectedLocation === "" || 
        project.location.toLowerCase().includes(selectedLocation.toLowerCase());
      
      const matchesType = selectedType === "" || 
        project.houseType.toLowerCase().includes(selectedType.toLowerCase());

      return matchesQuery && matchesLocation && matchesType;
    });
    
    console.log("Filtered projects:", filtered);
    setFilteredProjects(filtered);
    setShowResults(true);
  };

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/main2.jpeg"
            alt="Hari Hara Estates Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Home in Hyderabad
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover luxury living spaces crafted with excellence over 30 years of trusted experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="bg-[#00827F] hover:bg-[#005f60] text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-[#00827F] hover:bg-[#005f60] text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="bg-white shadow-xl rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,auto] gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00827F]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00827F] appearance-none bg-white cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  <option value="uppal">Uppal</option>
                  <option value="pocharam">Pocharam</option>
                  <option value="habsiguda">Habsiguda</option>
                </select>
              </div>
              <div>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00827F] appearance-none bg-white cursor-pointer"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="2 bhk">2 BHK</option>
                  <option value="3 bhk">3 BHK</option>
                </select>
              </div>
              <Button 
                className="bg-[#00827F] hover:bg-[#00827F]/90 text-white px-8 py-3 h-full whitespace-nowrap"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Search Results Section */}
      {showResults && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Search Results</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Found {filteredProjects.length} properties matching your criteria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#00827F] text-white px-4 py-2 rounded-full text-sm">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.location}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {project.houseType}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {project.size}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-bold text-[#00827F]">{project.price}</p>
                        <p className="text-sm text-gray-500">Possession: {project.possessionDate}</p>
                      </div>
                      <Link href={`/${project.link}`}>
                        <Button className="bg-[#00827F] hover:bg-[#005f60] text-white">
                          View Details <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00827F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#00827F]" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-[#00827F]">28+</h3>
              <p className="text-gray-600">Lakhs SQFT Developed</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00827F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#00827F]" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-[#00827F]">1000+</h3>
              <p className="text-gray-600">Happy Families</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00827F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-[#00827F]" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-[#00827F]">25+</h3>
              <p className="text-gray-600">Awards Won</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00827F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#00827F]" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-[#00827F]">30</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium properties designed for modern living
            </p>
          </div>

          <Carousel
            className="w-full"
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {filteredProjects.filter(p => p.status === 'ongoing').map((project) => (
                <CarouselItem key={project.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  >
                    <div className="relative h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#00827F] text-white px-4 py-2 rounded-full text-sm">
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.location}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {project.houseType}
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {project.size}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold text-[#00827F]">{project.price}</p>
                          <p className="text-sm text-gray-500">Possession: {project.possessionDate}</p>
                        </div>
                        <Link href={`/${project.link}`}>
                          <Button className="bg-[#00827F] hover:bg-[#005f60] text-white">
                            View Details <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#00827F] z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#00827F] z-10" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0B2447] via-[#19376D] to-[#146C94] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our expert team guide you through the perfect property selection process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#19376D] hover:bg-white/90 px-8 py-6 text-lg w-full sm:w-auto">
                Schedule a Visit
              </Button>
            </Link>
            <BrochureForm
              projectName="Hari Hara Estates"
              brochureUrl="/brochures/Hari-Hara-Estates-Brochure.pdf"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
              buttonText="Download Brochure"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
