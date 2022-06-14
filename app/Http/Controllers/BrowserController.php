<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BrowserController extends Controller
{
    public function browse () {
        $data = DB::table('ads')
        ->join('regions', 'ads.region_id', '=', 'regions.id')
        ->join('categories', 'ads.category_id', '=', 'categories.id')
        ->select('ads.*', 'categories.category_name', 'regions.region_name')
        ->get();
    }
}
