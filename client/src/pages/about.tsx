import { Card, CardContent } from "@/components/ui/card";
import { aboutImages } from "@/lib/data";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Sri Sai Hari Hara Estates Pvt. Ltd. is a prominent development company in Hyderabad. We have a passionate and skilled team recognized for their professionalism, expertise, and attention to detail construction solutions. With a wealth of a trusted supplier network, trained tradesmen, more than two decades’ experience, Sri Sai Hari Hara Estates Pvt. Ltd. offers complete properties that exceed international standards.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Transparent Practices</h2>
            <p className="text-muted-foreground">
            Over the years, we have always worked with the prime motive of providing properties that surpass the expectations of all. We believe to continuously strive for better solutions and use the best facilities to deliver projects convincingly. We keep your satisfaction at the top of our priority list and make sure that the best step is taken to develop a property. All these reasons have made us one of the bests in the business when it comes to building property as per the market needs!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Covering All Sectors</h2>
            <p className="text-muted-foreground">
            We have had the experience of providing developing properties of different sectors right from townships, corporate offices, schools, multi-storied buildings, residential towers, and many more. We work with a one and only quality policy of developing property for the future. With us, you will always benefit from the international standard execution of the vision.
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
            { title: "Innovative", description: "The primary reason that separates us from the rest is our approach to provide services. We are always committed to delivering innovative solutions by making use of advanced technology and creative methodology." },
            { title: "Commitment To Quality", description: "We let our quality of work speak more than anything else. Our exquisite team of professionals will go a step ahead and tick all the boxes in terms of quality. Our commitment to satisfaction has made us the best in the business." },
            { title: "Dependable And Honest", description: "Hari Hara has been in command over the real estate industry because of the experienced in-house team. All our experts are highly trained and skilled in delivering services to perfection and solving issues uniquely." },
            { title: "Improving And Improving", description: "We work with a dedication to getting better with every passing day. We strive to meet the standards set to be the best in the business. We never jeopardize the quality and make sure things are served in an effective manner." },
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
