'use client';

import { useState } from 'react';
import { FaUser, FaShoppingBag, FaHeart, FaMapMarkerAlt, FaCreditCard, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
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
              <button className="absolute bottom-0 right-0 bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-gray-300 mb-1">{user.email}</p>
              <p className="text-gray-400 text-sm">Member since {user.memberSince}</p>
            </div>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition backdrop-blur-sm border border-white/20">
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
      </div>
    </div>
  );
}
