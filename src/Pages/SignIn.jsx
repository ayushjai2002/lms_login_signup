import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign in logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 w-full max-w-sm"
            >
                <h1 className="text-4xl text-center mb-6">Sign In</h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email Address
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                        <FaEnvelope className="ml-2 text-gray-400" />
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="p-2 w-full focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Password
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                        <FaLock className="ml-2 text-gray-400" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Enter your password"
                            className="p-2 w-full focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="p-2"
                        >
                            {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white font-semibold rounded-md p-3 w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                >
                    Sign In
                </button>
                <div className="mt-4 text-center">
                    <Link to="/forgot-password" className="text-grey-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
