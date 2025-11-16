'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useState } from 'react';
import { useCart } from '@/components/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInCart, isInWishlist } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const isWishlisted = isInWishlist(product.id);
  const isInCartState = isInCart(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAddedToCart || isInCartState) return;
    
    setIsAddingToCart(true);
    // Simulate API call
    setTimeout(() => {
      addToCart(product);
      setIsAddingToCart(false);
      setIsAddedToCart(true);
      // Reset after 2 seconds
      setTimeout(() => setIsAddedToCart(false), 2000);
    }, 500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent adding to cart if item is already in cart
    // Only navigate, don't increase quantity
    const target = e.target as HTMLElement;
    if (!target.closest('button') && !isInCartState) {
      addToCart(product);
    }
    // If already in cart, do nothing - just allow navigation via Link
  };

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      onClick={handleCardClick}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.originalPrice && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-10 animate-pulse">
              Sale
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500 capitalize">{product.category}</span>
          </div>
        </div>
      </Link>
      
      {/* Desktop Action Buttons - Always Visible */}
      <div className="hidden md:flex items-center gap-2 px-4 pb-4">
        <button
          onClick={handleWishlist}
          className={`flex-1 h-10 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center ${
            isWishlisted
              ? 'bg-red-500 text-white shadow-md shadow-red-500/30'
              : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-500 border border-transparent hover:border-red-200'
          }`}
        >
          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
            <svg
              className={`w-4 h-4 transition-all duration-300 ${isWishlisted ? 'scale-110' : ''}`}
              fill={isWishlisted ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {isWishlisted ? 'Wishlisted' : 'Wishlist'}
          </span>
        </button>
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart || isAddedToCart || isInCartState}
          className={`flex-1 h-10 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center ${
            isAddedToCart || isInCartState
              ? 'bg-green-500 text-white shadow-md shadow-green-500/30'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {isAddingToCart ? (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Adding...
            </span>
          ) : isAddedToCart ? (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Added!
            </span>
          ) : isInCartState ? (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              In Cart
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add Cart
            </span>
          )}
        </button>
      </div>
      
      {/* Mobile Action Buttons */}
      <div className="flex items-center gap-2 px-4 pb-4 md:hidden">
        <button
          onClick={handleWishlist}
          className={`flex-1 h-10 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
            <svg
              className="w-4 h-4"
              fill={isWishlisted ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {isWishlisted ? 'Wishlisted' : 'Wishlist'}
          </span>
        </button>
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart || isAddedToCart || isInCartState}
          className={`flex-1 h-10 px-4 rounded-lg font-medium text-sm transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center ${
            isAddedToCart || isInCartState
              ? 'bg-green-500 text-white'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {isAddingToCart ? (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Adding...
            </span>
          ) : isAddedToCart ? (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Added!
            </span>
          ) : isInCartState ? (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              In Cart
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

