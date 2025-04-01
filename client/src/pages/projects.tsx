import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { Link } from "wouter";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-black">Our Ongoing Projects</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover our portfolio of innovative projects that are shaping the future
          across various industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={
            project.id === '1' ? '/sri-sai-viradhya' :
            project.id === '2' ? '/sri-sai-kakatiya' :
            project.id === '3' ? '/vasant-villas' :
            project.id === '4' ? '/sri-sai-yatika' : '#'
          }>
            <Card className="cursor-pointer hover:shadow-2xl transition-transform duration-300 bg-white border border-gray-200 transform hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'ongoing'
                      ? 'bg-[#00827f] text-white'
                      : 'bg-gray-300 text-gray-800'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-black">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm font-medium text-[#00827f]">
                  Amenity: {project.category}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
