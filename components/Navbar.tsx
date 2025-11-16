'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/CartContext';
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, wishlistCount } = useCart();

  const categories = [
    { name: 'HOME', href: '/' },
    { name: 'MEN', href: '/products/men' },
    { name: 'WOMEN', href: '/products/women' },
    { name: 'KIDS', href: '/products/kids' },
    { name: 'LIVING', href: '/products/living' },
    { name: 'BEAUTY', href: '/products/beauty' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2 rounded-lg transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-500">
                  StyleAura
                </span>
                <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase group-hover:text-purple-600 transition-colors duration-300">
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu - Categories */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="relative text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 group py-2"
              >
                {category.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side - Profile, Wishlist, Bag */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Profile */}
            <Link
              href="/profile"
              className="relative flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              <div className="relative">
                <FaUser className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
              </div>
              <span className="text-xs mt-1 font-medium group-hover:font-semibold transition-all duration-300">Profile</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex flex-col items-center text-gray-700 hover:text-red-500 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-red-50"
            >
              <div className="relative">
                <FaHeart className="w-5 h-5 group-hover:scale-125 group-hover:fill-current transition-all duration-300" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
                <span className="absolute inset-0 rounded-full bg-red-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
              </div>
              <span className="text-xs mt-1 font-medium group-hover:font-semibold transition-all duration-300">Wishlist</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Bag/Cart */}
            <Link
              href="/cart"
              className="relative flex flex-col items-center text-gray-700 hover:text-green-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-green-50"
            >
              <div className="relative">
                <FaShoppingBag className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce transition-transform duration-300">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
              </div>
              <span className="text-xs mt-1 font-medium group-hover:font-semibold transition-all duration-300">Cart</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Wishlist */}
            <Link href="/wishlist" className="relative p-2 text-gray-700">
              <FaHeart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* Mobile Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700">
              <FaShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 space-y-1 border-t border-gray-200">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200"
            >
              <FaUser className="w-4 h-4 mr-3" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

