<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketAttachment extends Model
{
    protected $primaryKey = 'attachment_id';

    protected $fillable = [
        'ticket_id',
        'file_url',
        'uploaded_at',
    ];

    public function ticket()
    {
        return $this->belongsTo(SupportTicket::class, 'ticket_id', 'ticket_id');
    }
}
