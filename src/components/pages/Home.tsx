import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Domain Brokerage Services</h1>
        <p className="text-xl text-gray-600">
          Secure your perfect domain name today
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Link
          to="/buy-domain"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-3">Buy a Domain</h2>
          <p className="text-gray-600">
            Make an offer on your desired domain name
          </p>
        </Link>

        <Link
          to="/sell-domain"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-3">Sell a Domain</h2>
          <p className="text-gray-600">List your domain name for sale</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
