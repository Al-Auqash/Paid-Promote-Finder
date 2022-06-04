<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegionsController extends Controller
{
    
    function index()
    {
        return view('/dashboard/regions/index');
    }
}
