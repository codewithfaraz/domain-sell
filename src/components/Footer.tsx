import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-yellow-600">
              DomainBroker
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Your trusted partner in domain trading since 2023
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
            <div className="space-y-3">
              <Link
                to="/buy-domain"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                Buy Domain
              </Link>
              <Link
                to="/sell-domain"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                Sell Domain
              </Link>
              <Link
                to="/domains"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                Domain Management
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <div className="space-y-3">
              <Link
                to="/about"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <div className="space-y-3">
              <Link
                to="/privacy"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-gray-600 hover:text-yellow-600 transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} DomainBroker. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-600 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
