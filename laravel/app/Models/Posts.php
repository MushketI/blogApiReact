<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = [
       'user_id', 'title', 'content', 'active', 'published_at'
    ];

    protected $casts = [
        'published_at' => 'date'
    ];



}
