import { useRoute, Link } from "wouter";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, School, Building2, ShoppingBag, Stethoscope } from "lucide-react";
import RealEstateSpecs from "@/components/RealEstateSpecs";
import BuildingSpecs from "@/components/BuildingSpecs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Project() {
  const [, params] = useRoute("/project/:id");
  const project = projects.find(p => p.id === Number(params?.id));

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
        <Link href="/projects">
          <Button>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  // Extract location from title (text after "at")
  const location = project.title.split(" at ")[1];
  // Extract type from title (text containing "BHK" or "Villas")
  const type = project.title.match(/(\d+\s*BHK|Villas)/)?.[0] || "Residential";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="ghost">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>

      {/* Centered Large Image */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Four Info Boxes */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {/* Location Box */}
        <Card className="bg-muted/50">
          <CardContent className="p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
            <p className="text-lg font-semibold">{location}</p>
          </CardContent>
        </Card>

        {/* Type Box */}
        <Card className="bg-muted/50">
          <CardContent className="p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
            <p className="text-lg font-semibold">{type}</p>
          </CardContent>
        </Card>

        {/* Status Box */}
        <Card className="bg-muted/50">
          <CardContent className="p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
            <p className="text-lg font-semibold capitalize">{project.status}</p>
          </CardContent>
        </Card>

        {/* RERA Box */}
        <Card className="bg-muted/50">
          <CardContent className="p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">TS RERA PR NO</h3>
            <p className="text-lg font-semibold">P02200003829</p>
          </CardContent>
        </Card>
      </div>

      {/* Project Details */}
      <div className="max-w-5xl mx-auto">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <p className="text-muted-foreground">{project.details}</p>
          </CardContent>
        </Card>

        {/* Amenity Images Carousel */}
        {project.amenityImages && project.amenityImages.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.amenityImages.map((amenity, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                        <img
                          src={amenity.image}
                          alt={amenity.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-xl font-semibold">{amenity.title}</h3>
                            <p className="text-sm opacity-90">{amenity.description}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        )}

        {/* Location Advantages */}
        {project.locationAdvantages && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Location Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Schools */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <School className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Schools</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.locationAdvantages.schools.map((school, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        <div className="font-medium">{school.name}</div>
                        <div className="text-xs">{school.distance} • {school.type}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Offices */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Offices</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.locationAdvantages.offices.map((office, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        <div className="font-medium">{office.name}</div>
                        <div className="text-xs">{office.distance} • {office.type}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stores */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Stores</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.locationAdvantages.stores.map((store, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        <div className="font-medium">{store.name}</div>
                        <div className="text-xs">{store.distance} • {store.type}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hospitals */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Stethoscope className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Hospitals</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.locationAdvantages.hospitals.map((hospital, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        <div className="font-medium">{hospital.name}</div>
                        <div className="text-xs">{hospital.distance} • {hospital.type}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <BuildingSpecs project={project} />
        <RealEstateSpecs project={project} />
      </div>
    </div>
  );
}