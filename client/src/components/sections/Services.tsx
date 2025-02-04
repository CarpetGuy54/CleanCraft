import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Timer, Leaf, Heart } from "lucide-react";

const services = [
  {
    title: "Non-Toxic Cleaning",
    description: "Natural, organic essential oils blended into our cleaning solutions. Choose from Peppermint, Lavender, Eucalyptus, Lemongrass, and Orange.",
    icon: Leaf,
  },
  {
    title: "Fast-Drying Process",
    description: "Our efficient cleaning process ensures your floors dry in under an hour, minimizing disruption to your daily routine.",
    icon: Timer,
  },
  {
    title: "Multiple Surface Cleaning",
    description: "Professional cleaning for carpets, wood floors, tile, rugs, and upholstery - all with our eco-friendly approach.",
    icon: Sparkles,
  },
  {
    title: "Pet & Planet Friendly",
    description: "Safe for all family members - including your pets. Our organic solutions protect both your home and the environment.",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600">
            Professional floor cleaning services at just $35 per room
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