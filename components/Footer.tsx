'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-3xl font-bold">StyleAura</h3>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Your destination for the latest fashion trends. We bring you curated collections of clothing, accessories, and more from top brands worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                <FaPhone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                <FaEnvelope className="w-4 h-4" />
                <span className="text-sm">support@styleaura.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                <FaMapMarkerAlt className="w-4 h-4 mt-1" />
                <span className="text-sm">123 Fashion Street, Mumbai,<br />Maharashtra 400001, India</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products/men" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Men&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/products/women" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Women&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/products/kids" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Kids Collection
                </Link>
              </li>
              <li>
                <Link href="/products/living" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/products/beauty" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Beauty & Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Payment */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Follow Us</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110" aria-label="Pinterest">
                  <FaPinterest size={20} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">We Accept</h4>
              <div className="flex gap-3 flex-wrap justify-center md:justify-end">
                <div className="px-3 py-2 bg-white rounded text-gray-900 text-xs font-semibold">VISA</div>
                <div className="px-3 py-2 bg-white rounded text-gray-900 text-xs font-semibold">MASTERCARD</div>
                <div className="px-3 py-2 bg-white rounded text-gray-900 text-xs font-semibold">AMEX</div>
                <div className="px-3 py-2 bg-white rounded text-gray-900 text-xs font-semibold">PAYPAL</div>
                <div className="px-3 py-2 bg-white rounded text-gray-900 text-xs font-semibold">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} StyleAura. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition">Terms of Use</Link>
              <Link href="#" className="hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

