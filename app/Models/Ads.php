<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ads extends Model
{
    use HasFactory;
    
    protected $table = 'ads';

    protected $fillable = [
        'id',
        'title',
        'category_id',
        'region_id',
        'time',
        'description',
        'created_by',
        'created_at',
        'updated_at',
    ];
}
