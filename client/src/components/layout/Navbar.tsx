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
        <span className={`text-lg ${location === "/" ? "text-primary" : "text-gray-700"} hover:text-primary cursor-pointer`}>
          Home
        </span>
      </Link>
      <Link href="/services">
        <span className={`text-lg ${location === "/services" ? "text-primary" : "text-gray-700"} hover:text-primary cursor-pointer`}>
          Services
        </span>
      </Link>
      <Link href="/book">
        <Button>Get Free Estimate</Button>
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-primary cursor-pointer">
            🌿 Organic Carpet Mechanic
          </span>
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