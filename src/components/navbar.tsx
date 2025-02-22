import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-custom-dark backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Triviiia Logo"
            className="w-8 h-8 rounded-lg"
          />

          <span className="text-xl text-gray-100 font-semibold">Triviiia</span>
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-100 hover:text-green-300">
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-100 hover:text-green-300"
          >
            How it works
          </a>
          <a href="#download" className="text-gray-100 hover:text-green-300">
            Download
          </a>
          <a href="#about" className="text-gray-100 hover:text-green-300">
            About
          </a>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
}
