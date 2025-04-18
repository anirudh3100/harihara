import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-[#0B2447] via-[#19376D] to-[#146C94]">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90">
              Building Dreams, Delivering Excellence
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sri Sai Hari Hara Estates Pvt. Ltd. is a prominent development company in Hyderabad. We have a passionate and skilled team recognized for their professionalism, expertise, and attention to detail construction solutions. With a wealth of a trusted supplier network, trained tradesmen, more than two decades' experience, Sri Sai Hari Hara Estates Pvt. Ltd. offers complete properties that exceed international standards.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Transparent Practices
                </h2>
                <p className="text-muted-foreground">
                  Over the years, we have always worked with the prime motive of providing properties that surpass the expectations of all. We believe to continuously strive for better solutions and use the best facilities to deliver projects convincingly. We keep your satisfaction at the top of our priority list and make sure that the best step is taken to develop a property.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  Covering All Sectors
                </h2>
                <p className="text-muted-foreground">
                  We have had the experience of providing developing properties of different sectors right from townships, corporate offices, schools, multi-storied buildings, residential towers, and many more. We work with a one and only quality policy of developing property for the future. With us, you will always benefit from the international standard execution of the vision.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-primary" />
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Innovative", 
                description: "The primary reason that separates us from the rest is our approach to provide services. We are always committed to delivering innovative solutions by making use of advanced technology and creative methodology.",
                icon: "💡"
              },
              { 
                title: "Commitment To Quality", 
                description: "We let our quality of work speak more than anything else. Our exquisite team of professionals will go a step ahead and tick all the boxes in terms of quality. Our commitment to satisfaction has made us the best in the business.",
                icon: "⭐"
              },
              { 
                title: "Dependable And Honest", 
                description: "Hari Hara has been in command over the real estate industry because of the experienced in-house team. All our experts are highly trained and skilled in delivering services to perfection and solving issues uniquely.",
                icon: "🤝"
              },
              { 
                title: "Improving And Improving", 
                description: "We work with a dedication to getting better with every passing day. We strive to meet the standards set to be the best in the business. We never jeopardize the quality and make sure things are served in an effective manner.",
                icon: "📈"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
