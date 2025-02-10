import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-xl font-semibold text-primary cursor-pointer">
                Organic Carpet Mechanic
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/services">
              <span className="text-gray-600 hover:text-primary cursor-pointer">Services</span>
            </Link>
            <Link href="/book">
              <Button>Book Now</Button>
            </Link>
            <a href="tel:2086918565" className="text-gray-600 hover:text-primary">
              (208) 691-8565
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}