<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index()
    {
        $category = Category::select('*')->paginate(10);

        return view('category.index', [
            'category' => $category
        ]);
    }

    public function create()
    {
        return view('category.create');
    }

    public function store(Request $request)
    {
        $previous_id = Category::select('category_id')
        ->orderByRaw('category_id DESC')
        ->first();
        // dd($previous_id);
        

        if ($previous_id[1]) {
            $category_id = $previous_id[1] + 1;
        } else {
            $category_id = 2;
        }

        $category = Category::create([
            'category_id' => $category_id,
            'category_name' => $request->category,
        ]);

        if ($category) {
            return redirect()->route('category.index');
        }

        // if ($category) {
        //     return response()->json([
        //         'success' => true,
        //         'category_name'    => $category,
        //     ], 201);
        // }

        //return JSON process insert failed 
        // return response()->json([
        //     'success' => false,
        // ], 409);
    }
}
