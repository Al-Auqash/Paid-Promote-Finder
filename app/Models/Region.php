<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;
    
    protected $table = 'regions';

    protected $fillable = [
        'id',
        'code_name',
        'region_name',
        'created_at',
        'updated_at',
    ];
}
