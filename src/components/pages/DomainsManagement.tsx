const DomainsManagement = () => {
  const domains = [
    { name: "example.com", status: "For Sale", price: "$5,000" },
    { name: "sample.net", status: "Under Offer", price: "$3,000" },
    // Add more domains as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Domains Under Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Domain
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {domains.map((domain, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{domain.name}</td>
                <td className="px-6 py-4">{domain.status}</td>
                <td className="px-6 py-4">{domain.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DomainsManagement;
