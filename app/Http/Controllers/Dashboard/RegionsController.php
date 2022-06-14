<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Region;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegionsController extends Controller
{
    public function index()
    {
        $region = Region::select('*')->paginate(10);

        return view('region.index', [
            'region' => $region
        ]);
    }

    public function client()
    {
        // $region = DB::table('region')->get();
        $region = Region::select('*')->get();
        // dd($region->toJson());
        return $region->toJson();
    }

    public function create()
    {
        return view('region.create');
    }

    public function store(Request $request)
    {
        // $previous_id = Region::select('category_id')
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

        $region = Region::create([
            // 'category_id' => $category_id,
            'code_name' => $request->code_name,
            'region_name' => $request->region,
        ]);

        if ($region) {
            return redirect()->route('region.index');
        }

        // if ($region) {
        //     return response()->json([
        //         'success' => true,
        //         'region_name'    => $region,
        //     ], 201);
        // }

        //return JSON process insert failed 
        // return response()->json([
        //     'success' => false,
        // ], 409);
    }

    public function edit(Region $region)
    {
        return view('region.edit', [
            'region' => $region
        ]);
    }

    public function update(Request $request, Region $region)
    {
        $data = $request->all();

        if ($region->update($data)) {
            return redirect()->route('region.index');
        }
    }

    public function destroy(Region $region)
    {
        $region->delete();

        return redirect()->route('region.index');
    }
}
