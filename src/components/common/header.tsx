import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="bg-purple-100 border-b border-purple-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-purple-900">
              Shang
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 sm:space-x-8">
            <NavLink to="/" className="text-sm font-medium text-purple-900 hover:text-gray-900 transition-colors">Home</NavLink>
            <NavLink to="/about" className="text-sm font-medium text-purple-900 hover:text-gray-900 transition-colors">About</NavLink>
            <NavLink to="/about" className="text-sm font-medium text-purple-900 hover:text-gray-900 transition-colors">Works</NavLink>
            <NavLink to="/about" className="text-sm font-medium text-purple-900 hover:text-gray-900 transition-colors">Contact</NavLink>
            
            {/* Contact Button */}
            <NavLink to="/contact">

            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}