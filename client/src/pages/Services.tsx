import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Residential Carpet Cleaning",
    description: "Comprehensive carpet cleaning for homes and apartments using eco-friendly solutions. Removes stains, allergens, and dirt while being safe for your family and pets.",
    price: "$35 per room",
    icon: "🏠",
  },
  {
    title: "Floor Care Services",
    description: "Professional cleaning for wood floors, tile, and other hard surfaces. Restore the beauty of your floors with our specialized cleaning techniques.",
    price: "Custom quote",
    icon: "✨",
  },
  {
    title: "Upholstery & Rug Cleaning",
    description: "Refresh and restore your furniture and rugs with our gentle yet effective organic cleaning solutions. Perfect for extending the life of your favorite pieces.",
    price: "Custom quote",
    icon: "🛋️",
  },
  {
    title: "Commercial Cleaning",
    description: "Tailored cleaning solutions for businesses, commercial spaces, property management companies, and realtors. Keep your space looking professional year-round.",
    price: "Contract pricing available",
    icon: "🏢",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Professional Cleaning Services</h1>
          <p className="text-xl text-gray-600">
            Eco-friendly cleaning solutions for both residential and commercial spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.price}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href="/book">
                  <Button className="w-full">Schedule Service</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Organic Carpet Mechanic?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <div className="text-2xl mb-2">🌿</div>
              <h3 className="font-semibold mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Natural, organic essential oils that are safe for your family and pets</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Quick-Drying</h3>
              <p className="text-gray-600">Dries in under an hour, minimizing disruption to your routine</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">💯</div>
              <h3 className="font-semibold mb-2">Professional Results</h3>
              <p className="text-gray-600">Experience that delivers exceptional cleaning every time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}