import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white/5 dark:bg-gray-800/20">
    <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-900">
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Admin Login
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
