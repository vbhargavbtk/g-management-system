import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect PG</h1>
          <p className="text-xl mb-8">Comfortable and affordable living for students and professionals.</p>
          <button className="bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-emerald-600">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Fully Furnished Rooms</h3>
              <p>Comfortable beds, study tables, and ample storage.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">High-Speed Wi-Fi</h3>
              <p>Stay connected with our reliable and fast internet.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Daily Housekeeping</h3>
              <p>Clean and hygienic living spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Tenants Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-md shadow-md">
              <p className="mb-4">"A great place to live! The management is very helpful and the facilities are excellent."</p>
              <p className="font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md">
              <p className="mb-4">"I've had a wonderful experience here. The rooms are clean and the food is good."</p>
              <p className="font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
