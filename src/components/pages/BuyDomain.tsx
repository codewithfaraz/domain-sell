import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");

// Separate payment form component
const PaymentForm = ({ formData }: { formData: any }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 1000, // Example price in cents
          domainDetails: formData,
        }),
      });

      const { clientSecret } = await response.json();

      // Get card element
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not found");

      // Confirm payment
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: formData.name,
              email: formData.email,
            },
          },
        });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      console.log("Payment successful!", paymentIntent);
      // Add success handling logic here
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Domain Name"
        className="w-full p-2 border rounded"
        value={formData.domainName}
        onChange={(e) =>
          formData.setFormData({ ...formData, domainName: e.target.value })
        }
      />
      {/* ...other form inputs... */}
      <div className="p-3 border rounded">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Submit Offer"}
      </button>
    </form>
  );
};

// Main component
const BuyDomain = () => {
  const [formData, setFormData] = useState({
    domainName: "",
    price: "",
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Buy a Domain</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm formData={{ ...formData, setFormData }} />
      </Elements>
    </div>
  );
};

export default BuyDomain;
