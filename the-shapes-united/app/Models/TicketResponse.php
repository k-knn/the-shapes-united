<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketResponse extends Model
{
    protected $primaryKey = 'response_id';

    protected $fillable = [
        'ticket_id',
        'responder_id',
        'responder_type',
        'message',
        'created_at',
    ];

    public function ticket()
    {
        return $this->belongsTo(SupportTicket::class, 'ticket_id', 'ticket_id');
    }
}
