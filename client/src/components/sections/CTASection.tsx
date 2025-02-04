import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready for a Cleaner Space?
        </h2>
        <p className="text-primary-foreground mb-8 max-w-2xl mx-auto">
          Schedule your free estimate today and experience the difference professional cleaning can make.
        </p>
        <Link href="/book">
          <Button size="lg" variant="secondary" className="text-lg">
            Get Your Free Estimate
          </Button>
        </Link>
      </div>
    </div>
  );
}
