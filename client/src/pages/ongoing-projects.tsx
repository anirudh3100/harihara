import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export default function OngoingProjects() {
  const ongoingProjects = projects.filter(p => p.status === 'ongoing');

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Ongoing Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
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
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium">Category: {project.category}</p>
                  <p className="text-sm font-medium mt-1">Status: {project.status}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {ongoingProjects.length === 0 && (
          <p className="text-center text-muted-foreground">No ongoing projects at the moment.</p>
        )}
      </div>
    </div>
  );
} 