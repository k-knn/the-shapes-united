<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // secure hashing and storage of passwords
use App\Models\User; // link and use model User
use Illuminate\Validation\ValidationException;  // For throwing validation exception
use Illuminate\Support\Facades\Route;


class AuthController extends Controller
{
      // Register
    public function register(Request $request)
    {
        try {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email
        ], 201);
    }  catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json(['errors' => $e->errors()], 422);
    }
}




// login functionality

public function login(Request $request)
{
    // Validate input fields
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    // Find user by email
    $user = User::where('email', $request->email)->first();

    // If user not found
    if (! $user) {
        return response()->json([
            'status' => false,
            'message' => 'User not found.',
        ], 404);
    }

    // Check password hash
    if (! Hash::check($request->password, $user->password)) {
        return response()->json([
            'status' => false,
            'message' => 'The provided credentials are incorrect.',
        ], 401);
    }

    // Create Sanctum token
    $token = $user->createToken('auth_token')->plainTextToken;

    // Return success response
    return response()->json([
        'status' => true,
        'message' => 'Logged in successfully',
        'sanctum_token' => $token,
        'user' => [
            'id' => $user->user_id ?? $user->id,    // adapt based on your PK
            'name' => trim($user->first_name . ' ' . ($user->last_name ?? '')),
            'email' => $user->email,
        ],
    ]);
}


    // Logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'user' => $request->user(),
            'message' => 'Logged out successfully'
        ]);
    }

    // Get authenticated user data
    public function me(Request $request)
    {

        // When using postman pass the api token in Authorization: Bearer Your_Sanctum_Here KeyValue pair
        return response()->json(
            [
                'status'=>true,
                'message' => "User data retreieved successfully",
                 'user'=>$request->user()

            ]);
    }
}
