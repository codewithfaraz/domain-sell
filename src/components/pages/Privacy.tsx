const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p className="mb-3">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Register on our platform</li>
            <li>Make a purchase or sale</li>
            <li>Contact our support team</li>
            <li>Subscribe to our newsletters</li>
          </ul>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Privacy;
