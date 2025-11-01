export default function Fees() {
  const feeStructure = [
    { roomType: 'Single Seater', rent: 10000, deposit: 20000 },
    { roomType: 'Two Seater', rent: 8000, deposit: 16000 },
    { roomType: 'Three Seater', rent: 7000, deposit: 14000 },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Fee Structure</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-md shadow-md">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Room Type</th>
                <th className="text-left py-2">Rent (per month)</th>
                <th className="text-left py-2">Security Deposit</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((fee, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{fee.roomType}</td>
                  <td className="py-2">₹{fee.rent}</td>
                  <td className="py-2">₹{fee.deposit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-8 text-sm text-gray-600">
            * The security deposit is refundable at the time of vacating the room, subject to a notice period of one month.
          </p>
        </div>
      </div>
    </div>
  );
}
