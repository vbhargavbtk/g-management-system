'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual API call to /api/contact
    console.log(formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-3 py-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
}
