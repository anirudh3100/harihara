import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const completedProjects = [
  {
    id: 1,
    title: "Hari Hara Residency",
    description: "Luxury apartments with modern amenities and beautiful landscaping. Located in the heart of East Hyderabad.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "East Hyderabad",
    year: "2023"
  },
  {
    id: 2,
    title: "Green Valley Apartments",
    description: "Eco-friendly residential complex with solar panels and rainwater harvesting system.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Secunderabad",
    year: "2022"
  },
  {
    id: 3,
    title: "Hari Hara Business Park",
    description: "Modern commercial complex with state-of-the-art facilities and 24/7 security.",
    image: "https://images.unsplash.com/photo-1486406146923-c433d7b01b52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "HITEC City",
    year: "2022"
  },
  {
    id: 4,
    title: "Lake View Villas",
    description: "Premium villas with lakefront views and private gardens.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Gachibowli",
    year: "2021"
  },
  {
    id: 5,
    title: "Hari Hara Heights",
    description: "High-rise residential towers with panoramic city views.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Madhapur",
    year: "2021"
  },
  {
    id: 6,
    title: "Garden City Complex",
    description: "Family-friendly apartments surrounded by lush gardens and parks.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Kompally",
    year: "2020"
  },
  {
    id: 7,
    title: "Hari Hara Mall",
    description: "Modern shopping mall with entertainment facilities and food court.",
    image: "https://images.unsplash.com/photo-1486406146923-c433d7b01b52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Begumpet",
    year: "2020"
  },
  {
    id: 8,
    title: "Riverside Apartments",
    description: "Luxury apartments with river views and premium amenities.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Kukatpally",
    year: "2019"
  },
  {
    id: 9,
    title: "Hari Hara Tech Park",
    description: "IT park with modern office spaces and recreational facilities.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Jubilee Hills",
    year: "2019"
  },
  {
    id: 10,
    title: "Heritage Homes",
    description: "Traditional-style villas with modern amenities and cultural elements.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: "Banjara Hills",
    year: "2018"
  }
];

export default function CompletedProjects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Completed Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 