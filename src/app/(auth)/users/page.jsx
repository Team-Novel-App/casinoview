'use client';

import React,{useState} from 'react';
import { useAuth } from '@/hooks/auth';
const SocialLogin = () => {
  const { socialLogin } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  });
  const [errors, setErrors] = useState([]);
  const handleSocialLogin = (provider) => {
    socialLogin({
      provider,
      setErrors,
    });
  };
  return (
     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="w-full max-w-md border-0 bg-white/80 backdrop-blur-sm rounded-lg p-8">
        <div className="space-y-3 pb-8">
          <h1 className="text-3xl font-bold text-center text-[black]">
            Welcome Back
          </h1>
          <p className="text-center text-base text-black">
            Continue with your social account
          </p>
        </div>
        <div className="space-y-4">
          <button 
            className="group relative w-full h-14 text-black hover:text-white hover:bg-[#1877F2] border border-[#1877F2]/30 hover:border-[#1877F2] transition-all duration-300 ease-out overflow-hidden rounded-lg"
            onClick={() => handleSocialLogin('facebook')}
          >
            <div className="flex items-center justify-center w-full space-x-3">
              <img
                src="https://authjs.dev/img/providers/facebook.svg"
                alt="Facebook logo"
                className="w-6 h-6 transition-transform group-hover:scale-110 duration-300"
              />
              <span className="text-base font-medium">Login/Register using Facebook</span>
            </div>
          </button>
          <button 
            className="group relative w-full h-14 text-black hover:text-white hover:bg-[#EA4335] border border-[#EA4335]/30 hover:border-[#EA4335] transition-all duration-300 ease-out overflow-hidden rounded-lg"
            onClick={() => handleSocialLogin('google')}
          >
            <div className="flex items-center justify-center w-full space-x-3">
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google logo"
                className="w-6 h-6 transition-transform group-hover:scale-110 duration-300"
              />
              <span className="text-base font-medium">Login/Register using Gmail</span>
            </div>
          </button>
        </div>
        <p className="mt-8 text-center text-sm text-black">
          By continuing, you agree to our{' '}
          <a href="#" className="text-[#0000eb] hover:text-gray-600 hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-[#0000eb] hover:text-gray-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </main>
  );
};

export default SocialLogin;
