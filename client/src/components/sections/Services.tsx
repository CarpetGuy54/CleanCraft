import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Spray, Sofa, Shield } from "lucide-react";

const services = [
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning of every corner, ensuring a spotless environment.",
    icon: Sparkles,
  },
  {
    title: "Carpet Cleaning",
    description: "Professional carpet cleaning that removes deep-seated dirt and stains.",
    icon: Spray,
  },
  {
    title: "Upholstery Cleaning",
    description: "Restore and refresh your furniture with our expert cleaning service.",
    icon: Sofa,
  },
  {
    title: "Eco-Friendly Options",
    description: "Green cleaning solutions that are safe for your family and the environment.",
    icon: Shield,
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We offer a comprehensive range of cleaning services to meet all your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
