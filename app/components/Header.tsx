'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFaqsOpen, setIsFaqsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-12">
              <Image
                src="https://img1.wsimg.com/isteam/ip/4fb5bccd-64f7-492b-818a-97bac130d242/PHOTO-2024-07-17-09-47-18.jpg"
                alt="Integrated Health Care Group"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="/our-team" className="text-gray-700 hover:text-primary-500 transition-colors">
              Our Team
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <Link href="/telemedicine" className="text-gray-700 hover:text-primary-500 transition-colors">
              TeleMedicine
            </Link>
            <Link href="/insurance" className="text-gray-700 hover:text-primary-500 transition-colors">
              Insurance
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary-500 transition-colors">
              Locations
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-500 transition-colors">
              Blog
            </Link>
            
            {/* FAQs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFaqsOpen(!isFaqsOpen)}
                className="flex items-center text-gray-700 hover:text-primary-500 transition-colors"
              >
                FAQs
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isFaqsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isFaqsOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link
                    href="/privacy-policy"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsFaqsOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-conditions"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsFaqsOpen(false)}
                  >
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-primary-500 transition-colors">
              Contact Us
            </Link>

            {/* CTA Button */}
            <a
              href="tel:+17865361701"
              className="flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/our-team"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/telemedicine"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              TeleMedicine
            </Link>
            <Link
              href="/insurance"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Insurance
            </Link>
            <Link
              href="/locations"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/privacy-policy"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a
              href="tel:+17865361701"
              className="flex items-center justify-center bg-primary-500 text-white px-6 py-2 rounded-full mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
