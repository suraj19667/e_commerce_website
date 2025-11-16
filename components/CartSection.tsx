'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';
import { useEffect } from 'react';

export default function CartSection() {
  const { cart, updateQuantity, removeFromCart, isCartOpen, closeCart, cartCount } = useCart();

  const subtotal = cart.reduce((total: number, item) => total + item.price * item.quantity, 0);
  const totalItems = cartCount;

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      
      {/* Cart Drawer */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-300 ease-out pointer-events-auto ${
            isCartOpen 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <div className="flex flex-col h-full max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              {cart.length > 0 && (
                <span className="bg-gray-900 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-24 w-24 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h3>
                <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <button
                  onClick={closeCart}
                  className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
                
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <Link href={`/products/${item.id}`} onClick={closeCart} className="flex-shrink-0">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <Link href={`/products/${item.id}`} onClick={closeCart}>
                            <h3 className="text-base font-semibold text-gray-900 mb-1 hover:text-gray-700 transition line-clamp-1">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg font-bold text-gray-900">₹{item.price.toFixed(2)}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹{item.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 text-gray-700 hover:bg-gray-100 transition-colors rounded-l-lg"
                                aria-label="Decrease quantity"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                              </button>
                              <span className="px-3 py-1 text-gray-900 font-semibold min-w-[2rem] text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 text-gray-700 hover:bg-gray-100 transition-colors rounded-r-lg"
                                aria-label="Increase quantity"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                              </button>
                            </div>

                            {/* Item Total and Remove */}
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <p className="text-sm font-bold text-gray-900">
                                  ₹{(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                aria-label="Remove item"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Order Summary Footer - Only show when cart has items */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 bg-white p-6 sticky bottom-0">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={closeCart}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={closeCart}
                className="block w-full text-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

