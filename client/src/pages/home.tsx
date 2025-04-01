import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Link } from "wouter";
import { Building2, Users, Trophy, Clock, Ruler, Home as HomeIcon, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

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

  return (
    <div className="flex flex-col  bg-background">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-r from-blue-50/70 to-white/70">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/main2.jpeg"
            alt="Hari Hara Estates Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Original gradient overlay */}

        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-md">
              Hari Hara Estates
            </h1>
            <h2 className="mt-6 text-xl text-white max-w-2xl mx-auto font-medium drop-shadow-sm">
              Pioneering Real Estate in East Hyderabad since <h1 className="text-6xl font-bold">30 years.</h1>
            </h2>

          </div>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-12 h-12 text-[#00827F]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">28+</h3>
            <p className="text-gray-600">LAKHS SQFT DEVELOPED</p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-[#00827F]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">1000+ Customers</h3>
            <p className="text-gray-600">Happy families living in our properties</p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12 text-[#00827F]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">25+ Awards</h3>
            <p className="text-gray-600">Recognition for excellence in real estate</p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-12 h-12 text-[#00827F]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">30 Years</h3>
            <p className="text-gray-600">Of trusted experience in the industry</p>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="w-full pt-6 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 bg-white py-6 rounded-lg">
          <h2 className="text-5xl font text-center mb-0 text-Black">
            Featured Projects
          </h2>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
            }}
            setApi={setApi}
          >
            <CarouselContent className="flex items-center -ml-0">
              {projects.filter(p => p.status === 'ongoing').map((project) => (
                <CarouselItem key={project.id} className="pl-0 basis-full">
                  <div className="w-full relative group">
                    {/* Full-width Project Image */}
                    <div className="relative w-full h-[725px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Project Badge */}
                      <div className="absolute top-6 left-6 bg-[#0066B3] text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                        Ongoing
                      </div>
                    </div>

                    {/* Project Info Container */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-white">
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                            <p className="text-lg mb-4">{project.location}</p>
                            <div className="flex flex-wrap gap-4">
                              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                                {project.houseType}
                              </span>
                              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                                {project.size}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-bold mb-2">{project.price}</p>
                            <p className="text-sm mb-4"><strong>Possession</strong> {project.possessionDate}</p>
                            <Link href={`/${project.link}`}>
                              <button className="bg-[#00827F] hover:bg-[#005f60] text-white font-semibold px-6 py-3 rounded-lg shadow transition-all">
                                KNOW MORE
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#00827F] z-10 h-10 w-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all rounded-lg" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#00827F] z-10 h-10 w-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all rounded-lg" />
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0066B3] to-[#005f60] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Begin Your Luxury Living Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our team is ready to guide you in finding your dream home in Hyderabad's most desirable locations.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-white text-[#0066B3] hover:bg-gray-50 shadow-lg px-8 py-6 text-lg font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
