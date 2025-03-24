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
import { Building2, Users, Trophy, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 bg-background">
      {/* Hero Section */}
      <section className="bg-[#f0f0f0] py-16 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:text-white">
        Hari Hara Estates
      </h1>
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Pioneering Real Estate in East Hyderabad since 30 years.
      </p>
      <div className="mt-10">
        <Link href="/contact">
          <Button size="lg" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Info Boxes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Box 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Building2 className="w-12 h-12 text-[#00827f] dark:text-[#00827f]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">28+</h3>
      <p className="text-muted-foreground dark:text-gray-300">LAKHS SQFT DEVELOPED</p>
    </div>

    {/* Box 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Users className="w-12 h-12 text-[#00827f] dark:text-[#00827f]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">1000+ Customers</h3>
      <p className="text-muted-foreground dark:text-gray-300">Happy families living in our properties</p>
    </div>

    {/* Box 3 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Trophy className="w-12 h-12 text-[#00827f] dark:text-[#00827f]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">25+ Awards</h3>
      <p className="text-muted-foreground dark:text-gray-300">Recognition for excellence in real estate</p>
    </div>

    {/* Box 4 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Clock className="w-12 h-12 text-[#00827f] dark:text-[#00827f]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">30 Years</h3>
      <p className="text-muted-foreground dark:text-gray-300">Of trusted experience in the industry</p>
    </div>
  </div>
</section>


      {/* Projects Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f0f0f0] rounded-lg shadow-sm">
  <h2 className="text-3xl font-bold text-center mb-12 text-black">
    Our Ongoing Projects
  </h2>
  <Carousel
    className="w-full max-w-5xl mx-auto"
    opts={{
      align: "start",
      loop: true,
    }}
  >
    <CarouselContent>
      {projects.filter(p => p.status === 'ongoing').map((project) => (
        <CarouselItem key={project.id}>
          <Link href={`/project/${project.id}`}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Left side - Image and Title */}
                <div>
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>

                {/* Right side - Amenities */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-[#00827f]">
                      Key Amenities
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.category.split('|').filter(Boolean).map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-[#00827f]" />
                          <span>{amenity.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-[#00827f]">
                      Building Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-[#00827f]" />
                        <span>{project.buildingSpecs.powerBackup}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-[#00827f]" />
                        <span>{project.buildingSpecs.lifts}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-[#00827f]" />
                        <span>{project.buildingSpecs.security}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
  </Carousel>
</section>


      {/* Call to Action */}
      <section className="bg-muted/50 py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
