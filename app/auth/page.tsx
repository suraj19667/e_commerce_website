'use client';

import { useState } from 'react';
import { FaGoogle, FaApple, FaEye, FaEyeSlash, FaArrowLeft, FaShieldAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (!loginForm.email || !loginForm.password) {
        alert('Please enter email and password.');
        setIsLoading(false);
        return;
      }
      alert(`Welcome back, ${loginForm.email}!`);
      router.push('/profile');
      setIsLoading(false);
    }, 1500);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (!signupForm.name || !signupForm.email || !signupForm.password) {
        alert('Please fill all fields.');
        setIsLoading(false);
        return;
      }
      alert(`Welcome to the family, ${signupForm.name}!`);
      router.push('/profile');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
      >
        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold">StyleAura</h1>
              </div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Welcome to Your <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Fashion Destination
                </span>
              </h2>
              <p className="text-gray-300 text-lg">
                Join thousands of fashion enthusiasts and discover your unique style.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <FaShieldAlt className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure & Safe</h3>
                  <p className="text-sm text-gray-400">Your data is protected with enterprise-grade security</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <FaLock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Privacy First</h3>
                  <p className="text-sm text-gray-400">We respect your privacy and never share your data</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <FaEnvelope className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Exclusive Offers</h3>
                  <p className="text-sm text-gray-400">Get early access to sales and special promotions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-gray-400 text-sm">
              "StyleAura transformed my shopping experience. The curated collections and personalized recommendations are simply amazing!"
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Sarah Johnson</p>
                <p className="text-gray-400 text-xs">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="p-8 sm:p-12 flex flex-col justify-center relative">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StyleAura
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {authMode === 'login' ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {authMode === 'login' 
                ? 'Sign in to continue your fashion journey' 
                : 'Join us and start your style transformation'
              }
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 w-full bg-gray-100 rounded-2xl p-1.5 mb-8">
            <button
              onClick={() => {
                setAuthMode('login');
                setShowPassword(false);
              }}
              className={`flex-1 text-sm py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
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
              className={`flex-1 text-sm py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
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
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  type="email"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  Remember me
                </label>
                <button 
                  type="button" 
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                  onClick={() => alert('Forgot password flow')}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                  Google
                </button>
                <button 
                  type="button" 
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  <FaApple className="w-5 h-5" />
                  Apple
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  name="name"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                  type="text"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  name="email"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                  type="email"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    value={signupForm.password}
                    onChange={handleSignupChange}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="Create a strong password"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters long</p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                  Google
                </button>
                <button 
                  type="button" 
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  <FaApple className="w-5 h-5" />
                  Apple
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 leading-relaxed">
                By creating an account, you agree to our{' '}
                <button type="button" className="text-purple-600 hover:underline font-semibold">Terms</button>
                {' '}and{' '}
                <button type="button" className="text-purple-600 hover:underline font-semibold">Privacy Policy</button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
