import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-600 hover:text-yellow-700 transition"
          >
            DomainBroker
          </Link>

          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {["Buy Domain", "Sell Domain", "Contact", "Domains", "FAQ"].map(
              (item, i) => (
                <Link
                  key={i}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 rounded-lg hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
          lg:hidden fixed inset-x-0 bg-white border-b border-t mt-4 transition-all duration-300
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
        >
          <div className="container mx-auto px-4 py-2 space-y-1">
            {["Buy Domain", "Sell Domain", "Contact", "Domains", "FAQ"].map(
              (item, i) => (
                <Link
                  key={i}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 rounded-lg hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
