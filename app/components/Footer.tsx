'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for subscribing!');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Subscribe Section */}
      <div className="bg-primary-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
            <p className="mb-6">
              Sign up to hear the latest Blogs, News and Tips from Integrated Health Care Group
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-primary-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Signing up...' : 'Sign up'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm">
              Copyright © 2023 Integrated Healthcare Services Group - All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="text-sm hover:text-primary-300 transition-colors">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="text-sm hover:text-primary-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-sm hover:text-primary-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Cookie Notice */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400 text-center">
            This website uses cookies to analyze website traffic and optimize your website experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
