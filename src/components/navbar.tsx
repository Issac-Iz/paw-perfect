"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Grooming", href: "#grooming" },
  { label: "Boarding", href: "#boarding" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-paw-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4.5-2c-.83 0-1.5.67-1.5 1.5S6.67 11 7.5 11 9 10.33 9 9.5 8.33 8 7.5 8zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S17.33 8 16.5 8zM12 6c-.83 0-1.5-.67-1.5-1.5S11.17 3 12 3s1.5.67 1.5 1.5S12.83 6 12 6zm0 10c-2.21 0-4 1.79-4 4 0 .55.45 1 1 1h6c.55 0 1-.45 1-1 0-2.21-1.79-4-4-4z" />
            </svg>
          </div>
          <span className="text-xl font-heading font-bold text-paw-800">
            PawPerfect
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground hover:text-paw-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+60312345678" className="text-sm font-semibold text-paw-700">
            +603-8888 9999
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants(),
              "bg-paw-500 hover:bg-paw-600 text-white rounded-full px-6"
            )}
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-muted-foreground hover:text-paw-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants(),
              "w-full bg-paw-500 hover:bg-paw-600 text-white rounded-full mt-2"
            )}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
