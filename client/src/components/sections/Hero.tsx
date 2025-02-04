import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Experience the difference with our expert cleaning services. From homes to offices, we deliver spotless results every time.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/book">
                <Button size="lg" className="text-lg">
                  Get Free Estimate
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Clean modern living room"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
