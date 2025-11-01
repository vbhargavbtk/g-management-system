export default function Policies() {
  const policies = [
    'No smoking or consumption of alcohol within the premises.',
    'Guests are not allowed in the rooms.',
    'Maintain silence and discipline.',
    'Rent must be paid on or before the 5th of every month.',
    'Any damage to the property will be borne by the tenant.',
    'Management is not responsible for the loss of any personal belongings.',
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">PG Policies</h1>
      <div className="max-w-3xl mx-auto">
        <ul className="list-disc list-inside space-y-4">
          {policies.map((policy, index) => (
            <li key={index} className="text-lg">{policy}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
