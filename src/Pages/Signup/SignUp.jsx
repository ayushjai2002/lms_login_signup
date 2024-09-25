import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [agree, setAgree] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agree) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        setSuccess(true);
        navigate('/dashboard'); // Redirect to the dashboard
    };
    return (
        <div className="h-screen flex flex-col md:flex-row">
            <div className="bg-white-500 flex-1 p-4">
                {/* Content for the first div */}
                <h1 className="text-black text-xl font-bold md:text-2xl pt-4 pb-1">Get Started with LMS</h1>
                <div className="text-customColor text-xs font-light">Already have an account?
                <Link to="/sign-in" className="text-green-500 font-bold pl-1">Login</Link></div>
                {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
                <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 w-full max-w-sm"
            >

                {success && <p className="text-green-500 text-center mb-4">Registration Successful!</p>}

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Your Name
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                        <FaUser className="ml-2 text-gray-400" />
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="p-2 w-full focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>

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

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact">
                        Contact Number
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                            type="tel"
                            id="contact"
                            placeholder="Enter your number"
                            className="p-2 w-full focus:outline-none"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Create Password
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                        <FaLock className="ml-2 text-gray-400" />
                        <input
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            className="p-2 w-full focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                            className="mr-2"
                        />
                        <label htmlFor="agree" className="text-sm text-gray-700">
                            I agree to the <a href="/terms" className="text-green-500">terms and conditions</a>.
                        </label>
                    </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white font-semibold p-2 w-40 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                >
                    Get Started
                </button>
            </form>
            </div>
            <div className="bg-green-500 flex-1 p-4">
                {/* Content for the second div */}
                <h1 className="text-white text-xl md:text-2xl">Right Side</h1>
                <p className="text-white">This is the right content.</p>
            </div>
        </div>
    )
}

export default SignUp;