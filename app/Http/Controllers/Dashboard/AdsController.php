<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Ads;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AdsController extends Controller
{
    function index()
    {
        $ads = Ads::paginate(10);
        return view('dashboard.regions.index', [
            'ads' => $ads
        ]);
    }

    function client()
    {
        $ads = DB::table('ads')
            ->select('*')
            ->get();

        return view('layouts.app2', [$ads->toJson()]);
    }

    // public function create()
    // {
    //     return view('dashboard.regions.create');
    // }

    // public function store(RegionRequest $request)
    // {
    //     Region::create([
    //         'region' => $request->region,
    //     ]);

    //     return redirect()->route('dashboard.regions.index');
    // }

    // public function edit(Region $region)
    // {
    //     return view('regions.edit', [
    //         'item' => $region
    //     ]);
    // }

    // public function update(Request $request, Region $region)
    // {
    //     $data = $request->all();

    //     // if ($request->file('profile_photo_paths')) {
    //     //     $data['profile_photo_path'] = $request->file('profile_photo_path')->store('assets/region', 'public');
    //     // }

    //     $region->update($data);

    //     return redirect()->route('dashboard.regions.index');
    // }

    // public function destroy(Region $region)
    // {
    //     $region->delete();

    //     return redirect()->route('dashboard.regions.index');
    // }
}
