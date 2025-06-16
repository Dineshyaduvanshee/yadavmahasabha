import React, { useState } from 'react';
import Join from './Join';

function LoginWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    // Dummy login credentials
    if (email === 'admin@example.com' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ email: '', password: '' });
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="mb-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
            <Join />
          </>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-700">Login to Join</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginWrapper;
