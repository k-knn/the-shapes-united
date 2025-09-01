import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("sanctum_token"));
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is logged in when page loads
    useEffect(() => {
        const storedToken = localStorage.getItem("sanctum_token");
        if (storedToken) {
            // If we have a token, check if it's still valid
            checkIfUserIsLoggedIn();
        } else {
            // No token, so not authenticated
            setIsLoading(false);
        }
    }, []);

    const checkIfUserIsLoggedIn = async () => {
        try {
            const response = await axios.get("/api/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "sanctum_token"
                    )}`,
                },
            });

            if (response.data.status) {
                setUser(response.data.user);
                setToken(localStorage.getItem("sanctum_token"));
                setIsAuthenticated(true);
            } else {
                // Token is not valid, clear everything
                clearAuth();
            }
        } catch (error) {
            console.error("Token check failed:", error);
            clearAuth();
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post("/api/login", {
                email,
                password,
            });

            if (response.data.status) {
                const { sanctum_token, user } = response.data;

                // Store token and user data
                setToken(sanctum_token);
                setUser(user);
                setIsAuthenticated(true);
                localStorage.setItem("sanctum_token", sanctum_token);

                return {
                    success: true,
                    message: response.data.message,
                    user,
                };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            if (error.response?.data?.message) {
                return { success: false, message: error.response.data.message };
            }
            return {
                success: false,
                message: "Login failed. Please try again.",
            };
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post("/api/register", userData);

            if (response.status === 201) {
                return { success: true, message: response.data.message };
            } else {
                return { success: false, message: "Registration failed" };
            }
        } catch (error) {
            if (error.response?.data?.errors) {
                return { success: false, errors: error.response.data.errors };
            }
            return {
                success: false,
                message: "Registration failed. Please try again.",
            };
        }
    };

    const logout = async () => {
        try {
            if (token) {
                const response = await axios.post(
                    "/api/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                clearAuth();
                toast.success(response.data.message);
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const clearAuth = () => {
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem("sanctum_token");
        window.location.href = "/";
    };

    const updateUser = (userData) => {
        setUser(userData);
    };

    const value = {
        user,
        token,
        isAuthenticated,
        isLoading,

        login,
        register,
        logout,
        updateUser,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
