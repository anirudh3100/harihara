import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Battery, ArrowUpDown, AlertTriangle, Car, Zap, SquareParking, Shield, Plus } from "lucide-react";
import type { Project } from "@/lib/data";

interface BuildingSpecsProps {
  project: Project;
}

export default function BuildingSpecs({ project }: BuildingSpecsProps) {
  const specifications = [
    { name: "Power Backup", icon: <Battery className="h-6 w-6" />, details: project.buildingSpecs.powerBackup },
    { name: "Lifts", icon: <ArrowUpDown className="h-6 w-6" />, details: project.buildingSpecs.lifts },
    { name: "Fire & Safety", icon: <AlertTriangle className="h-6 w-6" />, details: project.buildingSpecs.fireSafety },
    { name: "Car Wash Utility", icon: <Car className="h-6 w-6" />, details: project.buildingSpecs.carWash },
    { name: "EV Charging", icon: <Zap className="h-6 w-6" />, details: project.buildingSpecs.evCharging },
    { name: "Parking", icon: <SquareParking className="h-6 w-6" />, details: project.buildingSpecs.parking },
    { name: "Security", icon: <Shield className="h-6 w-6" />, details: project.buildingSpecs.security },
  ];

  return (
    <div className="fixed right-4 top-20 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="h-12 px-4 rounded-full backdrop-blur-lg bg-background/80">
            Building Features
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] backdrop-blur-xl bg-background/80 border-none">
          <div className="grid gap-4 py-4 h-[calc(100vh-8rem)] overflow-y-auto">
            {specifications.map((spec, index) => (
              <Card key={index} className="backdrop-blur-xl bg-background/80 border border-primary/20">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="text-primary">{spec.icon}</div>
                  <div>
                    <h3 className="font-semibold">{spec.name}</h3>
                    <p className="text-sm text-muted-foreground">{spec.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {project.buildingSpecs.additionalAmenities && project.buildingSpecs.additionalAmenities.length > 0 && (
              <Card className="backdrop-blur-xl bg-background/80 border border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Plus className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">Additional Amenities</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.buildingSpecs.additionalAmenities.map((amenity, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}