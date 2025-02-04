import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The best cleaning service I've ever used. They pay attention to every detail!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "Reliable, professional, and thorough. Our office has never looked better.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Property Manager",
    content: "Outstanding service every time. Highly recommend for any cleaning needs.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-center">
              <CardHeader>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">"{testimonial.content}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
