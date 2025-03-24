import { Card, CardContent } from "@/components/ui/card";
import { aboutImages } from "@/lib/data";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Sri Sai Hari Hara Estates Pvt. Ltd. is a prominent development company in Hyderabad. We have a passionate and skilled team recognized for their professionalism, expertise, and attention to detail construction solutions.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading innovator in sustainable development solutions,
              creating positive impact across global communities.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To deliver exceptional value through innovative solutions while maintaining
              the highest standards of quality and sustainability.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutImages.map((image, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Team member ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Innovation", description: "Pushing boundaries with creative solutions" },
            { title: "Sustainability", description: "Committed to environmental responsibility" },
            { title: "Excellence", description: "Delivering the highest quality in everything we do" },
            { title: "Integrity", description: "Operating with transparency and ethical standards" },
          ].map((value, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
