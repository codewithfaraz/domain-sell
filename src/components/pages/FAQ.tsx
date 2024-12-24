const FAQ = () => {
  const faqs = [
    {
      question: "How does the domain buying process work?",
      answer:
        "Submit your offer through our form, pay the processing fee, and we'll contact the domain owner on your behalf.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Typically, we respond within 24-48 hours of receiving your offer.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
