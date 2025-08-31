<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportTicket extends Model
{
    protected $primaryKey = 'ticket_id';

    protected $fillable = [
        'user_id',
        'subject',
        'description',
        'status',
        'priority',
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function responses()
    {
        return $this->hasMany(TicketResponse::class, 'ticket_id', 'ticket_id');
    }

    public function attachments()
    {
        return $this->hasMany(TicketAttachment::class, 'ticket_id', 'ticket_id');
    }
}
