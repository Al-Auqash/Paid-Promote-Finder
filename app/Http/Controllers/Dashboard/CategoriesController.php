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
        // $previous_id = Category::select('category_id')
        //     ->orderByRaw('category_id DESC')
        //     ->limit(1)
        //     ->first();

        // dd($previous_id);

        // foreach ($previous_id as $item) {
        //     if ($item > 0) {
        //         $category_id = $item + 1;
        //     } else {
        //         $category_id = 1;
        //     }
        // }

        $category = Category::create([
            // 'category_id' => $category_id,
            'code_name' => $request->code_name,
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

    public function edit(Category $category)
    {
        return view('category.edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $data = $request->all();

        if ($category->update($data)) {
            return redirect()->route('category.index');
        }
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('category.index');
    }
}
