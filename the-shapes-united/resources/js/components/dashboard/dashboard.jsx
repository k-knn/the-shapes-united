import React from "react";
import { useAuth } from "../../contexts/auth-context";

function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Welcome to Dashboard
                        </h1>
                        <button
                            onClick={logout}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                            Logout
                        </button>
                    </div>

                    {user && (
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">
                                User Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Name
                                    </p>
                                    <p className="font-medium">
                                        {user.first_name} {user.last_name}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Email
                                    </p>
                                    <p className="font-medium">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-6">
                        <p className="text-gray-600">
                            This is a protected dashboard route. Only
                            authenticated users can see this content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
