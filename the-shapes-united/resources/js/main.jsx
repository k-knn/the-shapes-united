import "./bootstrap.js";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/auth-context.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import ProtectedRoute from "./components/protected-route.jsx";
import { Toaster } from "sonner";
import Landing from "./components/landing/landing.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: "/landing",
        element: <Landing />,
    },
]);

// Create React root and render the app
const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                    <Toaster position="top-right" />
                </QueryClientProvider>
            </AuthProvider>
        </StrictMode>
    );
}
