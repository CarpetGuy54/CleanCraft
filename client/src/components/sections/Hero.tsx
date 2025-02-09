import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">
              Only $35 Per Bedroom!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Don't Get Caught Being Nose Blind!
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              You might not notice it, but your guests do. Our quiet, non-toxic carpet cleaning removes hidden odors and improves air quality, making your space truly fresh and inviting.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/book">
                <Button size="lg" className="text-lg">
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:2086918565">
                <Button size="lg" variant="outline" className="text-lg">
                  (208) 691-8565
                </Button>
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-600 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>🌿 Non-toxic Solutions</span>
              <span>•</span>
              <span>🤫 Quiet Process</span>
              <span>•</span>
              <span>⚡ Dries Under 1 Hour</span>
            </div>
            <div className="mt-4">
              <img 
                src="/assets/Pets.png" 
                alt="Pet-friendly cleaning services"
                className="h-24 object-contain"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/carpet-guy.png"
              alt="Professional carpet cleaning service"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}