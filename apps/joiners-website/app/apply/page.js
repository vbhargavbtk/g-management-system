'use client';

import { useState } from 'react';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: 'single',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual API call to /api/applications
    console.log(formData);
    alert('Your application has been submitted!');
    setFormData({ name: '', email: '', phone: '', roomType: 'single' });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Apply Now</h1>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Full Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-bold mb-2">Phone Number</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="roomType" className="block text-lg font-bold mb-2">Preferred Room Type</label>
            <select name="roomType" id="roomType" value={formData.roomType} onChange={handleChange} className="w-full px-3 py-2 border rounded-md">
              <option value="single">Single Seater</option>
              <option value="double">Two Seater</option>
              <option value="triple">Three Seater</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700">Submit Application</button>
        </form>
      </div>
    </div>
  );
}
