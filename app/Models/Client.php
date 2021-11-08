<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['first_name', 'last_name', 'phone_number', 'email'];

    /**
     * The roles that belong to the user.
     */
    public function addresses()
    {
        return $this->belongsToMany(Address::class, ClientAddress::class);
    }
}
