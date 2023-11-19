import React, { useState } from 'react';
import('tailwindcss').Config

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = 'alshandra.walangadi@gmail.com';
    const subject = encodeURIComponent(e.target.subject.value);
    const body = encodeURIComponent(e.target.message.value);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    const [length, setLength]=useState(0)
  };

  return (
    <div id="contact" className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>Feel free to reach out to me using the contact information below :</p>
      <p>Phone: (+62) 8176972056</p> <br/>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={(e) => setLength(e.target.value.length)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            onChange={(e) => setLength(e.target.value.length)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="transition ease-in-out delay-150 bg-gray-800 text-white p-2 px-4 rounded-md 
            hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
