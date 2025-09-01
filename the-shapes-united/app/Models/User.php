<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // Sanctum is for API token management  Allow users to create API tokens
use Laravel\Fortify\TwoFactorAuthenticatable; // Fortify is for two factor authentication
use Laravel\Jetstream\HasProfilePhoto; // Authentication Scaffolding purpose such as auth and API tokens is provided by JetStream too


class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    // createTokens issue will be solved by HasApiTokens
    use HasApiTokens, HasFactory, Notifiable, TwoFactorAuthenticatable, HasProfilePhoto;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $primaryKey = 'user_id';
    protected $fillable = [
       'first_name',
        'last_name',
        'email',
        'password',
        'phone',
        'role',
        'is_active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password_hash',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'user_id', 'user_id');
    }

    public function supportTickets()
    {
        return $this->hasMany(SupportTicket::class, 'user_id', 'user_id');
    }
}
