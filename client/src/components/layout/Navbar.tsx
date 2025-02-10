
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      <Link href="/">
        <div className="text-lg hover:text-primary cursor-pointer">Home</div>
      </Link>
      <Link href="/services">
        <div className="text-lg hover:text-primary cursor-pointer">Services</div>
      </Link>
      <Link href="/book">
        <Button variant="default">Book Now</Button>
      </Link>
      <a href="tel:2086918565" className="text-lg hover:text-primary">
        (208) 691-8565
      </a>
    </>
  );

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="text-xl font-semibold text-primary cursor-pointer">
              Organic Carpet Mechanic
            </div>
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
      </div>
    </nav>
  );
}
