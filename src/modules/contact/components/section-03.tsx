import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection03 = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-10/12 lg:w-3/4 mx-auto bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tên *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent" />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent" />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số điện thoại *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent" />
          </div>
          <div>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent text-gray-500">
              <option value="">Ngành nghề</option>
              <option value="general">IT</option>
              <option value="support">Marketing</option>
              <option value="feedback">Designer</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nội dung ..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--secondary-rgb))] focus:border-transparent resize-none" />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-[rgb(var(--secondary-rgb))] text-white font-medium rounded-md hover:opacity-80 transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection03;