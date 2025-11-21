'use client';

import { useState } from 'react';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import WorkWithUs from '@/components/features/contact/WorkWithUs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This would send to backend in production)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-studio-black pt-16">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-white mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-text-body text-xl max-w-2xl mx-auto">
            Have questions, feedback, or want to work with us? Drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card-dark rounded-lg p-6 border border-zinc-700">
              <EnvelopeSimple size={32} weight="bold" className="text-spicy-orange mb-4" />
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                Email
              </h3>
              <a href="mailto:hello@openchats.co.za" className="text-text-body hover:text-spicy-orange transition-colors">
                hello@openchats.co.za
              </a>
              <p className="text-text-muted text-sm mt-2">
                General inquiries
              </p>
            </div>

            <div className="bg-card-dark rounded-lg p-6 border border-zinc-700">
              <EnvelopeSimple size={32} weight="bold" className="text-spicy-orange mb-4" />
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                Partnerships
              </h3>
              <a href="mailto:partnerships@openchats.co.za" className="text-text-body hover:text-spicy-orange transition-colors">
                partnerships@openchats.co.za
              </a>
              <p className="text-text-muted text-sm mt-2">
                Sponsorships & collaborations
              </p>
            </div>

            <div className="bg-card-dark rounded-lg p-6 border border-zinc-700">
              <MapPin size={32} weight="bold" className="text-spicy-orange mb-4" />
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                Location
              </h3>
              <p className="text-text-body">
                Pretoria, South Africa 🇿🇦
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card-dark rounded-lg p-8 border border-zinc-700 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Work With Us Section */}
      <WorkWithUs />
    </div>
  );
}