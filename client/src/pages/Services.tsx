import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Deep Home Cleaning",
    description: "Comprehensive cleaning of your entire home, including kitchens, bathrooms, bedrooms, and living areas.",
    price: "Starting at $150",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
  },
  {
    title: "Professional Carpet Cleaning",
    description: "Deep carpet cleaning using advanced equipment and eco-friendly solutions to remove stains and allergens.",
    price: "Starting at $80",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "Office Cleaning",
    description: "Professional cleaning services for offices and commercial spaces, ensuring a clean and productive environment.",
    price: "Custom quote",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            We offer a range of professional cleaning services to keep your space spotless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/book">
                  <Button className="w-full">Book Service</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
