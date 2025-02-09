import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/FeatureFlow_Logo.png";
import login_bg from "../images/login_bg.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            // ✅ Redirect user based on their designation
            if (response.data.user.designation === "PM") {
                navigate("/base"); // Redirect to PM dashboard
            } else if (response.data.user.designation === "Employee") {
                navigate("/base"); // Redirect to Employee dashboard
            } else {
                navigate("/dashboard"); // Default redirect
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex p-4">
            {/* Left Side - Image Section */}
            <div
                className="hidden lg:flex w-1/2 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${login_bg})` }}
            >
                <div className="absolute bottom-4 left-4 text-white text-sm">
                    Photo by Alexandr Popadin
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center border-2 rounded-r-md border-purple-500">
                <div className="w-full max-w-md p-8">
                    {/* Logo */}
                    <div className="text-center mb-6">
                        <img src={logo} alt="FeatureFlow Logo" className="h-10 mx-auto mb-2" />
                        <p className="text-lg font-bold text-purple-500">FeatureFlow.Digital</p>
                    </div>

                    {/* Form Heading */}
                    <h2 className="text-lg font-medium text-gray-700 text-center mb-4">
                        Nice to see you again
                    </h2>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-purple-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Sign-In Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700"
                        >
                            Sign in
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center mt-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <p className="px-4 text-sm text-gray-600">or</p>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Signup - Fixed Link */}
                    <p className="text-sm text-gray-600 text-center mt-6">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-purple-600 hover:underline">
                            Sign up now
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
