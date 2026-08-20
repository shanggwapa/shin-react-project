import { useState } from "react";

import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Works", to: "/works" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-gray-900 underline underline-offset-4";
    } else {
      return "text-gray-600 hover:text-gray-900";
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <Section
        className="py-0"
        containerClassName="relative z-50 bg-white"
      >
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              ★★★
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            {/* Home, About, Projects */}
            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    getLinkClass(isActive)
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Desktop Contact Button */}
            <NavLink to="/contact">
              <Button>Contact</Button>
            </NavLink>

          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </Section>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out grid overflow-hidden absolute top-16 left-0 right-0 border-b shadow-lg",
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 flex flex-col">

            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium py-3 transition-colors",
                    getLinkClass(isActive)
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

          </div>
        </div>
      </div>

    </header>
  );
}