'use client';

import { useState, useEffect } from 'react';
import { FaUser, FaShoppingBag, FaHeart, FaMapMarkerAlt, FaCreditCard, FaCog, FaSignOutAlt, FaEdit, FaTimes, FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';

export default function ProfilePage() {
  const { cart, wishlist } = useCart();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - In a real app, this would come from authentication
  const user = {
    name: 'Suraj Yadav',
    email: 'hkahf@example.com',
    phone: '+91 9876567',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=1f2937&color=fff&size=200',
    memberSince: 'January 2024',
  };

  const stats = [
    { label: 'Total Orders', value: '12', icon: FaShoppingBag, color: 'bg-blue-500' },
    { label: 'Wishlist Items', value: wishlist.length, icon: FaHeart, color: 'bg-red-500' },
    { label: 'Cart Items', value: cart.length, icon: FaShoppingBag, color: 'bg-green-500' },
    { label: 'Saved Addresses', value: '3', icon: FaMapMarkerAlt, color: 'bg-purple-500' },
  ];

  const orders = [
    { id: 'ORD001', date: '2024-01-15', status: 'Delivered', amount: 2499, items: 2 },
    { id: 'ORD002', date: '2024-01-10', status: 'Shipped', amount: 1799, items: 1 },
    { id: 'ORD003', date: '2024-01-05', status: 'Processing', amount: 3299, items: 3 },
  ];

  const addresses = [
    { id: 1, type: 'Home', address: '123 Main St, Mumbai, Maharashtra 400001', default: true },
    { id: 2, type: 'Work', address: '456 Park Ave, Delhi, Delhi 110001', default: false },
  ];

  // Enhanced state for better UX
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    // prevent background scroll when modal open
    document.body.style.overflow = showAuthModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showAuthModal]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!loginForm.email || !loginForm.password) {
        alert('Please enter email and password.');
        setIsLoading(false);
        return;
      }
      alert(`Welcome back, ${loginForm.email}!`);
      setShowAuthModal(false);
      setIsLoading(false);
    }, 1500);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!signupForm.name || !signupForm.email || !signupForm.password) {
        alert('Please fill all fields.');
        setIsLoading(false);
        return;
      }
      alert(`Welcome to the family, ${signupForm.name}!`);
      setShowAuthModal(false);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <button
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                }}
                className="absolute bottom-0 right-0 bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
                aria-label="Open login / signup"
              >
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-gray-300 mb-1">{user.email}</p>
              <p className="text-gray-400 text-sm">Member since {user.memberSince}</p>
            </div>
            <button
              onClick={() => {
                setAuthMode('login');
                setShowAuthModal(true);
              }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition backdrop-blur-sm border border-white/20"
            >
              <FaEdit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: FaUser },
                { id: 'orders', label: 'My Orders', icon: FaShoppingBag },
                { id: 'addresses', label: 'Addresses', icon: FaMapMarkerAlt },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Full Name</p>
                      <p className="font-semibold text-gray-900">{user.name}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <p className="font-semibold text-gray-900">{user.email}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <p className="font-semibold text-gray-900">{user.phone}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Member Since</p>
                      <p className="font-semibold text-gray-900">{user.memberSince}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/wishlist" className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 px-6 py-3 rounded-lg font-semibold transition text-center">
                    View Wishlist ({wishlist.length})
                  </Link>
                  <Link href="/cart" className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition text-center">
                    View Cart ({cart.length})
                  </Link>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="font-bold text-gray-900">Order #{order.id}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">Placed on {order.date}</p>
                          <p className="text-sm text-gray-600">{order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">₹{order.amount}</p>
                          <button className="mt-2 text-sm text-gray-900 hover:text-gray-700 font-semibold">
                            View Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Saved Addresses</h2>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    + Add New Address
                  </button>
                </div>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-gray-900">{address.type}</h3>
                            {address.default && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600">{address.address}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-gray-600 hover:text-gray-900">
                            <FaEdit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive order updates and promotions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">SMS Notifications</h3>
                        <p className="text-sm text-gray-600">Receive order updates via SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Danger Zone</h3>
                  <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                    <FaSignOutAlt className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ENHANCED AUTH MODAL */}
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
              onClick={() => setShowAuthModal(false)}
              aria-hidden="true"
            />
            
            {/* Modal */}
            <div className="relative z-10 w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all scale-100 opacity-100">
              {/* Header */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-8 py-6">
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                  aria-label="Close"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {authMode === 'login' ? 'Welcome Back!' : 'Join Us Today!'}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {authMode === 'login' 
                      ? 'Sign in to access your account and continue shopping' 
                      : 'Create an account to unlock exclusive features and offers'
                    }
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Tab Switcher */}
                <div className="flex gap-1 w-full bg-gray-100 rounded-2xl p-1 mb-8">
                  <button
                    onClick={() => {
                      setAuthMode('login');
                      setShowPassword(false);
                    }}
                    className={`flex-1 text-sm py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                      authMode === 'login' 
                        ? 'bg-white shadow-lg text-gray-900 transform scale-[0.98]' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setShowPassword(false);
                    }}
                    className={`flex-1 text-sm py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                      authMode === 'signup' 
                        ? 'bg-white shadow-lg text-gray-900 transform scale-[0.98]' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Forms */}
                {authMode === 'login' ? (
                  <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          name="email"
                          value={loginForm.email}
                          onChange={handleLoginChange}
                          type="email"
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                          placeholder="Enter your email"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                          <input
                            name="password"
                            value={loginForm.password}
                            onChange={handleLoginChange}
                            type={showPassword ? "text" : "password"}
                            className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Enter your password"
                            required
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-gray-900 rounded border-gray-300 focus:ring-gray-900" />
                        Remember me
                      </label>
                      <button 
                        type="button" 
                        className="text-gray-900 hover:text-gray-700 font-medium hover:underline transition-colors"
                        onClick={() => alert('Forgot password flow')}
                      >
                        Forgot password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-200 transform hover:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          Signing in...
                        </>
                      ) : (
                        'Sign In'
                      )}
                    </button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        type="button" 
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-[0.98]"
                      >
                        <FaGoogle className="w-4 h-4 text-red-500" />
                        Google
                      </button>
                      <button 
                        type="button" 
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-[0.98]"
                      >
                        <FaApple className="w-4 h-4" />
                        Apple
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSignupSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          name="name"
                          value={signupForm.name}
                          onChange={handleSignupChange}
                          type="text"
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                          placeholder="Enter your full name"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          name="email"
                          value={signupForm.email}
                          onChange={handleSignupChange}
                          type="email"
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                          placeholder="Enter your email"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                          <input
                            name="password"
                            value={signupForm.password}
                            onChange={handleSignupChange}
                            type={showPassword ? "text" : "password"}
                            className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Create a strong password"
                            required
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-200 transform hover:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          Creating account...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500 font-medium">Or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        type="button" 
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-[0.98]"
                      >
                        <FaGoogle className="w-4 h-4 text-red-500" />
                        Google
                      </button>
                      <button 
                        type="button" 
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-[0.98]"
                      >
                        <FaApple className="w-4 h-4" />
                        Apple
                      </button>
                    </div>

                    <p className="text-center text-xs text-gray-500 leading-relaxed">
                      By creating an account, you agree to our{' '}
                      <button type="button" className="text-gray-900 hover:underline font-medium">Terms of Service</button>
                      {' '}and{' '}
                      <button type="button" className="text-gray-900 hover:underline font-medium">Privacy Policy</button>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
        {/* END ENHANCED AUTH MODAL */}

      </div>
    </div>
  );
}
