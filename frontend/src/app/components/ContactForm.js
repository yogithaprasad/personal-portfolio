'use client'; // This is a Next.js directive for client-side interactivity
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // IMPORTANT: We will replace this with the deployed backend URL later
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000';
    
    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(`Success: ${data.message}`);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('There was an error sending the message:', error);
      setStatus('Error: Could not send message.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows="4" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"></textarea>
        </div>
        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}