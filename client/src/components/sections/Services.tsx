import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Timer, Leaf, Heart } from "lucide-react";

const services = [
  {
    title: "Essential Oil Scents",
    description: "Choose from Peppermint, Lavender, Eucalyptus, Lemongrass, or Orange essential oils for a natural, refreshing scent.",
    icon: Leaf,
  },
  {
    title: "Fast-Drying Process",
    description: "Get back to your routine quickly - our efficient cleaning process ensures your carpets dry in under an hour.",
    icon: Timer,
  },
  {
    title: "Multiple Surface Cleaning",
    description: "Professional cleaning for carpets, wood floors, tile, rugs, and upholstery - all with our non-toxic approach.",
    icon: Sparkles,
  },
  {
    title: "Safe for Everyone",
    description: "Our non-toxic solutions are perfect for homes with kids, pets, and allergy-sensitive individuals. Experience a healthier clean!",
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
            Professional floor cleaning services at just $35 per bedroom
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