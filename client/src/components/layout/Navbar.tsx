import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [location] = useLocation();

  const NavLinks = () => (
    <>
      <Link href="/">
        <a className={`text-lg ${location === "/" ? "text-primary" : "text-gray-700"} hover:text-primary`}>
          Home
        </a>
      </Link>
      <Link href="/services">
        <a className={`text-lg ${location === "/services" ? "text-primary" : "text-gray-700"} hover:text-primary`}>
          Services
        </a>
      </Link>
      <Link href="/book">
        <Button>Get Free Estimate</Button>
      </Link>
    </>
  );

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary flex items-center gap-2">
            🌿 Organic Carpet Mechanic
          </a>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-6">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
}