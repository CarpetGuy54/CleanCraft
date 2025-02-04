import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Eco-Friendly Carpet Cleaning for a Healthier Home
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Experience the power of organic cleaning solutions. We remove stains, allergens, and dirt while protecting your family and the environment.
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
            <div className="mt-6 text-sm text-gray-600 flex items-center gap-2">
              <span>🌿 100% Organic Solutions</span>
              <span>•</span>
              <span>🏠 Safe for Family & Pets</span>
              <span>•</span>
              <span>⚡ Fast-Drying Process</span>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
              alt="Professional eco-friendly carpet cleaning"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}