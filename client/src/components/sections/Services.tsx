import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Timer, Leaf, Heart } from "lucide-react";

const services = [
  {
    title: "Quiet Cleaning Process",
    description: "Our disruption-free cleaning process lets you continue your day while we refresh your space.",
    icon: Leaf,
  },
  {
    title: "Fast-Drying Process",
    description: "Get back to your routine quickly - our efficient cleaning process ensures your carpets dry in under an hour.",
    icon: Timer,
  },
  {
    title: "Improved Air Quality",
    description: "We don't just clean what you see - we eliminate hidden odors and allergens, improving your overall air quality.",
    icon: Sparkles,
  },
  {
    title: "Essential Oil Options",
    description: "Choose from Peppermint, Lavender, Eucalyptus, Lemongrass, or Orange essential oils for a lasting fresh scent.",
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
            Professional carpet cleaning that removes hidden odors and refreshes your space
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