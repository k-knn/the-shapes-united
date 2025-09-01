import React from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../contexts/auth-context";
import { toast } from "sonner";
import { Button } from "./ui/button";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    // Zod validation schema
    const schema = z.object({
        email: z
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters"),
        remember: z.boolean().optional(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const result = await login(data.email, data.password);
            if (result.success) {
                // Navigate to dashboard on successful login
                toast.success(result.message);
                navigate("/dashboard");
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
            // You can add error handling here (e.g., show error message)
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Side - Brand */}
            <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 sm:p-8 min-h-[40vh] lg:min-h-screen">
                <div className="max-w-md">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="Brand Logo"
                        className="mx-auto h-20 w-20 mb-6"
                    />
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 bg-white flex items-center justify-center p-4 sm:p-8 min-h-[60vh] lg:min-h-screen">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Log In
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your valid email address"
                                {...register("email")}
                                className={`w-full px-3 py-3 border rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your 8 digit password"
                                {...register("password")}
                                className={`w-full px-3 py-3 border rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                                It must be a combination of minimum 8 letters,
                                numbers, and symbols.
                            </p>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    {...register("remember")}
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm text-gray-700"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-700 self-start sm:self-auto"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Logging In..." : "Log In"}
                        </button>
                        <Button >Click me</Button>

                        {/* Social Login Buttons */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors text-sm sm:text-base"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span className="hidden sm:inline">
                                    Log in with Google
                                </span>
                                <span className="sm:hidden">Google</span>
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors text-sm sm:text-base"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="#000000"
                                >
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <span className="hidden sm:inline">
                                    Log in with Apple
                                </span>
                                <span className="sm:hidden">Apple</span>
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                {"Don't have an account? "}
                                <Link
                                    to="/register"
                                    className="text-black hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
