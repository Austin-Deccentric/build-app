'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { username: formData.username, password: formData.password, rememberMe });
    } else {
      console.log('Registering with:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 gap-8">
        
        {/* Left Column: Image Card with Overlay Text (Hidden on Mobile) */}
        <div className="hidden md:block relative w-full min-h-[550px] rounded-2xl overflow-hidden shadow-inner">
          <Image
            src={isLogin ? '/images/login_girl.png' : '/images/register_girl.png'}
            alt="Student in classroom"
            fill
            priority
            className="object-cover transition-opacity duration-500"
          />
          
          {/* Overlay Text at Bottom */}
          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-md">
              Lorem Ipsum is simply
            </h3>
            <p className="text-sm md:text-base font-medium opacity-90 mt-1 drop-shadow-sm">
              Lorem Ipsum is simply
            </p>
          </div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Right Column: Auth Form */}
        <div className="flex flex-col justify-center px-2 sm:px-6 py-4">
          
          {/* Header */}
          <p className="text-center text-gray-700 font-medium text-sm md:text-base mb-6">
            Welcome to lorem..!
          </p>

          {/* Tab Switcher */}
          <div className="bg-[#A4DCDB]/40 p-1 rounded-full flex items-center max-w-xs mx-auto w-full mb-8">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-[#49BBBD] text-white shadow-md'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-[#49BBBD] text-white shadow-md'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-xs md:text-sm text-left leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Register-only Field: Email */}
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="block text-xs md:text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email Address"
                  required
                  className="w-full px-5 py-3 rounded-full border border-[#49BBBD]/60 focus:border-[#49BBBD] focus:outline-none text-sm text-gray-700 placeholder-gray-300 transition-colors"
                />
              </div>
            )}

            {/* Username Field */}
            <div className="space-y-1.5">
              <label className="block text-xs md:text-sm font-medium text-gray-700">
                User name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your User name"
                required
                className="w-full px-5 py-3 rounded-full border border-[#49BBBD]/60 focus:border-[#49BBBD] focus:outline-none text-sm text-gray-700 placeholder-gray-300 transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs md:text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  required
                  className="w-full pl-5 pr-12 py-3 rounded-full border border-[#49BBBD]/60 focus:border-[#49BBBD] focus:outline-none text-sm text-gray-700 placeholder-gray-300 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Options: Remember Me & Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-[#49BBBD] focus:ring-[#49BBBD]"
                  />
                  <span>Rememebr me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Forgot Password ?
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-[#49BBBD] hover:bg-[#3db0b2] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default AuthCard;