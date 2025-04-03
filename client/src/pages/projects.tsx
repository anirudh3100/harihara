import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-[#0B2447] via-[#19376D] to-[#146C94]">
        <div className="absolute inset-0 bg-[url('/images/projects-hero.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/90">
              Discover our portfolio of innovative projects that are shaping the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={
                project.id === '1' ? '/sri-sai-viradhya' :
                project.id === '2' ? '/sri-sai-kakatiya' :
                project.id === '3' ? '/vasant-villas' :
                project.id === '4' ? '/sri-sai-yatika' : '#'
              }>
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        project.status === 'ongoing'
                          ? 'bg-primary text-white'
                          : 'bg-gray-300 text-gray-800'
                      }`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{project.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Hyderabad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
