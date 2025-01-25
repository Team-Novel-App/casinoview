'use client';

import React from 'react';
import { useState } from 'react';
import { Lock, Mail, LogIn, AlertCircle } from 'lucide-react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Simulate API error
      setErrors({
        email: 'Invalid email or password'
      });
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white/5 dark:bg-gray-800/20 p-4">
      <div className="w-full max-w-md">
        <div className="gradient-border p-1">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
            <div className="relative p-8">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <LogIn className="h-8 w-8 transform -rotate-6" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                Admin Login
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                Welcome back! Please enter your details
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                      } outline-none transition-all duration-200 text-gray-900 dark:text-white`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 mt-1.5 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border ${
                        errors.password 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                      } outline-none transition-all duration-200 text-gray-900 dark:text-white`}
                    />
                    {errors.password && (
                      <div className="flex items-center gap-1.5 mt-1.5 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.password}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <a
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400 font-medium py-3 px-4 rounded-xl 
                    hover:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-colors duration-200
                    focus:ring-2 focus:ring-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;