<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = ['country', 'city', 'address'];

    public function clients()
    {
        return $this->belongsToMany(Client::class, ClientAddress::class);
    }
}
