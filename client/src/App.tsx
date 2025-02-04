import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Book from "@/pages/Book";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/book" component={Book} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <a href="tel:2086918565" className="text-primary hover:text-primary/80 font-semibold">
              (208) 691-8565
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Post Falls, Idaho 83854
            </p>
            <a href="mailto:OrganicCarpetGuy@gmail.com" className="text-sm text-gray-600 hover:text-primary">
              OrganicCarpetGuy@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 Organic Carpet Mechanic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;