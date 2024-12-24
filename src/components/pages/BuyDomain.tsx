import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your_publishable_key");

const BuyDomain = () => {
  const [formData, setFormData] = useState({
    domainName: "",
    price: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add Stripe payment logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Buy a Domain</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Domain Name"
          className="w-full p-2 border rounded"
          value={formData.domainName}
          onChange={(e) =>
            setFormData({ ...formData, domainName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Offer Price"
          className="w-full p-2 border rounded"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500"
        >
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default BuyDomain;
