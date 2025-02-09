import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/FeatureFlow_Logo.png";
import signup_bg from "../images/login_bg.png";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [designation, setDesignation] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/auth/signup", {
                name,
                email,
                password,
                designation, // ✅ Send designation to backend
            });

            alert("Signup successful! Please login.");
            navigate("/login"); // Redirect to login page
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex p-4">
            <div className="hidden lg:flex w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${signup_bg})` }}>
                <div className="absolute bottom-4 left-4 text-white text-sm">
                    Photo by Alexandr Popadin
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center border-2 rounded-r-md border-purple-500">
                <div className="w-full max-w-md p-8">
                    <div className="text-center mb-6">
                        <img src={logo} alt="FeatureFlow Logo" className="h-10 mx-auto mb-2" />
                        <p className="text-lg font-bold text-purple-500">FeatureFlow.Digital</p>
                    </div>

                    <h2 className="text-lg font-medium text-gray-700 text-center mb-4">
                        Create an Account
                    </h2>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <form className="space-y-4" onSubmit={handleSignup}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
                            <input id="name" type="text" placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                            <input id="email" type="email" placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                            <input id="password" type="password" placeholder="Enter a strong password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-600">Designation</label>
                            <select id="designation"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={designation} onChange={(e) => setDesignation(e.target.value)} required>
                                <option value="">Select your designation</option>
                                <option value="PM">Project Manager</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700">
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 text-center mt-6">
                        Already have an account?{" "}
                        <a href="/login" className="text-purple-600 hover:underline">Sign in now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
